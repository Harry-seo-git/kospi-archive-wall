// Dynamic Open Graph card for KOSPI Archive Wall.
// Served at /og.png via the rewrite in vercel.json. Latin-only text so the
// @vercel/og default font renders without fetching a Korean webfont.
import { ImageResponse } from "@vercel/og";

export const config = { runtime: "edge" };

const BG = "#08060a";
const INK = "#f0e9da";
const MUTED = "#ab9f86";
const HWANG = "#b98e44";
const JU = "#c0473a";
const CHEONG = "#3f8a86";

export default function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "76px 90px",
          background: `radial-gradient(900px 520px at 78% 26%, rgba(185,142,68,0.20), rgba(8,6,10,0) 60%), linear-gradient(135deg, #0b070d 0%, ${BG} 55%, #100a0c 100%)`,
          fontFamily: "sans-serif"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 30,
              fontWeight: 600,
              letterSpacing: 8,
              color: MUTED
            }}
          >
            EXHIBITION ARCHIVE · 1980 — NOW
          </div>
          <div
            style={{
              marginTop: 26,
              fontSize: 118,
              fontWeight: 800,
              letterSpacing: 1,
              color: INK,
              lineHeight: 1.04
            }}
          >
            KOSPI ARCHIVE WALL
          </div>
          <div
            style={{
              marginTop: 22,
              fontSize: 40,
              fontWeight: 700,
              color: "#e6dcc6"
            }}
          >
            Crash · Recover · Reprice · Rally — 45 years, live
          </div>
        </div>

        <svg width="1020" height="190" viewBox="0 0 1020 190">
          <path
            d="M10 165 L150 150 L235 158 L345 116 L450 132 L560 86 L670 100 L800 60 L910 74 L1010 22"
            fill="none"
            stroke={HWANG}
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="450" cy="132" r="7" fill={CHEONG} />
          <circle cx="560" cy="86" r="7" fill={CHEONG} />
          <circle cx="1010" cy="22" r="11" fill={JU} />
        </svg>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end"
          }}
        >
          <div style={{ fontSize: 32, fontWeight: 700, color: HWANG }}>
            kospi.hey-hu.com
          </div>
          <div style={{ fontSize: 26, fontWeight: 500, color: "#6f6557" }}>
            Live data · KO / EN
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        "cache-control":
          "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800"
      }
    }
  );
}
