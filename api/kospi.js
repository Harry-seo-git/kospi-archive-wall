// KOSPI 실데이터 프록시 — 야후 → Stooq 순으로 시도, 월봉 종가를 정규화해 반환.
// 정적 클라이언트의 CORS 제약을 우회하고, Vercel 엣지에서 하루 단위로 캐시한다.
// 모든 소스 실패 시 502 + 빈 monthly → 클라이언트가 번들 근사 데이터로 폴백.

async function fetchYahoo() {
  const url =
    "https://query1.finance.yahoo.com/v8/finance/chart/%5EKS11?range=max&interval=1mo";
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; KospiArchiveWall/1.0)" }
  });
  if (!res.ok) throw new Error(`yahoo ${res.status}`);
  const json = await res.json();
  const result = json && json.chart && json.chart.result && json.chart.result[0];
  const ts = (result && result.timestamp) || [];
  const closes =
    (result &&
      result.indicators &&
      result.indicators.quote &&
      result.indicators.quote[0] &&
      result.indicators.quote[0].close) ||
    [];
  const monthly = [];
  for (let i = 0; i < ts.length; i += 1) {
    const c = closes[i];
    if (c == null || !Number.isFinite(c)) continue;
    const d = new Date(ts[i] * 1000);
    monthly.push({
      date: d.toISOString().slice(0, 10),
      close: Math.round(c * 100) / 100
    });
  }
  return monthly;
}

async function fetchStooq() {
  const res = await fetch("https://stooq.com/q/d/l/?s=^kospi&i=m", {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; KospiArchiveWall/1.0)" }
  });
  if (!res.ok) throw new Error(`stooq ${res.status}`);
  const text = await res.text();
  const lines = text.trim().split(/\r?\n/);
  const monthly = [];
  for (let i = 1; i < lines.length; i += 1) {
    const cols = lines[i].split(",");
    const date = cols[0];
    const close = parseFloat(cols[4]);
    if (date && Number.isFinite(close)) {
      monthly.push({ date, close: Math.round(close * 100) / 100 });
    }
  }
  return monthly;
}

module.exports = async (req, res) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=604800"
  );

  const out = { asOf: null, source: "none", monthly: [], latest: null };
  const sources = [
    ["yahoo", fetchYahoo],
    ["stooq", fetchStooq]
  ];

  for (const [name, fn] of sources) {
    try {
      const monthly = await fn();
      if (monthly && monthly.length > 12) {
        out.monthly = monthly;
        out.source = name;
        break;
      }
    } catch (err) {
      // try next source
    }
  }

  if (out.monthly.length) {
    out.latest = out.monthly[out.monthly.length - 1];
    out.asOf = out.latest.date;
    res.status(200).json(out);
  } else {
    res.status(502).json(out);
  }
};
