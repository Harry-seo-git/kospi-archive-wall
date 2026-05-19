// KOSPI 실데이터 프록시 — 야후(query1→query2) → Stooq.
// 월봉(장기 곡선) + 일봉(정확한 최신 종가)을 함께 반환하고,
// 캐시 TTL을 "다음 KRX 정산(평일 15:45 KST)"에 맞춰 동적으로 설정한다.
// 장중 호출이면 intraday=true(잠정). 모든 소스 실패 시 502 → 클라이언트 번들 폴백.
// Stooq는 무료 CSV에 apikey(캡차 발급)를 요구하므로 STOOQ_APIKEY 환경변수가
// 있을 때만 폴백으로 사용. 키가 없거나 apikey 안내 응답이면 깔끔히 건너뛴다.

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

  // 부분 성공 허용 — 일봉이 일시적으로 실패해도 월봉만으로 라이브 갱신을 유지.
  // (예전엔 Promise.all이라 한쪽만 흔들려도 멀쩡한 월봉 장기라인까지 통째로 버려졌음.)
  {
    const [mr, dr] = await Promise.allSettled([yahoo("max", "1mo"), yahoo("1y", "1d")]);
    const m = mr.status === "fulfilled" ? mr.value : [];
    const d = dr.status === "fulfilled" ? dr.value : [];
    if (m.length > 12) {
      out.monthly = m;
      out.daily = d;
      out.source = "yahoo";
    }
  }

  if (out.source === "none") {
    try {
      const [m, d] = await Promise.all([stooq("m"), stooq("d")]);
      if (m.length > 12) {
        out.monthly = m;
        out.daily = d;
        out.source = "stooq";
      }
    } catch (e) { /* fall through */ }
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
