# KOSPI Archive Wall

한국 증시 45년을 한 줄의 수묵선으로 읽는 인터랙티브 다크 갤러리 월.
1980년 기준지수 100부터 오늘의 실시간 종가까지.

**라이브:** https://kospi.hey-hu.com

## 주요 특징

- **실데이터** — 서버리스 프록시가 실제 코스피 종가(Yahoo `^KS11`,
  옵션으로 Stooq 폴백)를 가져오고, 캐시는 KRX 정산 시각(평일 15:45
  KST)에 맞춰 갱신됩니다.
- **데이터 정직성** — 지어낸 미래 수치가 없습니다. 큐레이션 이벤트는
  출처·날짜가 명시되고, 최근 구간은 전적으로 라이브 피드가 채우며,
  오프라인 번들은 실측 1980–2024년 연말 종가에서 끝납니다.
- **자동 이슈 생성** — 라운드 돌파(5,000 → 15,000)와 큰 ZigZag 변곡을
  하드코딩이 아니라 실제 시계열에서 자동 감지합니다.
- **한국적 시각 언어** — 낙관(도장) 마커, 절제된 오방색 팔레트,
  수묵/난류 붓선, 커서(데스크톱) 또는 자동 스윕+터치 드래그(모바일)로
  드러나는 태극기.
- **이중 언어** — 페이지 내 한/영 토글(브라우저 감지·저장),
  UI·서사·ARIA 전체 적용.
- **모바일 네이티브 인터랙션** — fit-to-width 차트의 터치 스크럽,
  센서 없는 히어로 핀조명, 스크롤 패럴럭스·진입 리빌, 탭 피드백,
  ≥44px 터치 타깃.
- **SEO / AEO** — Open Graph·트위터 카드, JSON-LD(`WebSite`,
  `WebApplication`, `Dataset`, `FAQPage`), `sitemap.xml`, `robots.txt`.

## 아키텍처

의존성 없는 정적 사이트 + Node 서버리스 함수 하나. 빌드 단계와
`package.json`이 없으며, Vercel이 저장소 루트를 그대로 서빙합니다.

```
index.html       마크업, head 메타, JSON-LD, market-pulse, 모달
styles.css        전체 스타일(오방색 토큰, 반응형, 모션)
script.js         렌더링, i18n, 차트/히어로, 라이브 병합, 이벤트
api/kospi.js      서버리스 코스피 프록시 (Yahoo → 옵션 Stooq)
og.svg / og.png   1200×630 소셜 공유 카드 (원본 + 래스터)
robots.txt        크롤 규칙 + 사이트맵 위치
sitemap.xml       단일 페이지 사이트맵(hreflang 포함)
vercel.json       cleanUrls + 보안 헤더
```

### 데이터 흐름

1. 페이지는 번들 폴백(실측 1980–2024 종가 + 출처 명시 큐레이션
   이벤트)으로 즉시 렌더링됩니다.
2. `script.js`가 `/api/kospi`를 호출합니다(KRX 세션 기준 캐시 버스트).
3. `api/kospi.js`가 Yahoo 월봉·일봉을 가져옵니다(`query1` →
   `query2`, 각 7초 타임아웃). Stooq는 `STOOQ_APIKEY`가 설정되고
   유효한 CSV를 반환할 때만 사용됩니다.
4. 라이브 시계열이 최근 구간을 대체하고, 그 구간의 큐레이션
   이벤트는 실제 라인에 스냅되며, 합성 이슈는 실제 종가에서
   파생됩니다.

## 환경 변수

| 이름           | 필수 | 용도                                                                 |
| -------------- | ---- | -------------------------------------------------------------------- |
| `STOOQ_APIKEY` | 아니오 | Stooq 폴백 활성화(키 발급: stooq.com `…&get_apikey`). 없어도 Yahoo만으로 실데이터가 제공됩니다. |

## 로컬 미리보기

```sh
python3 -m http.server 4174
```

이후 `http://127.0.0.1:4174` 접속. `/api/kospi` 라우트는 Vercel에서만
동작하므로, 로컬에서는 번들 폴백을 사용합니다(정상 동작).

## 배포

저장소를 Vercel에 연결합니다.

- Framework Preset: **Other**
- Build Command: **none**
- Output Directory: **`.`**

`main`이 Vercel 프로덕션에 연결됩니다. Vercel이 자동 생성하는
"Install Web Analytics" PR은 머지하지 마세요 — 이 정적 사이트는 이미
올바른 1st-party 태그를 포함하므로, 분석은 대시보드 토글(Project →
Analytics → Enable)만 하면 됩니다.

## 보안

- 저장소에 비밀값 없음. `STOOQ_APIKEY`는 환경에서만 읽고
  URL 인코딩합니다.
- `api/kospi.js`는 고정 업스트림 URL만 호출하고(사용자 입력 없음 →
  SSRF 불가) 비-CSV 응답을 거부합니다.
- `eval`/`document.write`/인라인 핸들러 없음. 외부 링크는
  `rel="noreferrer"` 사용.
- 응답 보안 헤더(`X-Content-Type-Options`, `X-Frame-Options`,
  `Referrer-Policy`, `Strict-Transport-Security`, `Permissions-Policy`,
  `Cross-Origin-Opener-Policy`)를 `vercel.json`에서 설정합니다.
- 엄격한 `Content-Security-Policy`는 아직 강제하지 않습니다. UI가
  CSSOM 기반 스타일링 + Google Fonts를 쓰므로, CSP는 브라우저에서
  검증 후 추가해야 합니다.

## 기여

[CONTRIBUTING.md](CONTRIBUTING.md) 참고. 모든 변경은 `main`으로의
풀 리퀘스트를 거치며, 머지 전 Vercel 프리뷰를 확인합니다.

## 크레딧

제작 [Harry](https://www.hey-hu.com). 지수 데이터: Yahoo Finance
(`^KS11`), Stooq (`^kospi`). 이벤트 맥락은 항목별로 출처를
본문에 명시했습니다.
