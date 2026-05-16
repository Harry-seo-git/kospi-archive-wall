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
    detail: "오늘의 7,000선도 이 숫자에서 출발합니다. 긴 차트의 첫 점은 작은 숫자지만, 이후 46년 동안 시장이 반복한 공포와 회복을 모두 품고 있습니다."
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
    year: 1998,
    date: "1998.06",
    index: 277,
    phase: "crisis",
    phaseLabel: "외환위기",
    signal: "공포가 숫자가 된 밤",
    title: "IMF 충격의 저점",
    summary: "외환위기 이후 신용 경색과 구조조정 공포가 시장을 깊은 저점으로 끌어내립니다.",
    detail: "1997년 말 구제금융 합의 이후에도 불확실성은 이어졌습니다. 이 장면은 한국 시장의 가장 강렬한 급락 기억 중 하나입니다."
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
    year: 2008,
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
    year: 2020,
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
    phaseLabel: "역사적 고점",
    signal: "가장 높은 숨",
    title: "역사적 고점",
    summary: "코스피는 2021년 6월 장중 3316선까지 오르며 팬데믹 이후 랠리의 정점을 기록합니다.",
    detail: "이후 금리 상승과 성장주 재평가가 시작되며 시장은 다시 조정 국면으로 들어갔습니다. 2026년 랠리 전까지 이 고점은 긴 기억으로 남았습니다."
  },
  {
    id: "rate-shock",
    year: 2022.99,
    date: "2022.12",
    index: 2236.4,
    phase: "crisis",
    phaseLabel: "금리 충격",
    signal: "유동성이 빠진 자리",
    title: "2022년 약세장",
    summary: "금리 상승과 성장주 재평가 속에서 코스피는 2022년 말 2236.40으로 내려왔습니다.",
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
    year: 2024.99,
    date: "2024.12",
    index: 2399.49,
    phase: "crisis",
    phaseLabel: "2400선 이탈",
    signal: "회복의 숨 고르기",
    title: "2024년 재하락",
    summary: "2024년 말 코스피는 2399.49로 내려오며 2400선을 지키지 못했습니다.",
    detail: "실적과 정책 기대가 엇갈리면서 시장은 다시 방어적인 위치로 이동했습니다. 이 지점이 2025년 급등 전의 낮은 출발선이 됐습니다."
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
    detail: "2024년 말 2399.49에서 2025년 말 4214.17까지의 이동은 차트의 기울기를 완전히 바꿔놓았습니다. 2026년 랠리의 전주곡이었습니다."
  },
  {
    id: "six-thousand",
    year: 2026.15,
    date: "2026.02.25",
    index: 6083.86,
    phase: "growth",
    phaseLabel: "첫 6000",
    signal: "가속 구간",
    title: "6000선 돌파",
    summary: "2026년 2월 코스피는 6000선을 넘어서며 상승 속도를 한 단계 더 높였습니다.",
    detail: "이 구간부터 차트는 완만한 우상향이 아니라 가속 곡선에 가까워집니다. 시장은 한국 대형주의 재평가와 유동성 기대를 빠르게 반영했습니다."
  },
  {
    id: "record-close-2026",
    year: 2026.366,
    date: "2026.05.14",
    index: 7981.41,
    phase: "growth",
    phaseLabel: "종가 고점",
    signal: "8000선 직전의 고도",
    title: "역대 최고 종가 7981.41",
    summary: "2026년 5월 14일 코스피는 7981.41로 역대 최고 종가를 기록했습니다.",
    detail: "장기 차트에서 가장 가파른 구간입니다. 시장은 8000선이라는 새로운 심리적 가격을 눈앞에 두고 있었습니다."
  },
  {
    id: "intraday-8000",
    year: 2026.368,
    date: "2026.05.15 장중",
    index: 8046.78,
    phase: "growth",
    phaseLabel: "장중 8000",
    signal: "넘어섰지만 머물지 못한 선",
    title: "장중 8046.78",
    summary: "2026년 5월 15일 코스피는 장중 8046.78까지 오르며 8000선을 넘어섰습니다.",
    detail: "긴 상승의 정점처럼 보였지만, 그날의 결말은 달랐습니다. 차트는 같은 날짜 안에서 고점과 급락을 함께 기록하게 됐습니다."
  },
  {
    id: "latest-2026",
    year: 2026.371,
    date: "2026.05.15 종가",
    index: 7493.18,
    phase: "crisis",
    phaseLabel: "6.12% 급락",
    signal: "랠리의 끝이 아니라 변동성의 시작",
    title: "2026년 5월 15일 7493.18",
    summary: "8000선을 장중 돌파한 바로 그날, 코스피는 6.12% 하락한 7493.18로 마감했습니다.",
    detail: "2026년 5월 15일은 단순한 하락일이 아니라 과열된 상승장이 얼마나 빠르게 변동성으로 바뀔 수 있는지 보여준 장면입니다. 이 웹사이트의 데이터 기준점입니다."
  }
];

const chart = document.querySelector("#kospi-chart");
const chartScroll = document.querySelector("#chart-scroll");
const timeline = document.querySelector("#timeline");
const tooltip = document.querySelector("#chart-tooltip");
const signalConsole = document.querySelector(".signal-console");
const detailSignal = document.querySelector("#detail-signal");
const detailTitle = document.querySelector("#detail-title");
const detailDate = document.querySelector("#detail-date");
const detailCopy = document.querySelector("#detail-copy");
const detailIndex = document.querySelector("#detail-index");
const detailPhase = document.querySelector("#detail-phase");
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
const filterButtons = document.querySelectorAll(".nav-chip");
const progressBar = document.querySelector("#reading-progress");
const loader = document.querySelector("#loader");
const loaderCount = document.querySelector("#loader-count");
const chapterIndicator = document.querySelector("#chapter-indicator");
const dataNote = document.querySelector(".data-note");

let selectedId = "base";
let currentFilter = "all";
let pointPositions = new Map();
const chartSize = { width: 3600, height: 860 };
const chartYears = { min: 1980, max: 2026.45 };
let isChartDragging = false;
let chartDragStartX = 0;
let chartDragStartLeft = 0;
let suppressChartSyncUntil = 0;
let lastChartScrollLeft = -1;

const modeTargets = {
  all: "base",
  crisis: "latest-2026",
  recovery: "rate-cut-hope",
  growth: "intraday-8000"
};

const modeLabels = {
  all: "전체 흐름 · 2026.05.15 기준",
  crisis: "위기 구간 · 급락 신호 강조",
  recovery: "회복 구간 · 반등 신호 강조",
  growth: "성장 구간 · 랠리 신호 강조"
};

function formatIndex(value) {
  return Math.round(value).toLocaleString("ko-KR");
}

function getSelectedEvent() {
  return events.find((event) => event.id === selectedId) || events[0];
}

function setSelected(id, shouldScroll = false, shouldChartScroll = true) {
  if (selectedId === id && !shouldScroll && !shouldChartScroll) return;
  selectedId = id;
  const selected = getSelectedEvent();

  detailSignal.textContent = selected.signal;
  detailTitle.textContent = selected.title;
  detailDate.textContent = selected.date;
  detailCopy.textContent = selected.detail;
  detailIndex.textContent = formatIndex(selected.index);
  detailPhase.textContent = selected.phaseLabel;
  updateChartMoment(selected);
  document.body.dataset.phase = selected.phase;

  document.querySelectorAll(".timeline-card").forEach((card) => {
    card.classList.toggle("is-selected", card.dataset.id === id);
  });

  chart.querySelectorAll(".chart-point").forEach((point) => {
    point.classList.toggle("is-selected", point.dataset.id === id);
  });

  chart.querySelectorAll(".event-label").forEach((label) => {
    label.classList.toggle("is-selected", label.dataset.id === id);
  });

  updateCursorLine(id);

  if (shouldChartScroll) {
    scrollChartTo(id);
  }

  if (shouldScroll) {
    scrollTimelineTo(id);
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

function revealPoint(point, shouldScroll = false) {
  if (!point) return;
  if (currentFilter !== "all" && currentFilter !== point.phase) {
    applyFilter("all");
  }
  setSelected(point.id, shouldScroll, false);
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
  chartMomentTitle.textContent = event.title;
  chartMomentIndex.textContent = `${formatIndex(event.index)} · ${event.phaseLabel}`;
  chartMomentSummary.textContent = event.summary;
}

function updateModal(event) {
  modalDate.textContent = event.date;
  modalSignal.textContent = event.signal;
  modalTitle.textContent = event.title;
  modalCopy.textContent = event.detail;
  modalIndex.textContent = formatIndex(event.index);
  modalPhase.textContent = event.phaseLabel;
}

function openMomentModal(id = selectedId) {
  const event = events.find((item) => item.id === id) || getSelectedEvent();
  updateModal(event);
  momentModal.hidden = false;
  modalClose.focus();
}

function closeMomentModal() {
  momentModal.hidden = true;
}

function scrollChartTo(id) {
  const point = pointPositions.get(id);
  if (!point || !chartScroll) return;
  const nextLeft = Math.max(0, point.x - chartScroll.clientWidth * 0.5);
  suppressChartSyncUntil = performance.now() + 1400;
  if (typeof chartScroll.scrollTo === "function") {
    chartScroll.scrollTo({ left: nextLeft, behavior: "smooth" });
  } else {
    chartScroll.scrollLeft = nextLeft;
  }
}

function resetChartToStart() {
  if (!chartScroll) return;
  suppressChartSyncUntil = performance.now() + 900;
  chartScroll.scrollLeft = 0;
  lastChartScrollLeft = 0;
  setSelected("base", false, false);
  hideSignalConsole();
}

function scrollTimelineTo(id) {
  const card = document.querySelector(`[data-id="${id}"]`);
  if (!card || !timeline) return;
  const nextTop = Math.max(0, card.offsetTop - timeline.clientHeight * 0.5 + card.clientHeight * 0.5);
  timeline.scrollTop = nextTop;
}

function applyFilter(filter) {
  currentFilter = filter;
  document.body.dataset.filterMode = filter;
  if (dataNote) dataNote.textContent = modeLabels[filter] || modeLabels.all;
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
  setSelected(targetId, false, true);
}

function renderTimeline() {
  if (!timeline) return;

  timeline.innerHTML = events.map((event) => `
    <button class="timeline-card" type="button" data-id="${event.id}" data-phase="${event.phase}">
      <span class="year">${Math.floor(event.year)}</span>
      <span class="card-body">
        <h3>${event.title}</h3>
        <p>${event.summary}</p>
      </span>
      <span class="phase ${event.phase}">${event.phaseLabel}</span>
    </button>
  `).join("");

  timeline.querySelectorAll(".timeline-card").forEach((card) => {
    card.addEventListener("click", () => {
      setSelected(card.dataset.id);
      openMomentModal(card.dataset.id);
    });
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const offset = ((event.clientX - rect.left) / rect.width - 0.5) * 12;
      card.style.setProperty("--tilt", `${offset}px`);
    });
    card.addEventListener("pointerleave", () => {
      card.style.removeProperty("--tilt");
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  }, { threshold: 0.18 });

  timeline.querySelectorAll(".timeline-card").forEach((card) => observer.observe(card));
}

function createSvgElement(name, attrs = {}) {
  const element = document.createElementNS("http://www.w3.org/2000/svg", name);
  Object.entries(attrs).forEach(([key, value]) => element.setAttribute(key, value));
  return element;
}

function renderChart() {
  const { width, height } = chartSize;
  const pad = { top: 28, right: 110, bottom: 42, left: 92 };
  const minYear = chartYears.min;
  const maxYear = chartYears.max;
  const maxIndex = 8400;
  const x = (year) => pad.left + ((year - minYear) / (maxYear - minYear)) * (width - pad.left - pad.right);
  const y = (value) => height - pad.bottom - (value / maxIndex) * (height - pad.top - pad.bottom);
  const points = events.map((event) => ({ ...event, x: x(event.year), y: y(event.index) }));
  const baseline = height - pad.bottom;

  pointPositions = new Map(points.map((point) => [point.id, point]));
  chart.innerHTML = "";
  chart.setAttribute("viewBox", `0 0 ${width} ${height}`);

  const title = createSvgElement("title", { id: "chart-title" });
  title.textContent = "코스피 1980년부터 2026년 5월 15일까지 장기 라인 차트";
  const desc = createSvgElement("desc", { id: "chart-desc" });
  desc.textContent = "1980년 기준 100에서 2026년 5월 15일 종가 7493.18까지 주요 위기와 회복 지점을 연결한 차트";
  const defs = createSvgElement("defs");
  const gradient = createSvgElement("linearGradient", {
    id: "chartFill",
    x1: "0",
    x2: "0",
    y1: "0",
    y2: "1"
  });
  gradient.appendChild(createSvgElement("stop", { offset: "0%", "stop-color": "#49a6ff", "stop-opacity": "0.28" }));
  gradient.appendChild(createSvgElement("stop", { offset: "100%", "stop-color": "#49a6ff", "stop-opacity": "0" }));
  defs.appendChild(gradient);
  chart.append(title, desc, defs);

  [0, 2000, 4000, 6000, 8000].forEach((tick) => {
    chart.appendChild(createSvgElement("line", {
      class: "grid-line",
      x1: pad.left,
      x2: width - pad.right,
      y1: y(tick),
      y2: y(tick)
    }));
    const label = createSvgElement("text", {
      class: "axis-label",
      x: 10,
      y: y(tick) + 5
    });
    label.textContent = formatIndex(tick);
    chart.appendChild(label);
  });

  [1980, 1990, 2000, 2010, 2020, 2026].forEach((tick) => {
    const label = createSvgElement("text", {
      class: "axis-label",
      x: x(tick),
      y: height - 12,
      "text-anchor": "middle"
    });
    label.textContent = tick;
    chart.appendChild(label);
  });

  const pathData = points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ");
  const areaData = `${pathData} L ${points.at(-1).x} ${baseline} L ${points[0].x} ${baseline} Z`;
  chart.appendChild(createSvgElement("path", { class: "area-fill", d: areaData }));
  chart.appendChild(createSvgElement("path", { class: "path-shadow", d: pathData }));
  chart.appendChild(createSvgElement("path", { class: "path-line", d: pathData }));
  chart.appendChild(createSvgElement("line", {
    class: "chart-cursor-line",
    x1: points[0].x,
    x2: points[0].x,
    y1: pad.top,
    y2: baseline
  }));

  points.forEach((point) => {
    const label = createSvgElement("text", {
      class: "event-label",
      "data-id": point.id,
      x: point.x,
      y: Math.max(18, point.y - 16),
      "text-anchor": "middle"
    });
    label.textContent = Math.floor(point.year);
    chart.appendChild(label);

    const dot = createSvgElement("circle", {
      class: `chart-point ${point.phase}`,
      "data-id": point.id,
      "data-phase": point.phase,
      cx: point.x,
      cy: point.y,
      r: 3.2,
      tabindex: 0,
      role: "button",
      "aria-label": `${point.title} ${point.date} ${formatIndex(point.index)}`
    });
    dot.style.color = point.phase === "crisis" ? "var(--red)" : point.phase === "recovery" ? "var(--green)" : "var(--blue)";
    dot.addEventListener("click", () => {
      revealPoint(point, true);
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
        revealPoint(point, true);
      }
    });
    chart.appendChild(dot);
  });
}

function showTooltip(point) {
  if (!point) return;
  const rect = chart.getBoundingClientRect();
  const scaleX = rect.width / chartSize.width;
  const scaleY = rect.height / chartSize.height;
  tooltip.hidden = false;
  tooltip.style.left = `${point.x * scaleX}px`;
  tooltip.style.top = `${point.y * scaleY}px`;
  tooltip.innerHTML = `<strong>${point.title}</strong><span>${point.date} · ${formatIndex(point.index)}</span>`;
}

function hideTooltip() {
  tooltip.hidden = true;
}

function updateProgress() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollMax = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollMax <= 0 ? 0 : scrollTop / scrollMax;
  progressBar.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
}

function updateChartScrollbar() {
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
    setSelected(nearest.id, false, false);
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
}

function watchChartPosition() {
  if (chartScroll && chartScroll.scrollLeft !== lastChartScrollLeft) {
    lastChartScrollLeft = chartScroll.scrollLeft;
    updateChartScrollbar();
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

function runLoader() {
  let value = 0;
  const timer = window.setInterval(() => {
    value = Math.min(100, value + Math.ceil(Math.random() * 14));
    loaderCount.textContent = `${value}%`;
    if (value >= 100) {
      window.clearInterval(timer);
      window.setTimeout(() => {
        document.body.classList.add("is-ready");
        window.setTimeout(() => {
          if (loader) loader.hidden = true;
        }, 650);
      }, 220);
    }
  }, 80);
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => applyFilter(button.dataset.filter));
});
modalClose.addEventListener("click", closeMomentModal);
modalScrim.addEventListener("click", closeMomentModal);
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !momentModal.hidden) {
    closeMomentModal();
  }
});

window.addEventListener("scroll", updateProgress, { passive: true });
chartScroll?.addEventListener("scroll", updateChartScrollbar, { passive: true });
window.addEventListener("pageshow", () => {
  window.requestAnimationFrame(resetChartToStart);
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

renderTimeline();
renderChart();
observeChapters();
enableChartGestures();
applyFilter("all");
resetChartToStart();
window.setTimeout(resetChartToStart, 120);
updateProgress();
updateChartScrollbar();
watchChartPosition();
runLoader();
