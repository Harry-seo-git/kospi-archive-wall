// KOSPI 실데이터 프록시 — Twelve Data → Stooq → Yahoo(query1→query2).
// 월봉(장기 곡선) + 일봉(정확한 최신 종가)을 함께 반환하고,
// 짧은 캐시(s-maxage=600)로 업스트림 지연을 자가치유한다.
// 장중 호출이면 intraday=true(잠정). 모든 소스 실패 시 502 → 클라이언트 번들 폴백.
// 키: TWELVEDATA_APIKEY(1순위, 권장), STOOQ_APIKEY(폴백). 둘 다 없으면 Yahoo만 사용.

const UA = { "User-Agent": "Mozilla/5.0 (compatible; KospiArchiveWall/1.0)" };
const CLOSE_MIN = 15 * 60 + 45; // 15:45 KST — 정산 + 버퍼
const OPEN_MIN = 9 * 60; // 09:00 KST
const TIMEOUT_MS = 7000;

function ymd(d) {
  return d.toISOString().slice(0, 10);
}

function timedFetch(url, opts) {
  return fetch(url, Object.assign({ signal: AbortSignal.timeout(TIMEOUT_MS) }, opts));
}

const YAHOO_HOSTS = ["query1.finance.yahoo.com", "query2.finance.yahoo.com"];

function parseYahoo(json) {
  const r = json && json.chart && json.chart.result && json.chart.result[0];
  const ts = (r && r.timestamp) || [];
  const closes =
    (r && r.indicators && r.indicators.quote && r.indicators.quote[0] && r.indicators.quote[0].close) || [];
  const out = [];
  for (let i = 0; i < ts.length; i += 1) {
    const c = closes[i];
    if (c == null || !Number.isFinite(c)) continue;
    out.push({ date: ymd(new Date(ts[i] * 1000)), close: Math.round(c * 100) / 100 });
  }
  return out;
}

async function yahoo(range, interval) {
  let lastErr;
  for (const host of YAHOO_HOSTS) {
    try {
      const url = `https://${host}/v8/finance/chart/%5EKS11?range=${range}&interval=${interval}`;
      const res = await timedFetch(url, { headers: Object.assign({ Accept: "application/json" }, UA) });
      if (!res.ok) throw new Error(`yahoo ${host} ${res.status}`);
      return parseYahoo(await res.json());
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr || new Error("yahoo failed");
}

// Twelve Data — 1순위. KOSPI 종합지수 심볼은 보통 "KS11"; 계정·플랜에 따라
// 다른 표기를 쓰는 경우 TWELVEDATA_SYMBOL 환경변수로 덮어쓸 수 있다(예: "^KS11").
async function twelveData(interval) {
  const key = process.env.TWELVEDATA_APIKEY;
  if (!key) throw new Error("twelvedata skipped: no TWELVEDATA_APIKEY");
  const symbol = process.env.TWELVEDATA_SYMBOL || "KS11";
  const outputsize = interval === "1day" ? "365" : "600";
  const url = `https://api.twelvedata.com/time_series?symbol=${encodeURIComponent(symbol)}`
    + `&interval=${interval}&outputsize=${outputsize}&order=ASC&timezone=Asia/Seoul`
    + `&apikey=${encodeURIComponent(key)}`;
  const res = await timedFetch(url, { headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error(`twelvedata ${res.status}`);
  const json = await res.json();
  if (!json || json.status === "error" || !Array.isArray(json.values)) {
    throw new Error(`twelvedata: ${(json && (json.message || json.code)) || "no values"}`);
  }
  const out = [];
  for (const v of json.values) {
    const c = parseFloat(v.close);
    if (v.datetime && Number.isFinite(c) && c > 0) {
      out.push({ date: String(v.datetime).slice(0, 10), close: Math.round(c * 100) / 100 });
    }
  }
  // order=ASC지만 만약 응답이 descending이어도 안전하게 정렬.
  out.sort((a, b) => a.date.localeCompare(b.date));
  return out;
}

async function stooq(interval) {
  const key = process.env.STOOQ_APIKEY;
  if (!key) throw new Error("stooq skipped: no STOOQ_APIKEY");
  const url = `https://stooq.com/q/d/l/?s=^kospi&i=${interval}&apikey=${encodeURIComponent(key)}`;
  const res = await timedFetch(url, { headers: UA });
  if (!res.ok) throw new Error(`stooq ${res.status}`);
  const text = await res.text();
  // CSV가 아니면(apikey/캡차 안내 등) 파싱하지 않고 실패 처리.
  if (!/^date,/i.test(text.trim()) || /apikey/i.test(text)) {
    throw new Error("stooq non-CSV response");
  }
  const lines = text.trim().split(/\r?\n/);
  const out = [];
  for (let i = 1; i < lines.length; i += 1) {
    const cols = lines[i].split(",");
    const close = parseFloat(cols[4]);
    if (cols[0] && Number.isFinite(close)) out.push({ date: cols[0], close: Math.round(close * 100) / 100 });
  }
  return out;
}

function kstNow() {
  const k = new Date(Date.now() + 9 * 3600 * 1000);
  return {
    date: k,
    ymd: k.toISOString().slice(0, 10),
    day: k.getUTCDay(), // 0 Sun .. 6 Sat (KST)
    minutes: k.getUTCHours() * 60 + k.getUTCMinutes()
  };
}

module.exports = async (req, res) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  // 짧은 캐시로 자가 치유 — 업스트림(야후)이 늦게 갱신돼도 ~10분이면 최신을 따라잡는다.
  // (이전엔 '다음 정산까지(≈24h)' + SWR 24h라, 장 마감 직후 야후가 아직 못 올린
  //  옛 스냅샷을 하루 종일 고정 서빙해 날짜가 멈추거나 역행하는 문제가 있었다.)
  res.setHeader("Cache-Control", "public, s-maxage=600, stale-while-revalidate=120");

  const out = { asOf: null, intraday: false, source: "none", monthly: [], daily: [] };

  // 1순위 — Twelve Data (TWELVEDATA_APIKEY 있을 때만). 부분 성공 허용.
  {
    const [mr, dr] = await Promise.allSettled([twelveData("1month"), twelveData("1day")]);
    const m = mr.status === "fulfilled" ? mr.value : [];
    const d = dr.status === "fulfilled" ? dr.value : [];
    if (m.length > 12) {
      out.monthly = m;
      out.daily = d;
      out.source = "twelvedata";
    }
  }

  // 2순위 — Stooq (STOOQ_APIKEY 있을 때만, KRX 원본 가까움). 부분 성공 허용.
  if (out.source === "none") {
    const [mr, dr] = await Promise.allSettled([stooq("m"), stooq("d")]);
    const m = mr.status === "fulfilled" ? mr.value : [];
    const d = dr.status === "fulfilled" ? dr.value : [];
    if (m.length > 12) {
      out.monthly = m;
      out.daily = d;
      out.source = "stooq";
    }
  }

  // 3순위 — Yahoo (키 없이 무조건 시도, 마지막 안전망). 부분 성공 허용.
  if (out.source === "none") {
    const [mr, dr] = await Promise.allSettled([yahoo("max", "1mo"), yahoo("1y", "1d")]);
    const m = mr.status === "fulfilled" ? mr.value : [];
    const d = dr.status === "fulfilled" ? dr.value : [];
    if (m.length > 12) {
      out.monthly = m;
      out.daily = d;
      out.source = "yahoo";
    }
  }

  if (!out.monthly.length) {
    res.status(502).json(out);
    return;
  }

  // 일봉/월봉 중 가장 최근 '날짜'의 바를 최신으로 — 야후 일봉이 늦으면 월봉이
  // 더 최신일 수 있어, 더 옛 바로 역행하지 않도록 max(date)를 고른다.
  const lastDaily = out.daily.length ? out.daily[out.daily.length - 1] : null;
  const lastMonthly = out.monthly.length ? out.monthly[out.monthly.length - 1] : null;
  const latest = !lastDaily ? lastMonthly
    : !lastMonthly ? lastDaily
    : (lastDaily.date >= lastMonthly.date ? lastDaily : lastMonthly);
  out.latest = latest;
  out.asOf = latest.date;

  const k = kstNow();
  const isWeekday = k.day >= 1 && k.day <= 5;
  out.intraday =
    isWeekday && k.minutes >= OPEN_MIN && k.minutes < CLOSE_MIN && latest.date === k.ymd;

  res.status(200).json(out);
};
