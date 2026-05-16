# KOSPI Archive Wall

An interactive dark-gallery wall that reads 45 years of the Korean stock
market (KOSPI) as a single ink-brush line — from the 1980 base of 100 to
today's live close.

**Live:** https://kospi.hey-hu.com

코스피 45년사를 핀조명 아래 수묵 한 줄로 읽는 인터랙티브 데이터 아카이브.

## Highlights

- **Live data** — a serverless proxy pulls real KOSPI closes (Yahoo
  `^KS11`, with an optional Stooq fallback) and the cache is aligned to
  the KRX settlement (15:45 KST on weekdays).
- **Data honesty** — no fabricated forward figures. Curated milestones
  are sourced and dated; the recent range is driven entirely by the live
  feed; the offline bundle ends at real 1980–2024 year-end closes.
- **Auto-generated issues** — round-level breaches (5,000 → 15,000) and
  large ZigZag swings are detected from the real series, not hardcoded.
- **Korean visual language** — seal (낙관) markers, a restrained
  obangsaek palette, an ink/turbulence brush line, a Taegeukgi revealed
  by a cursor (desktop) or auto-sweep + touch drag (mobile).
- **Bilingual** — in-page KO/EN toggle (browser-detected, persisted),
  covering UI, narratives, and ARIA.
- **Mobile-native interactions** — touch scrubbing on the fit-to-width
  chart, sensor-free hero light, tap feedback, ≥44px targets.
- **SEO / AEO** — Open Graph + Twitter card, JSON-LD (`WebSite`,
  `WebApplication`, `Dataset`, `FAQPage`), `sitemap.xml`, `robots.txt`.

## Architecture

A dependency-free static site plus one Node serverless function. There
is no build step and no `package.json` — Vercel serves the repository
root as-is.

```
index.html       Markup, head meta, JSON-LD, market-pulse, modal
styles.css        All styling (obangsaek tokens, responsive, motion)
script.js         Rendering, i18n, chart/hero, live-data merge, events
api/kospi.js      Serverless KOSPI proxy (Yahoo → optional Stooq)
og.svg / og.png   1200×630 social share card (source + raster)
robots.txt        Crawl rules + sitemap pointer
sitemap.xml       Single-page sitemap with hreflang
vercel.json       cleanUrls + security headers
```

### Data flow

1. The page renders immediately from the bundled fallback (real
   1980–2024 closes + curated, sourced milestones).
2. `script.js` calls `/api/kospi` (cache-busted per KRX session).
3. `api/kospi.js` fetches Yahoo monthly + daily (`query1` → `query2`,
   7s timeout each); Stooq is used only if `STOOQ_APIKEY` is set and
   returns valid CSV.
4. The live series replaces the recent range, curated events in that
   range snap to the real line, and synthetic issues are derived from
   the real closes.

## Environment variables

| Name           | Required | Purpose                                                        |
| -------------- | -------- | -------------------------------------------------------------- |
| `STOOQ_APIKEY` | No       | Enables the Stooq fallback (key: stooq.com `…&get_apikey`). Yahoo alone serves real data without it. |

## Local preview

```sh
python3 -m http.server 4174
```

Then open `http://127.0.0.1:4174`. The `/api/kospi` route only runs on
Vercel; locally the site uses its bundled fallback, which is expected.

## Deploy

Connect the repository to Vercel:

- Framework Preset: **Other**
- Build Command: **none**
- Output Directory: **`.`**

`main` is connected to Vercel production. Do not merge Vercel's
auto-generated "Install Web Analytics" PR — this static site already
includes the correct first-party tag, so analytics only needs the
dashboard toggle (Project → Analytics → Enable).

## Security

- No secrets in the repository; `STOOQ_APIKEY` is read from the
  environment only and URL-encoded.
- `api/kospi.js` fetches fixed upstream URLs (no user input → no SSRF)
  and rejects non-CSV responses.
- No `eval` / `document.write` / inline event handlers; external links
  use `rel="noreferrer"`.
- Response security headers (`X-Content-Type-Options`, `X-Frame-Options`,
  `Referrer-Policy`, `Strict-Transport-Security`, `Permissions-Policy`,
  `Cross-Origin-Opener-Policy`) are set in `vercel.json`.
- A strict `Content-Security-Policy` is intentionally not enforced yet:
  the UI is heavily styled via CSSOM and loads Google Fonts, so a CSP
  should be validated in a browser before being added.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). All changes go through pull
requests into `main`; review the Vercel preview before merge.

## Credits

Built by [Harry](https://www.hey-hu.com). Index data: Yahoo Finance
(`^KS11`) and Stooq (`^kospi`); event context cited inline per source.
