// KOSPI 실데이터 프록시 — 야후 → Stooq.
// 월봉(장기 곡선) + 일봉(정확한 최신 종가)을 함께 반환하고,
// 캐시 TTL을 "다음 KRX 정산(평일 15:45 KST)"에 맞춰 동적으로 설정한다.
// 장중 호출이면 intraday=true(잠정). 모든 소스 실패 시 502 → 클라이언트 번들 폴백.

const UA = { "User-Agent": "Mozilla/5.0 (compatible; KospiArchiveWall/1.0)" };
const CLOSE_MIN = 15 * 60 + 45; // 15:45 KST — 정산 + 버퍼
const OPEN_MIN = 9 * 60; // 09:00 KST

function ymd(d) {
  return d.toISOString().slice(0, 10);
}

async function yahoo(range, interval) {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/%5EKS11?range=${range}&interval=${interval}`;
  const res = await fetch(url, { headers: UA });
  if (!res.ok) throw new Error(`yahoo ${res.status}`);
  const json = await res.json();
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

async function stooq(interval) {
  const res = await fetch(`https://stooq.com/q/d/l/?s=^kospi&i=${interval}`, { headers: UA });
  if (!res.ok) throw new Error(`stooq ${res.status}`);
  const text = await res.text();
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

// 다음 KRX 정산(평일 15:45 KST)까지 남은 초.
function secondsToNextClose() {
  const nowMs = Date.now();
  const kstMs = nowMs + 9 * 3600 * 1000;
  const k = new Date(kstMs);
  for (let add = 0; add <= 6; add += 1) {
    const d = new Date(kstMs + add * 86400000);
    const day = d.getUTCDay();
    if (day === 0 || day === 6) continue; // 주말 제외
    const target = Date.UTC(
      d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(),
      Math.floor(CLOSE_MIN / 60), CLOSE_MIN % 60, 0
    );
    if (add === 0 && (k.getUTCHours() * 60 + k.getUTCMinutes()) >= CLOSE_MIN) continue;
    const targetUtcMs = target - 9 * 3600 * 1000;
    const sec = Math.floor((targetUtcMs - nowMs) / 1000);
    if (sec > 0) return Math.min(sec, 3 * 86400);
  }
  return 6 * 3600;
}

module.exports = async (req, res) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  const ttl = secondsToNextClose();
  res.setHeader("Cache-Control", `public, s-maxage=${ttl}, stale-while-revalidate=86400`);

  const out = { asOf: null, intraday: false, source: "none", monthly: [], daily: [] };

  try {
    const [m, d] = await Promise.all([yahoo("max", "1mo"), yahoo("1y", "1d")]);
    if (m.length > 12) {
      out.monthly = m;
      out.daily = d;
      out.source = "yahoo";
    }
  } catch (e) { /* fall through */ }

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

  const latest = out.daily.length ? out.daily[out.daily.length - 1] : out.monthly[out.monthly.length - 1];
  out.latest = latest;
  out.asOf = latest.date;

  const k = kstNow();
  const isWeekday = k.day >= 1 && k.day <= 5;
  out.intraday =
    isWeekday && k.minutes >= OPEN_MIN && k.minutes < CLOSE_MIN && latest.date === k.ymd;

  res.status(200).json(out);
};
