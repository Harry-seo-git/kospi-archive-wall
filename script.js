const events = [
  {
    id: "base",
    year: 1980.01,
    date: "1980.01.04",
    index: 100,
    phase: "growth",
    phaseLabel: "기준 100",
    signal: "모든 파형의 원점",
    title: "기준 지수 100",
    summary: "코스피는 1980년 1월 4일을 기준 100으로 삼아 장기 비교의 출발점을 만들었습니다.",
    detail: "오늘의 4,000선도 이 숫자에서 출발합니다. 긴 차트의 첫 점은 작은 숫자지만, 이후 45년 동안 시장이 반복한 공포와 회복을 모두 품고 있습니다."
  },
  {
    id: "launch",
    year: 1983,
    date: "1983.01",
    index: 121.21,
    phase: "growth",
    phaseLabel: "성장 기반",
    signal: "기준선이 생긴 날",
    title: "공식 출범",
    summary: "1980년 1월 4일을 기준 100으로 삼아 코스피가 한국 대표 지수로 공식화됩니다.",
    detail: "시장은 아직 작았지만, 이후 한국 제조업과 수출 기업의 성장성을 가격에 반영할 무대가 만들어졌습니다."
  },
  {
    id: "first-thousand",
    year: 1989.25,
    date: "1989.03.31",
    index: 1003.31,
    phase: "growth",
    phaseLabel: "첫 1000",
    signal: "첫 천장의 탄생",
    title: "3저 호황과 첫 1000선",
    summary: "저유가, 저금리, 달러 약세가 겹치며 코스피가 처음으로 1000선을 돌파합니다.",
    detail: "고도성장의 자신감이 주가에 응축된 시기입니다. 다만 이후 긴 조정이 이어지며 1000선은 오랜 저항선처럼 작동했습니다."
  },
  {
    id: "imf",
    year: 1998.5,
    date: "1998.06",
    index: 280,
    phase: "crisis",
    phaseLabel: "외환위기",
    signal: "공포가 숫자가 된 밤",
    title: "IMF 충격의 저점",
    summary: "외환위기 이후 신용 경색과 구조조정 공포가 시장을 깊은 저점으로 끌어내립니다.",
    detail: "1997년 말 구제금융 합의 이후에도 불확실성은 이어졌습니다. 1998년 중반의 이 저점은 한국 시장의 가장 강렬한 급락 기억 중 하나입니다."
  },
  {
    id: "dotcom",
    year: 1999.99,
    date: "1999.12",
    index: 1028.07,
    phase: "recovery",
    phaseLabel: "회복 랠리",
    signal: "다시 올라온 숨",
    title: "외환위기 이후 1000선 회복",
    summary: "구조조정과 정보통신 붐이 겹치며 시장은 다시 1000선 부근까지 회복합니다.",
    detail: "회복은 빨랐지만 취약했습니다. IT 버블 붕괴와 글로벌 경기 둔화가 다시 변동성을 키웠습니다."
  },
  {
    id: "two-thousand",
    year: 2007.56,
    date: "2007.07.25",
    index: 2004.22,
    phase: "growth",
    phaseLabel: "레벨업",
    signal: "새 레벨의 문턱",
    title: "처음 열린 2000 시대",
    summary: "중국 성장, 조선·철강·화학 등 경기민감주의 강세와 함께 2000선을 돌파합니다.",
    detail: "한국 기업의 글로벌 경쟁력이 재평가된 구간입니다. 그러나 곧이어 글로벌 금융위기가 시장의 낙관을 시험했습니다."
  },
  {
    id: "gfc",
    year: 2008.83,
    date: "2008.10",
    index: 938,
    phase: "crisis",
    phaseLabel: "금융위기",
    signal: "세계가 같이 흔들린 날",
    title: "글로벌 금융위기",
    summary: "리먼 사태 이후 위험자산 회피가 전 세계로 번지며 코스피도 1000선 아래로 밀립니다.",
    detail: "외부 충격에 취약한 개방경제의 단면이 드러났지만, 동시에 이후 유동성 공급과 수출 회복의 반등 에너지도 축적됐습니다."
  },
  {
    id: "post-gfc",
    year: 2010.99,
    date: "2010.12",
    index: 2051,
    phase: "recovery",
    phaseLabel: "위기 후 회복",
    signal: "다시 2000 위로",
    title: "금융위기 이후 회복",
    summary: "글로벌 유동성과 수출 회복이 맞물리며 코스피는 다시 2000선 위로 올라섭니다.",
    detail: "2008년 급락 이후의 회복은 한국 시장이 외부 충격에 흔들리면서도 빠르게 재가격화되는 구조를 보여준 장면입니다."
  },
  {
    id: "first-2500",
    year: 2017.83,
    date: "2017.10.30",
    index: 2501.93,
    phase: "growth",
    phaseLabel: "첫 2500",
    signal: "박스피의 균열",
    title: "처음 넘은 2500선",
    summary: "반도체 이익 사이클과 글로벌 경기 회복 속에서 코스피는 처음 2500선을 넘어섭니다.",
    detail: "오랫동안 박스권이라는 별명을 얻었던 시장이 새 레벨을 시험한 시기입니다. 이후의 조정까지 포함해 이 구간은 기대와 한계가 함께 드러난 장면입니다."
  },
  {
    id: "boxpi",
    year: 2018,
    date: "2018.01",
    index: 2607,
    phase: "recovery",
    phaseLabel: "박스권 돌파 시도",
    signal: "천장을 두드린 시장",
    title: "박스피의 천장 확인",
    summary: "반도체 호황을 타고 사상 최고권에 접근했지만, 무역분쟁과 실적 둔화 우려가 상승을 제한합니다.",
    detail: "오랜 기간 2000선 안팎에서 머물던 시장은 높은 이익에도 밸류에이션 확장이 쉽지 않다는 숙제를 안고 있었습니다."
  },
  {
    id: "covid",
    year: 2020.21,
    date: "2020.03",
    index: 1457,
    phase: "crisis",
    phaseLabel: "팬데믹 급락",
    signal: "짧고 깊은 단절",
    title: "코로나19 쇼크",
    summary: "팬데믹 공포가 글로벌 증시를 동시에 흔들며 코스피도 급격히 하락합니다.",
    detail: "짧고 강한 충격이었습니다. 이후 개인투자자 유입, 초저금리, 디지털 수요가 빠른 회복을 이끌었습니다."
  },
  {
    id: "three-thousand",
    year: 2021,
    date: "2021.01.07",
    index: 3031.68,
    phase: "growth",
    phaseLabel: "3000 시대",
    signal: "개인이 만든 파도",
    title: "처음 밟은 3000선",
    summary: "2007년 2000선 이후 13년 반 만에 코스피가 3000선을 넘어서며 새 장을 엽니다.",
    detail: "반도체, 배터리, 플랫폼 기업의 기대와 개인투자자의 대규모 참여가 겹쳤습니다. 시장의 주인공도 함께 달라졌습니다."
  },
  {
    id: "peak",
    year: 2021.48,
    date: "2021.06",
    index: 3316,
    phase: "growth",
    phaseLabel: "팬데믹기 고점",
    signal: "가장 높은 숨",
    title: "2021년 고점",
    summary: "코스피는 2021년 6월 장중 3316선까지 오르며 팬데믹 이후 랠리의 정점을 기록합니다.",
    detail: "이후 금리 상승과 성장주 재평가가 시작되며 시장은 다시 조정 국면으로 들어갔습니다. 2025년 랠리 전까지 이 고점은 긴 기억으로 남았습니다."
  },
  {
    id: "rate-shock",
    year: 2022.75,
    date: "2022.10",
    index: 2155,
    phase: "crisis",
    phaseLabel: "금리 충격",
    signal: "유동성이 빠진 자리",
    title: "2022년 약세장 저점",
    summary: "금리 급등과 성장주 재평가 속에서 코스피는 2022년 가을 2200선 아래까지 밀렸습니다.",
    detail: "팬데믹 이후의 유동성 랠리가 끝나자 시장은 다시 이익과 금리의 언어로 돌아왔습니다. 상승장의 낙관이 한 해 만에 방어적 가격으로 바뀐 구간입니다."
  },
  {
    id: "rate-cut-hope",
    year: 2023.99,
    date: "2023.12",
    index: 2655.28,
    phase: "recovery",
    phaseLabel: "금리 기대",
    signal: "기대가 먼저 오른 해",
    title: "2023년 회복",
    summary: "금리 인하 기대와 대형주 반등으로 코스피는 2023년 말 2655.28로 회복했습니다.",
    detail: "강한 회복이었지만 아직 전고점 돌파는 아니었습니다. 시장은 경기보다 금리와 수급을 먼저 가격에 넣기 시작했습니다."
  },
  {
    id: "policy-drag",
    year: 2024.93,
    date: "2024.12",
    index: 2399.49,
    phase: "crisis",
    phaseLabel: "정치 충격",
    signal: "한 해를 닫은 충격",
    title: "2024년 정치 리스크 급락",
    summary: "2024년 말 정치 불확실성이 커지며 코스피는 2399.49로 한 해를 마쳤습니다.",
    detail: "비상계엄 선포와 탄핵 정국 등 정치 리스크가 위험회피를 키웠습니다. 이 낮은 출발선이 2025년 강한 반등의 토대가 됐습니다."
  },
  {
    id: "rebound-2025",
    year: 2025.45,
    date: "2025.06",
    index: 3129,
    phase: "recovery",
    phaseLabel: "밸류업 반등",
    signal: "낮은 곳에서 다시",
    title: "2025년 밸류업·AI 반등",
    summary: "2025년 들어 코스피는 빠르게 반등하며 다시 3000선을 회복했습니다.",
    detail: "기업 밸류업 프로그램과 반도체·AI 기대가 맞물리며 시장은 2024년 말의 공포를 빠르게 되돌렸습니다."
  },
  {
    id: "four-thousand",
    year: 2025.82,
    date: "2025.10.27",
    index: 4042.83,
    phase: "growth",
    phaseLabel: "첫 4000",
    signal: "숫자의 체급이 바뀐다",
    title: "처음 열린 4000선",
    summary: "2025년 10월 코스피는 처음으로 4000선을 넘어 장기 박스권의 기억을 밀어냈습니다.",
    detail: "새로운 고점은 단순한 회복이 아니라 시장의 체급 변화처럼 읽혔습니다. 3000선 이후 긴 조정이 끝났다는 기대가 강해진 구간입니다."
  },
  {
    id: "year-end-2025",
    year: 2025.99,
    date: "2025.12.30",
    index: 4214.17,
    phase: "growth",
    phaseLabel: "2025 종가",
    signal: "랠리가 연말을 닫다",
    title: "2025년 4214.17 마감",
    summary: "2025년 마지막 거래일 코스피는 4214.17로 마감하며 전년 대비 큰 폭 상승을 기록했습니다.",
    detail: "2024년 말 2,399.49에서 2025년 말 4,214.17까지의 이동은 차트의 기울기를 완전히 바꿔놓았습니다. 이 사이트의 데이터 기준점입니다."
  }
];

// 영문 서사 (id 매핑). 없으면 한국어로 폴백.
const eventsEn = {
  base: { phaseLabel: "Base 100", signal: "Origin of every wave", title: "Base index 100", summary: "On 4 Jan 1980 KOSPI was set to a base of 100 — the starting point for all long-term comparison.", detail: "Today's 4,000 line begins from this number. The first dot is tiny, yet it already holds 45 years of the market's repeated fear and recovery." },
  launch: { phaseLabel: "Growth base", signal: "The day a baseline was born", title: "Official launch", summary: "Anchored to 100 on 4 Jan 1980, KOSPI became Korea's benchmark index.", detail: "The market was still small, but a stage was set to price in the growth of Korean manufacturing and exporters." },
  "first-thousand": { phaseLabel: "First 1000", signal: "Birth of the first ceiling", title: "Three-low boom, first 1000", summary: "Low oil, low rates and a weak dollar lifted KOSPI past 1,000 for the first time.", detail: "High-growth confidence condensed into prices. A long correction followed, and 1,000 acted as resistance for years." },
  imf: { phaseLabel: "FX crisis", signal: "The night fear became a number", title: "The IMF-shock low", summary: "Credit crunch and restructuring fear after the currency crisis dragged the market to a deep low.", detail: "Uncertainty lingered even after the late-1997 bailout. This mid-1998 low is one of Korea's most intense crash memories." },
  dotcom: { phaseLabel: "Recovery rally", signal: "Breath drawn again", title: "Back to 1000 after the crisis", summary: "Restructuring and the IT boom pulled the market back near 1,000.", detail: "The rebound was fast but fragile; the dot-com bust and a global slowdown soon revived volatility." },
  "two-thousand": { phaseLabel: "Level up", signal: "Threshold of a new level", title: "The 2000 era opens", summary: "China growth and strong cyclicals — shipbuilding, steel, chemicals — pushed KOSPI past 2,000.", detail: "Korean firms' global competitiveness was repriced, just before the global financial crisis tested the optimism." },
  gfc: { phaseLabel: "Financial crisis", signal: "The day the world shook together", title: "Global financial crisis", summary: "After Lehman, risk-off spread worldwide and KOSPI fell back below 1,000.", detail: "An open economy's fragility showed — yet the energy for a liquidity-driven recovery and an export rebound was also building." },
  "post-gfc": { phaseLabel: "Post-crisis recovery", signal: "Above 2000 again", title: "Recovery after the crisis", summary: "Global liquidity and an export rebound carried KOSPI back above 2,000.", detail: "The recovery showed how quickly Korea reprices after external shocks, even while shaken by them." },
  "first-2500": { phaseLabel: "First 2500", signal: "A crack in the box", title: "First break above 2500", summary: "A chip-earnings cycle and global recovery lifted KOSPI past 2,500 for the first time.", detail: "The long-'boxed' market tested a new level; with the correction that followed, the era showed both hope and limits." },
  boxpi: { phaseLabel: "Box-breakout attempt", signal: "Knocking on the ceiling", title: "Testing the box ceiling", summary: "A semiconductor boom approached record highs, but trade conflict and earnings worries capped the advance.", detail: "After years near 2,000, the market faced the puzzle that high profits alone didn't expand its valuation." },
  covid: { phaseLabel: "Pandemic crash", signal: "A short, deep rupture", title: "COVID-19 shock", summary: "Pandemic fear shook global markets at once and KOSPI fell sharply.", detail: "A short, violent shock — then retail inflows, ultra-low rates and digital demand drove a fast recovery." },
  "three-thousand": { phaseLabel: "The 3000 era", signal: "A wave the retail made", title: "First step on 3000", summary: "Thirteen and a half years after 2,000, KOSPI crossed 3,000 and opened a new chapter.", detail: "Hopes for chips, batteries and platforms met a wave of retail participation; the market's protagonists changed too." },
  peak: { phaseLabel: "Pandemic-era peak", signal: "The highest breath", title: "2021 peak", summary: "KOSPI reached an intraday 3,316 in June 2021, the apex of the post-pandemic rally.", detail: "Rate hikes and a growth-stock repricing began; until the 2025 rally this peak stood as a long memory." },
  "rate-shock": { phaseLabel: "Rate shock", signal: "Where liquidity drained", title: "2022 bear-market low", summary: "Surging rates and a growth repricing pushed KOSPI below 2,200 in autumn 2022.", detail: "When the post-pandemic liquidity rally ended, the market returned to the language of earnings and rates — optimism turned defensive in a year." },
  "rate-cut-hope": { phaseLabel: "Rate-cut hope", signal: "The year hope rose first", title: "2023 recovery", summary: "Rate-cut hopes and a large-cap rebound lifted KOSPI to 2,655.28 by end-2023.", detail: "A strong recovery, but not yet a new high; the market began pricing rates and flows ahead of the economy." },
  "policy-drag": { phaseLabel: "Political shock", signal: "A shock that closed the year", title: "2024 political-risk plunge", summary: "Rising political uncertainty late in 2024 ended the year at 2,399.49.", detail: "A martial-law declaration and impeachment turmoil amplified risk aversion. This low base set up the strong 2025 rebound." },
  "rebound-2025": { phaseLabel: "Value-up rebound", signal: "From the low, again", title: "2025 value-up & AI rebound", summary: "KOSPI rebounded fast through 2025, reclaiming 3,000.", detail: "A corporate value-up program and chip/AI hopes quickly reversed the fear of late 2024." },
  "four-thousand": { phaseLabel: "First 4000", signal: "The weight class changes", title: "First break above 4000", summary: "In October 2025 KOSPI crossed 4,000 for the first time, pushing aside the long box-range memory.", detail: "The new high read less like a recovery than a change in the market's weight class; the long post-3,000 correction felt over." },
  "year-end-2025": { phaseLabel: "2025 close", signal: "A rally closes the year", title: "2025 close at 4,214.17", summary: "On the last trading day of 2025 KOSPI closed at 4,214.17, a large year-on-year gain.", detail: "The move from 2,399.49 at end-2024 to 4,214.17 reshaped the chart's slope entirely. This is the site's data reference point." }
};

const I18N = {
  ko: {
    "ui.lang": "EN",
    "ui.langAria": "View in English",
    "stat.base": "기준점",
    "stat.ath": "사상 최고권",
    "stat.norecover": "기록상 미회복",
    "stat.dash": "—",
    "stat.years": "년",
    "tour.play": "가이드 투어",
    "tour.stop": "투어 정지",
    "mode.data": "데이터 모드",
    "mode.dataAria": "데이터 모드 — 잉크를 걷어 수치를 또렷하게",
    "mode.crisis": "위기 구간 · 급락 신호 강조",
    "mode.recovery": "회복 구간 · 반등 신호 강조",
    "mode.growth": "성장 구간 · 랠리 신호 강조",
    "mode.all": "벽면을 따라 움직이면 가장 가까운 사건이 조명 아래 나타납니다",
    "prov.bundled": "번들 근사 데이터",
    "prov.live": "실데이터",
    "prov.label": "Provenance",
    "prov.asof": "as of",
    "pulse.latestLabel": "Object 04 · Latest",
    "pulse.latestNote": "종가",
    "hero.readoutTitle": "코스피",
    "hero.readoutHint": "핀조명을 곡선 위로 옮겨 보세요",
    "chart.title": "코스피 1980년부터 {asOf}까지 장기 라인 차트",
    "chart.desc": "1980년 기준 100에서 {asOf} 기준까지 연·월별 종가와 주요 위기·회복 지점을 연결한 차트",
    "filter.all": "전체",
    "filter.crisis": "위기",
    "filter.recovery": "회복",
    "filter.growth": "성장",
    "label.index": "지수",
    "label.phase": "국면",
    "label.changeVsPrev": "직전 대비",
    "label.drawdown": "전고점 대비",
    "label.cagr": "구간 CAGR",
    "label.recovery": "회복 소요",
    "era.return": "구간 수익률",
    "era.drawdown": "최대 낙폭",
    "era.span": "구간",
    "panel.h2": "핀조명 아래 드러나는 코스피의 결정적 장면",
    "hint.text": "좌우로 끌어 보세요 · ← → 키 이동 · 아래 미니맵으로 점프 · 데이터 모드로 명료하게",
    "sources.rest": "수치는 실제 코스피 흐름을 따른 근사·실측 혼합값입니다. 라이브 연결 시 외부 소스에서 자동 갱신되며, 위기 구간(1997–98, 2008, 2020, 2022)은 월 단위로 보강했습니다. 참고:",
    "aria.modalClose": "상세 닫기",
    "aria.chartScroll": "1980년부터 최신까지 코스피 장기 차트 가로 스크롤 영역",
    "live.latestLabel": "현재 기준",
    "live.latestSignal": "오늘의 벽",
    "live.latestTitle": "{asOf} 코스피 {idx}",
    "live.latestSummary": "{asOf} 기준 최신 종가입니다. 방문할 때마다 외부 소스에서 자동 갱신됩니다.",
    "live.latestDetail": "이 지점은 큐레이션된 과거 서사가 아니라, 외부 데이터에서 받아온 가장 최근 값입니다. 데이터 소스가 갱신되면 자동으로 따라 움직입니다.",
    "live.swingPeakLabel": "자동 검출 고점",
    "live.swingTroughLabel": "자동 검출 저점",
    "live.swingSignal": "데이터가 표시한 변곡",
    "live.swingTitle": "{idx} 변곡",
    "live.swingSummaryUp": "외부 데이터에서 자동 검출한 고점형 변곡점입니다.",
    "live.swingSummaryDown": "외부 데이터에서 자동 검출한 저점형 변곡점입니다.",
    "live.swingDetail": "큐레이션된 서사 없이, 불러온 시계열에서 임계 등락폭 이상으로 반전한 지점을 표시합니다."
  },
  en: {
    "ui.lang": "한국어",
    "ui.langAria": "한국어로 보기",
    "stat.base": "Base",
    "stat.ath": "All-time high",
    "stat.norecover": "Not recovered on record",
    "stat.dash": "—",
    "stat.years": "y",
    "tour.play": "Guided tour",
    "tour.stop": "Stop tour",
    "mode.data": "Data mode",
    "mode.dataAria": "Data mode — strip the ink for sharp figures",
    "mode.crisis": "Crisis · crash signals emphasized",
    "mode.recovery": "Recovery · rebound signals emphasized",
    "mode.growth": "Growth · rally signals emphasized",
    "mode.all": "Move along the wall; the nearest event rises under the light",
    "prov.bundled": "bundled approximation",
    "prov.live": "live data",
    "prov.label": "Provenance",
    "prov.asof": "as of",
    "pulse.latestLabel": "Object 04 · Latest",
    "pulse.latestNote": "close",
    "hero.readoutTitle": "KOSPI",
    "hero.readoutHint": "Move the pin light over the curve",
    "chart.title": "KOSPI long-term line chart, 1980 to {asOf}",
    "chart.desc": "From base 100 in 1980 to the {asOf} reference, linking annual/monthly closes and major crisis and recovery points",
    "filter.all": "All",
    "filter.crisis": "Crisis",
    "filter.recovery": "Recovery",
    "filter.growth": "Growth",
    "label.index": "Index",
    "label.phase": "Phase",
    "label.changeVsPrev": "vs prev",
    "label.drawdown": "vs peak",
    "label.cagr": "Period CAGR",
    "label.recovery": "Recovery time",
    "era.return": "Period return",
    "era.drawdown": "Max drawdown",
    "era.span": "Span",
    "panel.h2": "KOSPI's decisive scenes, revealed under a pin light",
    "hint.text": "Drag left/right · ← → keys · jump via the minimap below · Data mode for clarity",
    "sources.rest": "Figures are an approximation/observed blend that follows the real KOSPI path. When live, they auto-refresh from an external source; crisis windows (1997–98, 2008, 2020, 2022) are filled monthly. Refs:",
    "aria.modalClose": "Close detail",
    "aria.chartScroll": "KOSPI long-term chart, horizontal scroll area, 1980 to latest",
    "live.latestLabel": "Current",
    "live.latestSignal": "Today's wall",
    "live.latestTitle": "KOSPI {idx} on {asOf}",
    "live.latestSummary": "Latest close as of {asOf}. It auto-refreshes from an external source on each visit.",
    "live.latestDetail": "This point is not a curated past narrative but the most recent value pulled from external data; it follows the source as it updates.",
    "live.swingPeakLabel": "Auto-detected peak",
    "live.swingTroughLabel": "Auto-detected trough",
    "live.swingSignal": "An inflection the data marked",
    "live.swingTitle": "Inflection at {idx}",
    "live.swingSummaryUp": "A peak-type inflection auto-detected from external data.",
    "live.swingSummaryDown": "A trough-type inflection auto-detected from external data.",
    "live.swingDetail": "With no curated narrative, it marks where the fetched series reversed beyond a threshold move."
  }
};

let lang = "ko";

function t(key, vars) {
  let s = (I18N[lang] && I18N[lang][key]) || (I18N.ko[key]) || key;
  if (vars) Object.keys(vars).forEach((k) => { s = s.replace(`{${k}}`, vars[k]); });
  return s;
}

function tEv(ev, field) {
  if (!ev) return "";
  if (lang === "en") {
    if (ev._en && ev._en[field] != null) return ev._en[field];
    const o = eventsEn[ev.id];
    if (o && o[field] != null) return o[field];
  }
  return ev[field];
}

// 정적 산문 영문 (Korean stays in HTML as default; key via data-i18n-prose).
const STATIC_EN = {
  "hero.subline": "A pin-light study of crash, recovery, reprice, and rally.",
  lead: "We hang 45 years of KOSPI on the wall like one long ink scroll. Every quote stays sunk in the dark; only where your gaze rests does a pin light fall, and that day's events and numbers rise like a seal. Data becomes record, and record becomes landscape.",
  "crash.h2": "When it breaks, the market makes a memory.",
  "crash.p": "The currency crisis and the global financial crisis didn't merely lower KOSPI's price — they reshaped how the Korean market senses risk.",
  "recover.h2": "Recovery always starts slowly, then suddenly accelerates.",
  "recover.p": "Restructuring, liquidity, an export rebound, retail inflows — the reasons differed each time, but the rhythm rhymed. Once fear was fully priced in, the market looked for its next narrative.",
  "reprice.h2": "When a new industry arrives, the index speaks a new language.",
  "reprice.p": "Shipbuilding and steel, chips and batteries, platforms and AI hopes, and the 2025 value-up & AI rally — KOSPI's highs were never just numbers but a collective bet on which future Korean firms represent.",
  "hero.figcaption": "Dark gallery wall · price memory under a moving light.",
  "hero.figcaptionEm": "Tap/click to jump to that era.",
  "brand.sub": "KOSPI Records",
  "kicker.crash": "Gallery 01 · Crash",
  "kicker.recover": "Gallery 02 · Recover",
  "kicker.reprice": "Gallery 03 · Reprice",
  "kicker.main": "Main Gallery · Interactive Wall",
  "kicker.signal": "Wall Label · Current Signal"
};

const origText = new WeakMap();

function applyStaticI18n() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-prose]").forEach((el) => {
    const key = el.getAttribute("data-i18n-prose");
    if (!origText.has(el)) origText.set(el, el.textContent);
    el.textContent = lang === "en" ? (STATIC_EN[key] || origText.get(el)) : origText.get(el);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
  });
}

function refreshDynamicI18n() {
  setSelected(selectedId, false);
  if (dataNote) dataNote.textContent = t(`mode.${currentFilter}`) || t("mode.all");
  updateProvenance();
  updateLatestUI();
  renderHero();
  renderEraPanels();
  const ct = document.querySelector("#chart-title");
  const cd = document.querySelector("#chart-desc");
  if (ct) ct.textContent = t("chart.title", { asOf: dataMeta.asOf });
  if (cd) cd.textContent = `${t("chart.desc", { asOf: dataMeta.asOf })} (${dataMeta.source})`;
  if (momentModal && !momentModal.hidden) {
    updateModal(getEventById(lastModalId) || getSelectedEvent());
  }
}

function detectLang() {
  try {
    const saved = window.localStorage.getItem("kaw-lang");
    if (saved === "ko" || saved === "en") return saved;
  } catch (e) { /* ignore */ }
  return /^en/i.test(navigator.language || "") ? "en" : "ko";
}

function applyLang(next) {
  lang = next === "en" ? "en" : "ko";
  try { window.localStorage.setItem("kaw-lang", lang); } catch (e) { /* ignore */ }
  document.documentElement.lang = lang;
  const btn = document.querySelector("#lang-toggle");
  if (btn) {
    btn.textContent = t("ui.lang");
    btn.setAttribute("aria-label", t("ui.langAria"));
  }
  applyStaticI18n();
  refreshDynamicI18n();
}

// 연도별 종가(근사값). 사건 사이를 메워 실제 코스피 곡선 모양에 가깝게 그립니다.
const yearlyCloses = {
  1980: 106.87, 1981: 131.3, 1982: 127.31, 1983: 121.21, 1984: 142.46,
  1985: 163.37, 1986: 272.61, 1987: 525.11, 1988: 907.2, 1989: 909.72,
  1990: 696.11, 1991: 610.92, 1992: 678.44, 1993: 866.18, 1994: 1027.37,
  1995: 882.94, 1996: 651.22, 1997: 376.31, 1998: 562.46, 1999: 1028.07,
  2000: 504.62, 2001: 693.7, 2002: 627.55, 2003: 810.71, 2004: 895.9,
  2005: 1379.37, 2006: 1434.46, 2007: 1897.13, 2008: 1124.47, 2009: 1682.77,
  2010: 2051, 2011: 1825.74, 2012: 1997.05, 2013: 2011.34, 2014: 1915.59,
  2015: 1961.31, 2016: 2026.46, 2017: 2467.49, 2018: 2041.04, 2019: 2197.67,
  2020: 2873.47, 2021: 2977.65, 2022: 2236.4, 2023: 2655.28, 2024: 2399.49,
  2025: 4214.17
};

// 위기 구간 월 단위 근사값 — 급락/회복 곡선의 결을 살립니다.
const crisisMonthly = [
  { year: 1997.5, index: 745 }, { year: 1997.83, index: 530 }, { year: 1997.99, index: 376 },
  { year: 1998.2, index: 540 }, { year: 1998.46, index: 320 }, { year: 1998.62, index: 330 },
  { year: 1998.8, index: 420 }, { year: 1999.5, index: 880 },
  { year: 2008.3, index: 1700 }, { year: 2008.5, index: 1670 }, { year: 2008.78, index: 1450 },
  { year: 2008.8, index: 1100 }, { year: 2008.92, index: 1050 }, { year: 2008.99, index: 1124 },
  { year: 2009.5, index: 1390 },
  { year: 2020.05, index: 2120 }, { year: 2020.13, index: 1980 }, { year: 2020.33, index: 1860 },
  { year: 2020.5, index: 2110 }, { year: 2020.75, index: 2330 }, { year: 2020.99, index: 2873 },
  { year: 2022.3, index: 2700 }, { year: 2022.5, index: 2350 }, { year: 2022.62, index: 2290 },
  { year: 2022.83, index: 2220 }, { year: 2022.99, index: 2236 }
];

const chart = document.querySelector("#kospi-chart");
const chartScroll = document.querySelector("#chart-scroll");
const minimap = document.querySelector("#kospi-minimap");
const tooltip = document.querySelector("#chart-tooltip");
const signalConsole = document.querySelector(".signal-console");
const detailSignal = document.querySelector("#detail-signal");
const detailTitle = document.querySelector("#detail-title");
const detailDate = document.querySelector("#detail-date");
const detailCopy = document.querySelector("#detail-copy");
const detailIndex = document.querySelector("#detail-index");
const detailPhase = document.querySelector("#detail-phase");
const detailChange = document.querySelector("#detail-change");
const detailDrawdown = document.querySelector("#detail-drawdown");
const chartMomentCard = document.querySelector("#chart-moment-card");
const chartMomentDate = document.querySelector("#chart-moment-date");
const chartMomentTitle = document.querySelector("#chart-moment-title");
const chartMomentIndex = document.querySelector("#chart-moment-index");
const chartMomentSummary = document.querySelector("#chart-moment-summary");
const momentModal = document.querySelector("#moment-modal");
const modalScrim = document.querySelector("#modal-scrim");
const modalClose = document.querySelector("#modal-close");
const modalDate = document.querySelector("#modal-date");
const modalSignal = document.querySelector("#modal-signal");
const modalTitle = document.querySelector("#modal-title");
const modalCopy = document.querySelector("#modal-copy");
const modalIndex = document.querySelector("#modal-index");
const modalPhase = document.querySelector("#modal-phase");
const modalChange = document.querySelector("#modal-change");
const modalDrawdown = document.querySelector("#modal-drawdown");
const modalCagr = document.querySelector("#modal-cagr");
const modalRecovery = document.querySelector("#modal-recovery");
const filterButtons = document.querySelectorAll(".nav-chip");
const tourButton = document.querySelector("#tour-btn");
const tourLabel = tourButton?.querySelector(".tour-label");
const progressBar = document.querySelector("#reading-progress");
const loader = document.querySelector("#loader");
const loaderCount = document.querySelector("#loader-count");
const chapterIndicator = document.querySelector("#chapter-indicator");
const dataNote = document.querySelector(".data-note");
const phaseWash = document.querySelector("#phase-wash");
const heroSvg = document.querySelector("#hero-chart");
const heroVisual = document.querySelector("#hero-visual");
const heroReadout = document.querySelector("#hero-readout");
const chartYaxis = document.querySelector("#chart-yaxis");
const dataModeBtn = document.querySelector("#data-mode-btn");

let chartGeo = null;
let heroSweep = 0;
let heroPointerAt = 0;

let selectedId = "base";
let lastModalId = "base";
let currentFilter = "all";
let lastPhase = "";
let pointPositions = new Map();
const chartSize = { width: 3600, height: 860 };
const chartYears = { min: 1980, max: 2026.0 };
let isChartDragging = false;
let chartDragStartX = 0;
let chartDragStartLeft = 0;
let suppressChartSyncUntil = 0;
let lastChartScrollLeft = -1;
let lastScrollChangeAt = 0;
let pendingSnap = false;
let isTouring = false;
let tourTimer = 0;
let tourIndex = 0;
let isMinimapDragging = false;
let washTimer = 0;
let scrollVelTimer = 0;
let lastScrollY = window.scrollY;
let lastScrollT = performance.now();
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const coarsePointer = window.matchMedia("(pointer: coarse)").matches;

const modeTargets = {
  all: "base",
  crisis: "covid",
  recovery: "rebound-2025",
  growth: "year-end-2025"
};


// 라이브 데이터(외부 소스). 미연결/실패 시 null → 번들 근사 데이터로 폴백.
let liveLine = null;
let liveStartYear = Infinity;
const dataMeta = { asOf: "2025.12.30", source: "bundled" };

function decimalYearFromDate(dateStr) {
  const [y, m, d] = String(dateStr).split("-").map(Number);
  if (!y) return null;
  return y + (((m || 1) - 1) + (((d || 1) - 1) / 30)) / 12;
}

function formatIndex(value) {
  return Math.round(value).toLocaleString("ko-KR");
}

function formatSignedPct(value) {
  if (value === null || !Number.isFinite(value)) return "—";
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(1)}%`;
}

// 숫자가 폭발적으로 카운트업되는 연출.
function animateCount(node, to, { duration = 760, decimals = 0 } = {}) {
  if (!node) return;
  const fmt = (v) => v.toLocaleString("ko-KR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
  if (prefersReducedMotion) {
    node.textContent = fmt(to);
    return;
  }
  let from = parseFloat(String(node.textContent || "0").replace(/[^0-9.-]/g, ""));
  if (!Number.isFinite(from)) from = 0;
  if (from === to) {
    node.textContent = fmt(to);
    return;
  }
  node.classList.add("is-counting");
  const start = performance.now();
  const tick = (now) => {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    const value = from + (to - from) * eased;
    node.textContent = fmt(decimals ? Number(value.toFixed(decimals)) : Math.round(value));
    if (t < 1) {
      requestAnimationFrame(tick);
    } else {
      node.textContent = fmt(to);
      node.classList.remove("is-counting");
    }
  };
  requestAnimationFrame(tick);
}

function flashPhaseWash(phase) {
  if (!phaseWash || prefersReducedMotion) return;
  phaseWash.dataset.phase = phase;
  phaseWash.classList.remove("is-on");
  void phaseWash.offsetWidth;
  phaseWash.classList.add("is-on");
  window.clearTimeout(washTimer);
  washTimer = window.setTimeout(() => phaseWash.classList.remove("is-on"), 920);
}

function pulseSelectedPoint(point, phase) {
  const pulse = chart.querySelector(".chart-pulse");
  if (!pulse || !point) return;
  pulse.setAttribute("x", point.x - 9);
  pulse.setAttribute("y", point.y - 9);
  pulse.style.color = phase === "crisis" ? "var(--red)" : phase === "recovery" ? "var(--green)" : "var(--blue)";
  if (prefersReducedMotion) return;
  pulse.classList.remove("is-on");
  requestAnimationFrame(() => requestAnimationFrame(() => pulse.classList.add("is-on")));
}

function getSelectedEvent() {
  return events.find((event) => event.id === selectedId) || events[0];
}

// 사건별 정량 지표: 직전 대비 등락, 전고점 대비 낙폭, 구간 CAGR, 회복 소요.
function getEventMetrics(event) {
  const idx = events.findIndex((item) => item.id === event.id);
  const prev = idx > 0 ? events[idx - 1] : null;
  const change = prev ? ((event.index - prev.index) / prev.index) * 100 : null;

  let peak = events[0].index;
  for (let i = 0; i <= idx; i += 1) peak = Math.max(peak, events[i].index);
  const drawdown = ((event.index - peak) / peak) * 100;

  let cagr = null;
  if (prev) {
    const span = Math.max(0.25, event.year - prev.year);
    cagr = (Math.pow(event.index / prev.index, 1 / span) - 1) * 100;
  }

  let recovery = null;
  if (event.phase === "crisis") {
    const priorPeak = idx > 0 ? Math.max(...events.slice(0, idx).map((e) => e.index)) : event.index;
    const back = events.slice(idx + 1).find((e) => e.index >= priorPeak);
    if (back) recovery = Math.max(0.1, back.year - event.year);
  }

  return { change, drawdown, cagr, recovery };
}

function applyStatTone(node, value, { invert = false } = {}) {
  if (!node) return;
  node.classList.remove("stat-up", "stat-down");
  if (value === null || !Number.isFinite(value) || value === 0) return;
  const positive = invert ? value < 0 : value > 0;
  node.classList.add(positive ? "stat-up" : "stat-down");
}

function setSelected(id, shouldChartScroll = true) {
  if (selectedId === id && !shouldChartScroll) return;
  selectedId = id;
  const selected = getSelectedEvent();
  const metrics = getEventMetrics(selected);

  detailSignal.textContent = tEv(selected, "signal");
  detailTitle.textContent = tEv(selected, "title");
  detailDate.textContent = selected.date;
  detailCopy.textContent = tEv(selected, "detail");
  animateCount(detailIndex, Math.round(selected.index));
  detailPhase.textContent = tEv(selected, "phaseLabel");
  detailChange.textContent = metrics.change === null ? t("stat.base") : formatSignedPct(metrics.change);
  detailDrawdown.textContent = metrics.drawdown >= -0.05 ? t("stat.ath") : `${metrics.drawdown.toFixed(1)}%`;
  applyStatTone(detailChange, metrics.change);
  applyStatTone(detailDrawdown, metrics.drawdown);

  updateChartMoment(selected);
  document.body.dataset.phase = selected.phase;

  const point = pointPositions.get(id);
  pulseSelectedPoint(point, selected.phase);
  if (selected.phase !== lastPhase) {
    flashPhaseWash(selected.phase);
    lastPhase = selected.phase;
  }

  chart.querySelectorAll(".chart-point").forEach((node) => {
    node.classList.toggle("is-selected", node.dataset.id === id);
  });

  chart.querySelectorAll(".event-label").forEach((label) => {
    label.classList.toggle("is-selected", label.dataset.id === id);
  });

  updateCursorLine(id);
  updateMinimapMarker(id);

  if (shouldChartScroll) {
    scrollChartTo(id);
  }
}

function showSignalConsole() {
  if (signalConsole) signalConsole.hidden = false;
  updateCursorLine(selectedId);
}

function hideSignalConsole() {
  if (signalConsole) signalConsole.hidden = true;
  chart.querySelector(".chart-cursor-line")?.classList.remove("is-visible");
}

function revealPoint(point, shouldChartScroll = false) {
  if (!point) return;
  if (currentFilter !== "all" && currentFilter !== point.phase) {
    applyFilter("all");
  }
  setSelected(point.id, shouldChartScroll);
  showSignalConsole();
}

function getNearestPointFromClientX(clientX) {
  const rect = chart.getBoundingClientRect();
  const x = ((clientX - rect.left) / rect.width) * chartSize.width;
  const candidates = [...pointPositions.values()].filter((point) => {
    return currentFilter === "all" || point.phase === currentFilter;
  });
  return candidates.reduce((closest, point) => {
    if (!closest) return point;
    return Math.abs(point.x - x) < Math.abs(closest.x - x) ? point : closest;
  }, null);
}

function updateCursorLine(id) {
  const point = pointPositions.get(id);
  const line = chart.querySelector(".chart-cursor-line");
  if (!point || !line) return;
  line.setAttribute("x1", point.x);
  line.setAttribute("x2", point.x);
  line.classList.toggle("is-visible", !signalConsole?.hidden);
  positionSignalConsole(point);
}

function positionSignalConsole(point) {
  if (!signalConsole || !chartScroll || !point) return;
  const pointViewportX = point.x - chartScroll.scrollLeft;
  signalConsole.classList.toggle("is-left", pointViewportX > chartScroll.clientWidth * 0.58);
}

function updateChartMoment(event) {
  chartMomentDate.textContent = event.date;
  chartMomentTitle.textContent = tEv(event, "title");
  chartMomentIndex.textContent = `${formatIndex(event.index)} · ${tEv(event, "phaseLabel")}`;
  chartMomentSummary.textContent = tEv(event, "summary");
}

function updateModal(event) {
  const metrics = getEventMetrics(event);
  modalDate.textContent = event.date;
  modalSignal.textContent = tEv(event, "signal");
  modalTitle.textContent = tEv(event, "title");
  modalCopy.textContent = tEv(event, "detail");
  animateCount(modalIndex, Math.round(event.index), { duration: 900 });
  modalPhase.textContent = tEv(event, "phaseLabel");
  modalChange.textContent = metrics.change === null ? t("stat.base") : formatSignedPct(metrics.change);
  modalDrawdown.textContent = metrics.drawdown >= -0.05 ? t("stat.ath") : `${metrics.drawdown.toFixed(1)}%`;
  modalCagr.textContent = metrics.cagr === null ? t("stat.dash") : formatSignedPct(metrics.cagr);
  modalRecovery.textContent = metrics.recovery === null
    ? (event.phase === "crisis" ? t("stat.norecover") : t("stat.dash"))
    : `${metrics.recovery.toFixed(1)}${t("stat.years")}`;
  applyStatTone(modalChange, metrics.change);
  applyStatTone(modalDrawdown, metrics.drawdown);
  applyStatTone(modalCagr, metrics.cagr);
}

function openMomentModal(id = selectedId) {
  const event = events.find((item) => item.id === id) || getSelectedEvent();
  lastModalId = event.id;
  updateModal(event);
  momentModal.hidden = false;
  modalClose.focus();
}

function closeMomentModal() {
  momentModal.hidden = true;
}

function centeredScrollLeft(point) {
  const maxScroll = chartScroll.scrollWidth - chartScroll.clientWidth;
  return Math.max(0, Math.min(maxScroll, point.x - chartScroll.clientWidth * 0.5));
}

function scrollChartTo(id) {
  const point = pointPositions.get(id);
  if (!point || !chartScroll) return;
  const nextLeft = centeredScrollLeft(point);
  suppressChartSyncUntil = performance.now() + 1400;
  if (typeof chartScroll.scrollTo === "function") {
    chartScroll.scrollTo({ left: nextLeft, behavior: prefersReducedMotion ? "auto" : "smooth" });
  } else {
    chartScroll.scrollLeft = nextLeft;
  }
}

function resetChartToStart() {
  if (!chartScroll) return;
  suppressChartSyncUntil = performance.now() + 900;
  chartScroll.scrollLeft = 0;
  lastChartScrollLeft = 0;
  setSelected("base", false);
  hideSignalConsole();
}

function applyFilter(filter) {
  currentFilter = filter;
  document.body.dataset.filterMode = filter;
  if (dataNote) dataNote.textContent = t(`mode.${filter}`) || t("mode.all");
  hideSignalConsole();

  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === filter;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  chart.querySelectorAll(".chart-point").forEach((point) => {
    const isMatch = filter === "all" || point.dataset.phase === filter;
    point.classList.toggle("is-filter-match", isMatch && filter !== "all");
    point.classList.toggle("is-filtered-out", !isMatch);
  });

  chart.querySelectorAll(".event-label").forEach((label) => {
    const phase = events.find((event) => event.id === label.dataset.id)?.phase;
    const isMatch = filter === "all" || phase === filter;
    label.classList.toggle("is-filter-match", isMatch && filter !== "all");
  });

  const targetId = modeTargets[filter] || modeTargets.all;
  setSelected(targetId, true);
}

function createSvgElement(name, attrs = {}) {
  const element = document.createElementNS("http://www.w3.org/2000/svg", name);
  Object.entries(attrs).forEach(([key, value]) => element.setAttribute(key, value));
  return element;
}

// 연도별 + 위기 월별 + (가능하면 라이브) + 사건 포인트를 합쳐 실제 코스피 라인을 만듭니다.
// 라이브 데이터가 있으면 그 시작 연도 이전만 번들 근사로 채워 깊은 역사 모양을 유지합니다.
function buildLinePoints() {
  const merged = [];
  const cut = liveLine ? liveStartYear : Infinity;
  Object.entries(yearlyCloses).forEach(([year, index]) => {
    if (Number(year) + 0.96 < cut) merged.push({ year: Number(year) + 0.96, index });
  });
  crisisMonthly.forEach((p) => {
    if (p.year < cut) merged.push({ year: p.year, index: p.index });
  });
  if (liveLine) {
    // 라이브일 때 라인은 실데이터만 사용 (사건 점은 라인에 스냅됨).
    liveLine.forEach((p) => merged.push({ year: p.year, index: p.index }));
  } else {
    events.forEach((event) => merged.push({ year: event.year, index: event.index }));
  }
  merged.sort((a, b) => a.year - b.year);
  return merged;
}

// 라이브 라인에서 특정 연도의 값을 선형 보간 (사건 점을 실데이터 위에 올림).
function sampleLine(year) {
  if (!liveLine || !liveLine.length) return null;
  if (year <= liveLine[0].year) return liveLine[0].index;
  const last = liveLine[liveLine.length - 1];
  if (year >= last.year) return last.index;
  for (let i = 1; i < liveLine.length; i += 1) {
    const a = liveLine[i - 1];
    const b = liveLine[i];
    if (year >= a.year && year <= b.year) {
      const t = (year - a.year) / (b.year - a.year || 1);
      return a.index + (b.index - a.index) * t;
    }
  }
  return last.index;
}

function renderChart() {
  const { width, height } = chartSize;
  const pad = { top: 28, right: 110, bottom: 42, left: 92 };
  const minYear = chartYears.min;
  const rawLine = buildLinePoints();
  // 데이터 범위에 맞춰 축·레벨선을 동적으로 산출 (라이브 데이터의 미지 범위까지 안전).
  const allYears = [...events.map((e) => e.year), ...rawLine.map((p) => p.year)];
  const allVals = [...events.map((e) => e.index), ...rawLine.map((p) => p.index)];
  const dataMaxYear = Math.max(...allYears);
  const maxYear = Math.max(2026.0, Math.ceil((dataMaxYear + 0.15) * 4) / 4);
  const dataMax = Math.max(...allVals);
  const maxIndex = Math.max(3000, Math.ceil((dataMax * 1.12) / 500) * 500);
  const levels = [];
  for (let v = 1000; v < maxIndex; v += 1000) levels.push(v);
  const decadeTicks = [];
  for (let yr = 1980; yr <= Math.floor(maxYear); yr += 10) decadeTicks.push(yr);
  const lastTick = Math.floor(dataMaxYear);
  if (!decadeTicks.includes(lastTick)) decadeTicks.push(lastTick);
  const x = (year) => pad.left + ((year - minYear) / (maxYear - minYear)) * (width - pad.left - pad.right);
  const y = (value) => height - pad.bottom - (value / maxIndex) * (height - pad.top - pad.bottom);
  const points = events.map((event) => ({ ...event, x: x(event.year), y: y(event.index) }));
  const linePoints = rawLine.map((p) => ({ x: x(p.year), y: y(p.index) }));
  const baseline = height - pad.bottom;

  pointPositions = new Map(points.map((point) => [point.id, point]));
  chart.innerHTML = "";
  chart.setAttribute("viewBox", `0 0 ${width} ${height}`);

  const title = createSvgElement("title", { id: "chart-title" });
  title.textContent = t("chart.title", { asOf: dataMeta.asOf });
  const desc = createSvgElement("desc", { id: "chart-desc" });
  desc.textContent = `${t("chart.desc", { asOf: dataMeta.asOf })} (${dataMeta.source})`;
  const defs = createSvgElement("defs");
  const gradient = createSvgElement("linearGradient", {
    id: "chartFill",
    x1: "0",
    x2: "0",
    y1: "0",
    y2: "1"
  });
  gradient.appendChild(createSvgElement("stop", { offset: "0%", "stop-color": "#b98e44", "stop-opacity": "0.26" }));
  gradient.appendChild(createSvgElement("stop", { offset: "100%", "stop-color": "#b98e44", "stop-opacity": "0" }));
  defs.appendChild(gradient);

  // 수묵 붓 획 — feTurbulence + feDisplacementMap으로 갈필/먹 번짐 결을 얹습니다.
  const inkFilter = createSvgElement("filter", {
    id: "inkBrush",
    x: "-4%",
    y: "-30%",
    width: "108%",
    height: "160%"
  });
  inkFilter.appendChild(createSvgElement("feTurbulence", {
    type: "fractalNoise",
    baseFrequency: "0.012 0.045",
    numOctaves: "2",
    seed: "7",
    result: "noise"
  }));
  inkFilter.appendChild(createSvgElement("feDisplacementMap", {
    in: "SourceGraphic",
    in2: "noise",
    scale: "7",
    xChannelSelector: "R",
    yChannelSelector: "G"
  }));
  defs.appendChild(inkFilter);
  chart.append(title, desc, defs);

  // 국면 음영 밴드 (필터 모드에 따라 강조)
  for (let i = 0; i < points.length - 1; i += 1) {
    const start = points[i];
    const end = points[i + 1];
    chart.appendChild(createSvgElement("rect", {
      class: `phase-band phase-band-${start.phase}`,
      x: start.x,
      y: pad.top,
      width: Math.max(1, end.x - start.x),
      height: baseline - pad.top
    }));
  }

  [0, ...levels].forEach((tick) => {
    chart.appendChild(createSvgElement("line", {
      class: tick === 0 ? "grid-line baseline" : "grid-line level-line",
      x1: pad.left,
      x2: width - pad.right,
      y1: y(tick),
      y2: y(tick)
    }));
    const label = createSvgElement("text", {
      class: "axis-label axis-label-y",
      x: 10,
      y: y(tick) + 5
    });
    label.textContent = formatIndex(tick);
    chart.appendChild(label);
  });

  decadeTicks.forEach((tick) => {
    const label = createSvgElement("text", {
      class: "axis-label",
      x: x(tick),
      y: height - 12,
      "text-anchor": "middle"
    });
    label.textContent = tick;
    chart.appendChild(label);
  });

  const pathData = linePoints.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`).join(" ");
  const areaData = `${pathData} L ${linePoints.at(-1).x.toFixed(1)} ${baseline} L ${linePoints[0].x.toFixed(1)} ${baseline} Z`;
  chart.appendChild(createSvgElement("path", { class: "area-fill", d: areaData }));
  chart.appendChild(createSvgElement("path", {
    class: "path-shadow",
    d: pathData,
    filter: (prefersReducedMotion || coarsePointer) ? "" : "url(#inkBrush)"
  }));
  chart.appendChild(createSvgElement("path", {
    class: "path-line",
    d: pathData,
    filter: (prefersReducedMotion || coarsePointer) ? "" : "url(#inkBrush)"
  }));
  chart.appendChild(createSvgElement("path", { class: "path-glow", d: pathData }));
  chart.appendChild(createSvgElement("line", {
    class: "chart-cursor-line",
    x1: points[0].x,
    x2: points[0].x,
    y1: pad.top,
    y2: baseline
  }));
  chart.appendChild(createSvgElement("line", {
    class: "chart-cross-h",
    x1: pad.left,
    x2: width - pad.right,
    y1: points[0].y,
    y2: points[0].y
  }));
  chart.appendChild(createSvgElement("rect", {
    class: "chart-pulse",
    x: points[0].x - 9,
    y: points[0].y - 9,
    width: 18,
    height: 18,
    rx: 1.5
  }));

  points.forEach((point) => {
    const label = createSvgElement("text", {
      class: "event-label",
      "data-id": point.id,
      x: point.x,
      y: Math.max(18, point.y - 16),
      "text-anchor": "middle"
    });
    label.textContent = `${formatIndex(point.index)}`;
    chart.appendChild(label);

    const dot = createSvgElement("rect", {
      class: `chart-point ${point.phase}`,
      "data-id": point.id,
      "data-phase": point.phase,
      x: point.x - 4,
      y: point.y - 4,
      width: 8,
      height: 8,
      rx: 1.2,
      tabindex: 0,
      role: "button",
      "aria-label": `${tEv(point, "title")} ${point.date} ${formatIndex(point.index)}`
    });
    dot.style.color = point.phase === "crisis" ? "var(--red)" : point.phase === "recovery" ? "var(--green)" : "var(--blue)";
    dot.addEventListener("click", () => {
      stopTour();
      revealPoint(point, true);
      writeHash(point.id);
    });
    dot.addEventListener("mouseenter", () => {
      revealPoint(point);
      showTooltip(point);
    });
    dot.addEventListener("mouseleave", hideTooltip);
    dot.addEventListener("focus", () => {
      revealPoint(point);
      showTooltip(point);
    });
    dot.addEventListener("blur", hideTooltip);
    dot.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        stopTour();
        revealPoint(point, true);
        writeHash(point.id);
      }
    });
    chart.appendChild(dot);
  });

  chartGeo = { pad, maxIndex, maxYear, baseline, levels, height, y };
  renderMinimap(linePoints);
  renderYAxis();
}

function renderYAxis() {
  if (!chartYaxis || !chartGeo) return;
  const { y, levels, height } = chartGeo;
  chartYaxis.innerHTML = [0, ...levels]
    .map((v) => {
      const top = (y(v) / height) * 100;
      return `<span class="yaxis-tick${v === 0 ? " is-base" : ""}" style="top:${top.toFixed(2)}%">${formatIndex(v)}</span>`;
    })
    .join("");
}

function renderMinimap(linePoints) {
  if (!minimap) return;
  const mw = 1200;
  const mh = 96;
  const ys = linePoints.map((p) => p.y);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const sx = (v) => (v / chartSize.width) * mw;
  const sy = (v) => 6 + ((v - minY) / (maxY - minY)) * (mh - 12);

  minimap.innerHTML = "";
  minimap.setAttribute("viewBox", `0 0 ${mw} ${mh}`);
  const d = linePoints.map((p, i) => `${i === 0 ? "M" : "L"} ${sx(p.x).toFixed(1)} ${sy(p.y).toFixed(1)}`).join(" ");
  minimap.appendChild(createSvgElement("path", { class: "minimap-area", d: `${d} L ${mw} ${mh} L 0 ${mh} Z` }));
  minimap.appendChild(createSvgElement("path", { class: "minimap-line", d }));
  minimap.appendChild(createSvgElement("line", {
    class: "minimap-marker",
    x1: 0,
    x2: 0,
    y1: 0,
    y2: mh
  }));
  minimap.appendChild(createSvgElement("rect", {
    class: "minimap-window",
    x: 0,
    y: 0,
    width: 1,
    height: mh
  }));
  updateMinimapWindow();
  updateMinimapMarker(selectedId);
}

function updateMinimapWindow() {
  if (!minimap || !chartScroll) return;
  const win = minimap.querySelector(".minimap-window");
  if (!win) return;
  const total = chartScroll.scrollWidth || 1;
  const ratio = chartScroll.scrollLeft / total;
  const widthRatio = chartScroll.clientWidth / total;
  win.setAttribute("x", (ratio * 1200).toFixed(1));
  win.setAttribute("width", Math.max(12, widthRatio * 1200).toFixed(1));
}

function updateMinimapMarker(id) {
  if (!minimap) return;
  const marker = minimap.querySelector(".minimap-marker");
  const point = pointPositions.get(id);
  if (!marker || !point) return;
  const mx = (point.x / chartSize.width) * 1200;
  marker.setAttribute("x1", mx.toFixed(1));
  marker.setAttribute("x2", mx.toFixed(1));
}

function scrollChartToRatio(ratio) {
  if (!chartScroll) return;
  const maxScroll = chartScroll.scrollWidth - chartScroll.clientWidth;
  suppressChartSyncUntil = performance.now() + 200;
  chartScroll.scrollLeft = Math.max(0, Math.min(maxScroll, ratio * maxScroll));
}

function enableMinimap() {
  if (!minimap) return;
  const seek = (clientX) => {
    const rect = minimap.getBoundingClientRect();
    const ratio = (clientX - rect.left) / rect.width;
    scrollChartToRatio(ratio);
  };
  minimap.addEventListener("pointerdown", (event) => {
    isMinimapDragging = true;
    minimap.setPointerCapture(event.pointerId);
    stopTour();
    seek(event.clientX);
  });
  minimap.addEventListener("pointermove", (event) => {
    if (!isMinimapDragging) return;
    seek(event.clientX);
  });
  minimap.addEventListener("pointerup", (event) => {
    isMinimapDragging = false;
    minimap.releasePointerCapture(event.pointerId);
  });
  minimap.addEventListener("pointercancel", () => {
    isMinimapDragging = false;
  });
}

function showTooltip(point) {
  if (!point) return;
  const rect = chart.getBoundingClientRect();
  const scaleX = rect.width / chartSize.width;
  const scaleY = rect.height / chartSize.height;
  const ev = events.find((e) => e.id === point.id);
  const metrics = ev ? getEventMetrics(ev) : { change: null };
  const change = metrics.change === null ? "기준점" : formatSignedPct(metrics.change);
  tooltip.hidden = false;
  tooltip.classList.toggle("is-up", Number.isFinite(metrics.change) && metrics.change > 0);
  tooltip.classList.toggle("is-down", Number.isFinite(metrics.change) && metrics.change < 0);
  tooltip.style.left = `${point.x * scaleX}px`;
  tooltip.style.top = `${point.y * scaleY}px`;
  tooltip.innerHTML =
    `<strong>${formatIndex(point.index)}</strong>` +
    `<span>${point.date}</span>` +
    `<em>${change}</em>`;
  const crossH = chart.querySelector(".chart-cross-h");
  if (crossH) {
    crossH.setAttribute("y1", point.y);
    crossH.setAttribute("y2", point.y);
    crossH.classList.add("is-visible");
  }
}

function hideTooltip() {
  tooltip.hidden = true;
  chart.querySelector(".chart-cross-h")?.classList.remove("is-visible");
}

function getFilteredEventsInOrder() {
  return events.filter((event) => currentFilter === "all" || event.phase === currentFilter);
}

function stepSelection(direction) {
  const list = getFilteredEventsInOrder();
  if (!list.length) return;
  const currentIdx = list.findIndex((event) => event.id === selectedId);
  let nextIdx;
  if (direction === "home") nextIdx = 0;
  else if (direction === "end") nextIdx = list.length - 1;
  else nextIdx = Math.min(list.length - 1, Math.max(0, (currentIdx === -1 ? 0 : currentIdx) + direction));
  const next = list[nextIdx];
  if (next) {
    stopTour();
    revealPoint(next, true);
    writeHash(next.id);
  }
}

function startTour() {
  const list = getFilteredEventsInOrder();
  if (!list.length) return;
  isTouring = true;
  document.body.classList.add("is-touring");
  tourButton?.classList.add("is-playing");
  tourButton?.setAttribute("aria-pressed", "true");
  if (tourLabel) tourLabel.textContent = t("tour.stop");
  const idx = list.findIndex((event) => event.id === selectedId);
  tourIndex = idx >= 0 && idx < list.length - 1 ? idx : 0;

  const advance = () => {
    if (!isTouring) return;
    const event = list[tourIndex];
    revealPoint(event, true);
    writeHash(event.id);
    if (tourIndex >= list.length - 1) {
      stopTour();
      return;
    }
    tourIndex += 1;
    tourTimer = window.setTimeout(advance, prefersReducedMotion ? 1300 : 3000);
  };
  advance();
}

function stopTour() {
  if (!isTouring) return;
  isTouring = false;
  document.body.classList.remove("is-touring");
  window.clearTimeout(tourTimer);
  tourButton?.classList.remove("is-playing");
  tourButton?.setAttribute("aria-pressed", "false");
  if (tourLabel) tourLabel.textContent = t("tour.play");
}

function toggleTour() {
  if (isTouring) stopTour();
  else startTour();
}

function getEventById(id) {
  return events.find((event) => event.id === id) || null;
}

function writeHash(id) {
  if (!id) return;
  if (`#${id}` === window.location.hash) return;
  window.history.replaceState(null, "", `#${id}`);
}

function applyHashFromLocation() {
  const id = window.location.hash.replace("#", "");
  const event = getEventById(id);
  if (!event) return false;
  revealPoint(event, true);
  return true;
}

function updateProgress() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollMax = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollMax <= 0 ? 0 : scrollTop / scrollMax;
  progressBar.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
}

function updateScrollVelocity() {
  if (prefersReducedMotion) return;
  const now = performance.now();
  const sy = window.scrollY;
  const dt = Math.max(16, now - lastScrollT);
  const velocity = Math.min(1, (Math.abs(sy - lastScrollY) / dt) / 2.4);
  lastScrollY = sy;
  lastScrollT = now;
  document.documentElement.style.setProperty("--scroll-vel", velocity.toFixed(3));
  window.clearTimeout(scrollVelTimer);
  scrollVelTimer = window.setTimeout(() => {
    document.documentElement.style.setProperty("--scroll-vel", "0");
  }, 150);
}

function updateChartScrollbar() {
  updateMinimapWindow();
  syncSelectionToChartCenter();
}

function syncSelectionToChartCenter() {
  if (!chartScroll || pointPositions.size === 0 || performance.now() < suppressChartSyncUntil) return;
  const maxScroll = chartScroll.scrollWidth - chartScroll.clientWidth;
  const focusRatio = chartScroll.scrollLeft <= 4 ? 0.08 : chartScroll.scrollLeft >= maxScroll - 4 ? 0.92 : 0.5;
  const centerX = chartScroll.scrollLeft + chartScroll.clientWidth * focusRatio;
  const candidates = [...pointPositions.values()].filter((point) => {
    return currentFilter === "all" || point.phase === currentFilter;
  });
  const nearest = candidates.reduce((closest, point) => {
    if (!closest) return point;
    return Math.abs(point.x - centerX) < Math.abs(closest.x - centerX) ? point : closest;
  }, null);

  if (nearest && nearest.id !== selectedId) {
    setSelected(nearest.id, false);
  }
}

// 스크롤이 멈추면 가장 가까운 사건으로 자석처럼 붙습니다.
function maybeMagneticSnap() {
  if (!chartScroll || !pendingSnap) return;
  if (isChartDragging || isTouring || isMinimapDragging) return;
  if (performance.now() - lastScrollChangeAt < 170) return;
  if (performance.now() < suppressChartSyncUntil) return;
  pendingSnap = false;
  const maxScroll = chartScroll.scrollWidth - chartScroll.clientWidth;
  if (chartScroll.scrollLeft <= 2 || chartScroll.scrollLeft >= maxScroll - 2) return;
  const point = pointPositions.get(selectedId);
  if (!point) return;
  const desired = centeredScrollLeft(point);
  if (Math.abs(desired - chartScroll.scrollLeft) <= 8) return;
  suppressChartSyncUntil = performance.now() + 650;
  if (typeof chartScroll.scrollTo === "function") {
    chartScroll.scrollTo({ left: desired, behavior: prefersReducedMotion ? "auto" : "smooth" });
  } else {
    chartScroll.scrollLeft = desired;
  }
}

function enableChartGestures() {
  if (!chartScroll) return;

  chartScroll.addEventListener("pointermove", (event) => {
    if (isChartDragging) return;
    const nearest = getNearestPointFromClientX(event.clientX);
    if (!nearest) return;
    revealPoint(nearest);
    showTooltip(nearest);
  });

  chartScroll.addEventListener("pointerleave", () => {
    hideTooltip();
  });

  chartScroll.addEventListener("wheel", (event) => {
    if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
    event.preventDefault();
    chartScroll.scrollLeft += event.deltaY * 1.28;
  }, { passive: false });

  chartScroll.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    isChartDragging = true;
    chartDragStartX = event.clientX;
    chartDragStartLeft = chartScroll.scrollLeft;
    chartScroll.classList.add("is-dragging");
    chartScroll.setPointerCapture(event.pointerId);
  });

  chartScroll.addEventListener("pointermove", (event) => {
    if (!isChartDragging) return;
    chartScroll.scrollLeft = chartDragStartLeft - (event.clientX - chartDragStartX);
  });

  chartScroll.addEventListener("pointerup", (event) => {
    isChartDragging = false;
    chartScroll.classList.remove("is-dragging");
    chartScroll.releasePointerCapture(event.pointerId);
  });

  chartScroll.addEventListener("pointercancel", () => {
    isChartDragging = false;
    chartScroll.classList.remove("is-dragging");
  });

  chartScroll.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      stepSelection(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      stepSelection(-1);
    } else if (event.key === "Home") {
      event.preventDefault();
      stepSelection("home");
    } else if (event.key === "End") {
      event.preventDefault();
      stepSelection("end");
    }
  });
}

function watchChartPosition() {
  if (chartScroll) {
    if (chartScroll.scrollLeft !== lastChartScrollLeft) {
      lastChartScrollLeft = chartScroll.scrollLeft;
      lastScrollChangeAt = performance.now();
      pendingSnap = true;
      updateChartScrollbar();
    } else {
      maybeMagneticSnap();
    }
  }
  window.requestAnimationFrame(watchChartPosition);
}

function observeChapters() {
  const chapters = document.querySelectorAll(".story-chapter");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const chapter = entry.target.dataset.chapter;
      chapterIndicator.textContent = chapter;
      entry.target.classList.add("is-current");
      chapters.forEach((item) => {
        if (item !== entry.target) item.classList.remove("is-current");
      });
    });
  }, { threshold: 0.42 });

  chapters.forEach((chapter) => observer.observe(chapter));
}

// 시장 국면에 따라 거동이 바뀌는 제너러티브 입자 레이어.
function initParticles() {
  const canvas = document.querySelector("#market-particles");
  if (!canvas || prefersReducedMotion || coarsePointer) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const colors = { crisis: "#c0473a", recovery: "#3f8a86", growth: "#b98e44", default: "#b98e44" };
  let w = 0;
  let h = 0;
  let running = true;
  let raf = 0;
  const particles = [];

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  for (let i = 0; i < 64; i += 1) {
    particles.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.6 + 0.4
    });
  }
  function frame() {
    if (!running) return;
    const phase = document.body.dataset.phase || "default";
    const color = colors[phase] || colors.default;
    let drift = -0.18;
    let jitter = 0.25;
    if (phase === "crisis") { drift = 0.5; jitter = 0.85; }
    else if (phase === "recovery") { drift = -0.42; jitter = 0.2; }
    else if (phase === "growth") { drift = -0.78; jitter = 0.12; }
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = color;
    particles.forEach((p) => {
      p.x += (Math.random() - 0.5) * jitter;
      p.y += drift + (Math.random() - 0.5) * jitter;
      if (p.y < -12) { p.y = h + 12; p.x = Math.random() * w; }
      if (p.y > h + 12) { p.y = -12; p.x = Math.random() * w; }
      ctx.globalAlpha = 0.45;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });
    raf = window.requestAnimationFrame(frame);
  }
  resize();
  window.addEventListener("resize", resize);
  document.addEventListener("visibilitychange", () => {
    running = !document.hidden;
    if (running) {
      raf = window.requestAnimationFrame(frame);
    } else {
      window.cancelAnimationFrame(raf);
    }
  });
  raf = window.requestAnimationFrame(frame);
}

function runMarketPulseIntro() {
  document.querySelectorAll(".market-pulse strong[data-count]").forEach((node) => {
    const raw = node.dataset.count || "0";
    const decimals = raw.includes(".") ? 2 : 0;
    node.textContent = prefersReducedMotion ? node.textContent : "0";
    animateCount(node, parseFloat(raw), { duration: 1100, decimals });
  });
}

function runLoader() {
  const fill = loader?.querySelector(".loader-line span");
  let value = 0;
  const timer = window.setInterval(() => {
    value = Math.min(100, value + Math.ceil(Math.random() * 12) + 2);
    loaderCount.textContent = `${value}%`;
    if (fill) fill.style.transform = `scaleX(${value / 100})`;
    if (value >= 100) {
      window.clearInterval(timer);
      window.setTimeout(() => {
        document.body.classList.add("is-ready");
        runMarketPulseIntro();
        window.setTimeout(() => {
          if (loader) loader.hidden = true;
        }, 650);
      }, 260);
    }
  }, 90);
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    stopTour();
    applyFilter(button.dataset.filter);
  });
});
tourButton?.addEventListener("click", toggleTour);
modalClose.addEventListener("click", closeMomentModal);
modalScrim.addEventListener("click", closeMomentModal);
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !momentModal.hidden) {
    closeMomentModal();
  }
});

window.addEventListener("scroll", () => {
  updateProgress();
  updateScrollVelocity();
}, { passive: true });
chartScroll?.addEventListener("scroll", updateChartScrollbar, { passive: true });
window.addEventListener("hashchange", () => {
  stopTour();
  applyHashFromLocation();
});
window.addEventListener("pageshow", () => {
  window.requestAnimationFrame(() => {
    resetChartToStart();
    applyHashFromLocation();
  });
});
window.addEventListener("resize", () => {
  updateProgress();
  updateChartScrollbar();
  if (!tooltip.hidden) {
    showTooltip(pointPositions.get(selectedId));
  }
});

window.addEventListener("pointermove", (event) => {
  document.body.classList.add("has-pointer");
  document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
  document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
}, { passive: true });

window.addEventListener("pointerleave", () => {
  document.body.classList.remove("has-pointer");
});

function recentSlopePhase(series) {
  const last = series[series.length - 1];
  const refIdx = Math.max(0, series.length - 7);
  const ref = series[refIdx];
  if (!last || !ref || !ref.index) return "growth";
  const pct = ((last.index - ref.index) / ref.index) * 100;
  if (pct >= 3) return "growth";
  if (pct <= -3) return "crisis";
  return "recovery";
}

// 외부 데이터에서 큰 변곡(임계 등락폭 이상 스윙)을 자동 검출 (간이 ZigZag).
function detectSwings(series, minPct, sinceYear) {
  if (series.length < 3) return [];
  const pivots = [];
  let dir = 0;
  let extremeIdx = 0;
  for (let i = 1; i < series.length; i += 1) {
    const v = series[i].index;
    const ev = series[extremeIdx].index;
    if (dir >= 0 && v > ev) extremeIdx = i;
    else if (dir <= 0 && v < ev) extremeIdx = i;
    const change = ((v - series[extremeIdx].index) / series[extremeIdx].index) * 100;
    if (dir >= 0 && change <= -minPct) {
      pivots.push({ point: series[extremeIdx], kind: "peak" });
      dir = -1;
      extremeIdx = i;
    } else if (dir <= 0 && change >= minPct) {
      pivots.push({ point: series[extremeIdx], kind: "trough" });
      dir = 1;
      extremeIdx = i;
    }
  }
  return pivots.filter((p) => p.point.year >= sinceYear);
}

function toDottedDate(value) {
  return String(value || "").replace(/-/g, ".");
}

function addSyntheticEvents(series, data) {
  for (let i = events.length - 1; i >= 0; i -= 1) {
    if (String(events[i].id).startsWith("live-")) events.splice(i, 1);
  }
  const curatedMaxYear = Math.max(...events.map((e) => e.year));
  const asOf = toDottedDate(data.asOf);

  const tl = (lng, key, vars) => {
    let s = (I18N[lng] && I18N[lng][key]) || I18N.ko[key] || key;
    if (vars) Object.keys(vars).forEach((k) => { s = s.replace(`{${k}}`, vars[k]); });
    return s;
  };

  detectSwings(series, 15, curatedMaxYear + 0.01)
    .slice(-2)
    .forEach((sw, n) => {
      const up = sw.kind === "peak";
      const idx = formatIndex(sw.point.index);
      const sum = up ? "live.swingSummaryUp" : "live.swingSummaryDown";
      const lbl = up ? "live.swingPeakLabel" : "live.swingTroughLabel";
      events.push({
        id: `live-swing-${n}`,
        year: sw.point.year,
        date: toDottedDate(data.monthly.find((m) => m.close === sw.point.index)?.date) || asOf,
        index: sw.point.index,
        phase: up ? "growth" : "crisis",
        phaseLabel: tl("ko", lbl),
        signal: tl("ko", "live.swingSignal"),
        title: tl("ko", "live.swingTitle", { idx }),
        summary: tl("ko", sum),
        detail: tl("ko", "live.swingDetail"),
        _en: {
          phaseLabel: tl("en", lbl),
          signal: tl("en", "live.swingSignal"),
          title: tl("en", "live.swingTitle", { idx }),
          summary: tl("en", sum),
          detail: tl("en", "live.swingDetail")
        }
      });
    });

  const last = series[series.length - 1];
  if (last && last.year > curatedMaxYear) {
    const phase = recentSlopePhase(series);
    const idx = formatIndex(last.index);
    events.push({
      id: "live-latest",
      year: last.year,
      date: asOf,
      index: last.index,
      phase,
      phaseLabel: tl("ko", "live.latestLabel"),
      signal: tl("ko", "live.latestSignal"),
      title: tl("ko", "live.latestTitle", { asOf, idx }),
      summary: tl("ko", "live.latestSummary", { asOf }),
      detail: tl("ko", "live.latestDetail"),
      _en: {
        phaseLabel: tl("en", "live.latestLabel"),
        signal: tl("en", "live.latestSignal"),
        title: tl("en", "live.latestTitle", { asOf, idx }),
        summary: tl("en", "live.latestSummary", { asOf }),
        detail: tl("en", "live.latestDetail")
      }
    });
  }

  events.sort((a, b) => a.year - b.year);
}

function updateProvenance() {
  const srcLabel = dataMeta.source === "bundled"
    ? t("prov.bundled")
    : `${t("prov.live")}(${dataMeta.source})`;
  const note = document.querySelector("#data-source-note");
  if (note) note.textContent = `${t("prov.label")} · ${srcLabel} · ${t("prov.asof")} ${dataMeta.asOf}`;
  const meta = document.querySelector(".topbar-meta");
  if (meta) meta.textContent = `Data wall · ${dataMeta.asOf}`;
  const code = document.querySelector(".hero-code");
  if (code) code.textContent = `Exhibition Archive · 1980 — ${dataMeta.asOf}`;
}

/* ===== 상단 최신 지표 ===== */
function updateLatestUI() {
  const label = document.querySelector("#pulse-latest-label");
  const value = document.querySelector("#pulse-latest");
  const note = document.querySelector("#pulse-latest-note");
  if (!value) return;
  if (liveLine && liveLine.length) {
    const last = liveLine[liveLine.length - 1];
    if (label) label.textContent = t("pulse.latestLabel");
    value.dataset.count = String(last.index);
    value.textContent = formatIndex(last.index);
    if (note) note.textContent = `${dataMeta.asOf} ${t("pulse.latestNote")} · ${dataMeta.source}`;
    if (!prefersReducedMotion) {
      value.textContent = "0";
      animateCount(value, Math.round(last.index), { duration: 1100 });
    }
  }
}

/* ===== 시대(갤러리) 데이터 ===== */
const eraConfig = {
  crash: { from: 1996, to: 2010, phase: "crisis" },
  recover: { from: 2009, to: 2021.2, phase: "recovery" },
  reprice: { from: 2017, to: 9999, phase: "growth" }
};

function sliceLinePoints(from, to) {
  return buildLinePoints().filter((p) => p.year >= from && p.year <= to);
}

function computeEraStats(from, to) {
  const slice = sliceLinePoints(from, to);
  if (slice.length < 2) return null;
  const startVal = slice[0].index;
  const endVal = slice[slice.length - 1].index;
  let peak = slice[0].index;
  let maxDd = 0;
  slice.forEach((p) => {
    peak = Math.max(peak, p.index);
    maxDd = Math.min(maxDd, ((p.index - peak) / peak) * 100);
  });
  return {
    slice,
    returnPct: ((endVal - startVal) / startVal) * 100,
    maxDrawdown: maxDd,
    fromYear: Math.floor(slice[0].year),
    toYear: Math.floor(slice[slice.length - 1].year)
  };
}

function renderEraPanels() {
  document.querySelectorAll(".story-chapter[data-era]").forEach((article) => {
    const era = article.dataset.era;
    const conf = eraConfig[era];
    const svg = article.querySelector(".era-chart");
    if (!conf || !svg) return;
    const stats = computeEraStats(conf.from, conf.to);
    if (!stats) return;
    const vbW = 900;
    const vbH = 520;
    const padY = 60;
    const xs = stats.slice.map((p) => p.year);
    const ys = stats.slice.map((p) => p.index);
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const minY = Math.min(...ys);
    const maxY = Math.max(...ys);
    const sx = (v) => ((v - minX) / (maxX - minX || 1)) * vbW;
    const sy = (v) => vbH - padY - ((v - minY) / (maxY - minY || 1)) * (vbH - padY * 2);
    const d = stats.slice
      .map((p, i) => `${i === 0 ? "M" : "L"} ${sx(p.year).toFixed(1)} ${sy(p.index).toFixed(1)}`)
      .join(" ");
    svg.innerHTML = "";
    svg.setAttribute("viewBox", `0 0 ${vbW} ${vbH}`);
    svg.appendChild(createSvgElement("path", {
      class: "era-area",
      d: `${d} L ${vbW} ${vbH} L 0 ${vbH} Z`
    }));
    svg.appendChild(createSvgElement("path", { class: "era-stroke", d, pathLength: "1" }));

    const fmtPct = (v) => `${v > 0 ? "+" : ""}${v.toFixed(1)}%`;
    article.querySelectorAll("[data-era-stat]").forEach((node) => {
      const kind = node.dataset.eraStat;
      if (kind === "span") {
        node.dataset.target = "";
        node.textContent = `${stats.fromYear}–${stats.toYear}`;
      } else if (kind === "return") {
        node.dataset.target = stats.returnPct.toFixed(1);
        node.textContent = prefersReducedMotion ? fmtPct(stats.returnPct) : "0.0%";
      } else if (kind === "drawdown") {
        node.dataset.target = stats.maxDrawdown.toFixed(1);
        node.textContent = prefersReducedMotion ? fmtPct(stats.maxDrawdown) : "0.0%";
      }
    });
  });
}

function playEraStats(article) {
  if (article.dataset.played === "1") return;
  article.dataset.played = "1";
  article.classList.add("is-played");
  article.querySelectorAll("[data-era-stat]").forEach((node) => {
    const target = parseFloat(node.dataset.target);
    if (!Number.isFinite(target) || prefersReducedMotion) return;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / 900);
      const eased = 1 - Math.pow(1 - t, 3);
      const v = target * eased;
      node.textContent = `${v > 0 ? "+" : ""}${v.toFixed(1)}%`;
      if (t < 1) requestAnimationFrame(tick);
      else node.textContent = `${target > 0 ? "+" : ""}${target.toFixed(1)}%`;
    };
    requestAnimationFrame(tick);
  });
}

/* ===== Hero — 핀조명 + 실데이터 곡선 ===== */
function renderHero() {
  if (!heroSvg) return;
  const W = 1100;
  const H = 460;
  const pad = { top: 36, right: 40, bottom: 40, left: 40 };
  const line = buildLinePoints();
  if (line.length < 2) return;
  const minYear = line[0].year;
  const maxYear = line[line.length - 1].year;
  const vals = line.map((p) => p.index);
  const minV = Math.min(...vals);
  const maxV = Math.max(...vals);
  const hx = (yr) => pad.left + ((yr - minYear) / (maxYear - minYear || 1)) * (W - pad.left - pad.right);
  const hy = (v) => H - pad.bottom - ((v - minV) / (maxV - minV || 1)) * (H - pad.top - pad.bottom);
  const d = line.map((p, i) => `${i === 0 ? "M" : "L"} ${hx(p.year).toFixed(1)} ${hy(p.index).toFixed(1)}`).join(" ");

  heroSvg.innerHTML = "";
  heroSvg.setAttribute("viewBox", `0 0 ${W} ${H}`);
  const title = createSvgElement("title", { id: "hero-chart-title" });
  title.textContent = `KOSPI 1980 — ${dataMeta.asOf}`;
  const desc = createSvgElement("desc", { id: "hero-chart-desc" });
  desc.textContent = t("chart.desc", { asOf: dataMeta.asOf });
  const defs = createSvgElement("defs");
  const grad = createSvgElement("radialGradient", { id: "heroPinGrad" });
  grad.appendChild(createSvgElement("stop", { offset: "0%", "stop-color": "#fff" }));
  grad.appendChild(createSvgElement("stop", { offset: "58%", "stop-color": "#fff" }));
  grad.appendChild(createSvgElement("stop", { offset: "100%", "stop-color": "#000" }));
  const mask = createSvgElement("mask", { id: "heroPin" });
  mask.appendChild(createSvgElement("rect", { x: 0, y: 0, width: W, height: H, fill: "#000" }));
  const pinC = createSvgElement("circle", { class: "hero-pin", cx: W * 0.62, cy: H * 0.4, r: 200, fill: "url(#heroPinGrad)" });
  mask.appendChild(pinC);
  defs.appendChild(grad);
  defs.appendChild(mask);
  heroSvg.append(title, desc, defs);

  heroSvg.appendChild(createSvgElement("path", { class: "hero-dim", d }));
  const lit = createSvgElement("g", prefersReducedMotion ? {} : { mask: "url(#heroPin)" });
  lit.appendChild(createSvgElement("path", { class: "hero-lit", d }));
  events.forEach((ev) => {
    if (ev.year < minYear || ev.year > maxYear) return;
    lit.appendChild(createSvgElement("rect", {
      class: `hero-seal ${ev.phase}`,
      "data-id": ev.id,
      x: hx(ev.year) - 4,
      y: hy(ev.index) - 4,
      width: 8,
      height: 8,
      rx: 1.2
    }));
  });
  heroSvg.appendChild(lit);

  const pin = { x: W * 0.62, y: H * 0.4 };
  const nearestEventToX = (svgX) => {
    let best = null;
    events.forEach((ev) => {
      if (ev.year < minYear || ev.year > maxYear) return;
      const ex = hx(ev.year);
      if (!best || Math.abs(ex - svgX) < Math.abs(hx(best.year) - svgX)) best = ev;
    });
    return best;
  };
  const setReadout = (svgX) => {
    const ev = nearestEventToX(svgX);
    if (ev && heroReadout) {
      heroReadout.innerHTML = `<b>${formatIndex(ev.index)}</b><span>${ev.date} · ${tEv(ev, "title")}</span>`;
    }
    return ev;
  };
  const movePin = (svgX, svgY) => {
    pin.x = svgX;
    pin.y = svgY;
    pinC.setAttribute("cx", svgX.toFixed(1));
    pinC.setAttribute("cy", svgY.toFixed(1));
    setReadout(svgX);
  };
  const toSvg = (clientX, clientY) => {
    const r = heroSvg.getBoundingClientRect();
    return {
      x: ((clientX - r.left) / r.width) * W,
      y: ((clientY - r.top) / r.height) * H
    };
  };

  if (heroVisual) {
    heroVisual.onpointermove = (e) => {
      heroPointerAt = performance.now();
      const s = toSvg(e.clientX, e.clientY);
      movePin(s.x, s.y);
    };
    heroVisual.onpointerleave = () => setReadout(pin.x);
    heroVisual.onclick = (e) => {
      const s = toSvg(e.clientX, e.clientY);
      const ev = nearestEventToX(s.x);
      if (!ev) return;
      stopTour();
      const target = document.querySelector("#index");
      if (target && typeof target.scrollIntoView === "function") {
        target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
      }
      revealPoint(ev, true);
      writeHash(ev.id);
    };
  }
  setReadout(pin.x);
}

function heroAutoSweep() {
  if (!heroSvg || prefersReducedMotion) return;
  const pinC = heroSvg.querySelector(".hero-pin");
  if (pinC && performance.now() - heroPointerAt > 2600) {
    heroSweep += 0.006;
    const W = 1100;
    const H = 460;
    const cx = W * (0.5 + 0.42 * Math.sin(heroSweep));
    const cy = H * (0.45 + 0.16 * Math.sin(heroSweep * 0.7));
    pinC.setAttribute("cx", cx.toFixed(1));
    pinC.setAttribute("cy", cy.toFixed(1));
  }
  window.requestAnimationFrame(heroAutoSweep);
}

function toggleDataMode() {
  const on = document.body.classList.toggle("is-data-mode");
  if (dataModeBtn) {
    dataModeBtn.classList.toggle("is-active", on);
    dataModeBtn.setAttribute("aria-pressed", String(on));
  }
}

function rebuildChart() {
  renderChart();
  applyFilter(currentFilter);
  resetChartToStart();
  applyHashFromLocation();
  updateChartScrollbar();
  renderHero();
  renderEraPanels();
}

// 폴백 우선: 번들 데이터로 먼저 렌더한 뒤, 라이브가 도착하면 보강.
async function enhanceWithLiveData() {
  let data;
  try {
    const res = await fetch("/api/kospi", { headers: { Accept: "application/json" } });
    if (!res.ok) return;
    data = await res.json();
  } catch (err) {
    return;
  }
  if (!data || !Array.isArray(data.monthly) || data.monthly.length < 12) return;

  const pts = data.monthly
    .map((m) => ({ year: decimalYearFromDate(m.date), index: m.close }))
    .filter((p) => p.year && Number.isFinite(p.index) && p.index > 0)
    .sort((a, b) => a.year - b.year);
  if (pts.length < 12) return;

  liveLine = pts;
  liveStartYear = pts[0].year;
  dataMeta.source = data.source || "live";
  dataMeta.asOf = toDottedDate(data.asOf) || dataMeta.asOf;

  // 라이브 구간에 들어오는 큐레이션 사건의 수치를 실데이터로 스냅 (라인과 일치).
  const liveEndYear = pts[pts.length - 1].year;
  events.forEach((ev) => {
    if (ev.year >= liveStartYear && ev.year <= liveEndYear) {
      const sampled = sampleLine(ev.year);
      if (sampled && Number.isFinite(sampled)) ev.index = Math.round(sampled * 100) / 100;
    }
  });

  addSyntheticEvents(pts, data);
  rebuildChart();
  updateProvenance();
  updateLatestUI();
}

function observeEraPanels() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) playEraStats(entry.target);
    });
  }, { threshold: 0.35 });
  document.querySelectorAll(".story-chapter[data-era]").forEach((a) => observer.observe(a));
}

document.body.dataset.phase = "growth";
renderChart();
renderHero();
renderEraPanels();
observeChapters();
observeEraPanels();
enableChartGestures();
enableMinimap();
initParticles();
applyFilter("all");
resetChartToStart();
if (!applyHashFromLocation()) {
  window.setTimeout(resetChartToStart, 120);
}
updateProgress();
updateChartScrollbar();
updateProvenance();
updateLatestUI();
watchChartPosition();
heroAutoSweep();
applyLang(detectLang());
runLoader();
enhanceWithLiveData();

dataModeBtn?.addEventListener("click", toggleDataMode);
document.querySelector("#lang-toggle")?.addEventListener("click", () => {
  applyLang(lang === "ko" ? "en" : "ko");
});
window.addEventListener("resize", () => {
  renderHero();
  renderEraPanels();
}, { passive: true });
