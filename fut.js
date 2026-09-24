const API_BASE_URL = ""; 
const LIVE_POLL_MS = 60_000;
const GENERAL_POLL_MS = 10 * 60_000;

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const state = {
  league: "brasileirao",
  view: "overview",
  matchFilter: "all",
  playerStat: "goals",
  tableMode: "overall",
  playerSearch: "",
  clubSearch: "",
  data: structuredClone(LEAGUES),
  liveEnabled: Boolean(API_BASE_URL),
  lastRefresh: null,
};

function getLeague() {
  return state.data[state.league];
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("placar-theme", theme);
  $("#themeBtn").textContent = theme === "dark" ? "☀" : "☾";
}

function initTheme() {
  const saved = localStorage.getItem("placar-theme");
  setTheme(saved || "dark");
}

function zoneForPosition(league, position) {
  return league.zones.find(zone => position >= zone.from && position <= zone.to) || null;
}

function teamData(league, name) {
  const normalized = name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return league.standings.find(row => row[1].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(normalized.split(" ")[0])) || null;
}

function shortTeam(name) {
  const parts = name.split(/\s+/).filter(Boolean);
  return parts.length === 1 ? parts[0].slice(0, 3).toUpperCase() : parts.map(p => p[0]).join("").slice(0, 3).toUpperCase();
}

function crest(label, extra = "") {
  return `<span class="crest ${extra}" aria-hidden="true">${shortTeam(label)}</span>`;
}

function formatDateTime(date = new Date()) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit", month: "2-digit", year: "numeric",
    hour: "2-digit", minute: "2-digit"
  }).format(date);
}

function renderLeagueIdentity() {
  const league = getLeague();
  document.documentElement.dataset.league = league.theme;
  $("#leagueEyebrow").textContent = league.eyebrow;
  $("#heroText").textContent = league.heroText;
  $("#lastUpdated").textContent = league.updatedAt;
  document.title = `Placar — ${league.name}`;

  $$(".league-btn").forEach(btn => btn.classList.toggle("active", btn.dataset.league === state.league));
  $$("#mobileMenu [data-league]").forEach(btn => btn.classList.toggle("active", btn.dataset.league === state.league));
}

function renderMicroStats() {
  const league = getLeague();
  const totalGoals = league.standings.reduce((sum, row) => sum + row[6], 0);
  const leader = league.standings[0];
  const scorers = league.scorers[0];
  $("#microStats").innerHTML = `
    <div><strong>${league.standings.length}</strong><span>clubes</span></div>
    <div><strong>${leader[9]}</strong><span>pts · líder</span></div>
    <div><strong>${totalGoals}</strong><span>gols registrados</span></div>
    <div><strong>${scorers[2]}</strong><span>gols · artilheiro</span></div>
  `;
}

function renderSpotlight() {
  const league = getLeague();
  const top = league.scorers.slice(0, 3);
  const leader = top[0];
  $("#spotlightTitle").textContent = leader[0];
  $("#spotlightSub").textContent = `${leader[1]} · ${state.playerStat === "assists" ? "líder em assistências" : "artilheiro"}`;
  $("#spotlightNumber").textContent = state.playerStat === "assists" ? league.assists[0][2] : leader[2];
  $("#spotlightBars").innerHTML = top.map((item, index) => {
    const value = state.playerStat === "assists" ? (league.assists[index]?.[2] || 0) : item[2];
    const max = state.playerStat === "assists" ? league.assists[0][2] : leader[2];
    return `<div class="bar-row"><span>#${index + 1} ${item[0]}</span><div><i style="width:${Math.min(100, (value / max) * 100)}%"></i></div><b>${value}</b></div>`;
  }).join("");
}

function renderMatches() {
  const league = getLeague();
  const filtered = league.matches.filter(match => state.matchFilter === "all" || match.status === state.matchFilter);
  const grid = $("#matchesGrid");

  if (!filtered.length) {
    grid.innerHTML = `<div class="empty-state">Nenhum jogo encontrado nesse filtro.</div>`;
  } else {
    grid.innerHTML = filtered.map(match => {
      const isLive = match.status === "live";
      const statusText = isLive ? `AO VIVO · ${match.minute || 1}'` : match.status === "finished" ? "ENCERRADO" : `PRÓXIMO · ${match.time}`;
      return `
        <article class="match-card ${isLive ? "match-live" : ""}">
          <div class="match-meta">
            <span class="match-status ${isLive ? "live" : ""}">${isLive ? "● " : ""}${statusText}</span>
            <span>${match.date}</span>
          </div>
          <div class="match-teams">
            <div class="club-line">${crest(match.home, "home-crest")}<span>${match.home}</span></div>
            <div class="match-score ${isLive ? "score-live" : ""}">${Number.isInteger(match.hs) ? match.hs : "–"}<em>x</em>${Number.isInteger(match.as) ? match.as : "–"}</div>
            <div class="club-line right">${crest(match.away, "away-crest")}<span>${match.away}</span></div>
          </div>
          <div class="match-footer"><span>◉ ${match.venue}</span><span>${match.status === "finished" ? "Resultado final" : "Agenda"}</span></div>
        </article>`;
    }).join("");
  }

  const next = league.matches.find(m => m.status === "scheduled") || league.matches.find(m => m.status === "live");
  $("#nextGameBadge").textContent = next ? (next.status === "live" ? "AO VIVO" : next.date) : "—";
  $("#nextGame").innerHTML = next ? `
    <div class="next-game-teams">
      <div>${crest(next.home)}<strong>${next.home}</strong></div>
      <span>${next.status === "scheduled" ? next.time : `${next.hs} : ${next.as}`}</span>
      <div>${crest(next.away)}<strong>${next.away}</strong></div>
    </div>
    <small>${next.venue || "Estádio a confirmar"}</small>` : `<div class="empty-side">Agenda ainda não disponível.</div>`;
}

function sortTable(rows, mode) {
  if (mode === "attack") return [...rows].sort((a,b) => b[6] - a[6] || b[9] - a[9]);
  if (mode === "defense") return [...rows].sort((a,b) => a[7] - b[7] || b[9] - a[9]);
  if (mode === "form") return [...rows].sort((a,b) => formScore(b[10]) - formScore(a[10]) || b[9] - a[9]);
  return [...rows];
}

function formScore(form) {
  return [...form].reduce((sum, x) => sum + ({V: 3, W: 3, E: 1, D: 0, L: 0}[x] || 0), 0);
}

function renderStandings() {
  const league = getLeague();
  const rows = sortTable(league.standings, state.tableMode);
  const isRanking = state.tableMode !== "overall";

  $("#standingsTable").innerHTML = `
    <div class="table-scroll">
      <table class="standings-table">
        <thead><tr>
          <th>#</th><th>Clube</th><th>J</th><th>V</th><th>E</th><th>D</th><th>GP</th><th>GC</th><th>SG</th><th>PTS</th><th>Forma</th>
        </tr></thead>
        <tbody>
          ${rows.map((row, index) => {
            const originalPos = league.standings.indexOf(row) + 1;
            const zone = zoneForPosition(league, originalPos);
            return `<tr data-position="${originalPos}" class="${zone ? `zone-${zone.tone}` : ""}">
              <td data-label="#"><span class="pos">${isRanking ? index + 1 : originalPos}</span></td>
              <td data-label="Clube"><span class="team-cell">${crest(row[1])}<strong>${row[1]}</strong></span></td>
              <td data-label="J">${row[2]}</td><td data-label="V">${row[3]}</td><td data-label="E">${row[4]}</td><td data-label="D">${row[5]}</td>
              <td data-label="GP">${row[6]}</td><td data-label="GC">${row[7]}</td><td data-label="SG"><strong>${row[8] > 0 ? "+" : ""}${row[8]}</strong></td><td data-label="PTS"><strong class="points">${row[9]}</strong></td>
              <td data-label="Forma">${row[10] ? `<span class="form-dots">${[...row[10]].map(ch => `<i class="${ch === "V" || ch === "W" ? "win" : ch === "E" ? "draw" : "loss"}">${ch === "W" ? "V" : ch}</i>`).join("")}</span>` : `<span class="form-empty">—</span>`}</td>
            </tr>`;
          }).join("")}
        </tbody>
      </table>
    </div>`;

  $("#tableLegend").innerHTML = league.zones.map(zone => `<span><i class="legend-dot ${zone.tone}"></i>${zone.label}</span>`).join("");
}

function getPlayers() {
  const league = getLeague();
  return state.playerStat === "goals" ? league.scorers : league.assists;
}

function renderPodium() {
  const players = getPlayers().slice(0,3);
  const valueIndex = state.playerStat === "goals" ? 2 : 2;
  $("#podium").innerHTML = players.map((p, i) => `
    <article class="podium-card rank-${i + 1}">
      <span class="podium-rank">${i + 1}</span>
      <div class="avatar">${p[0].split(/\s+/).map(x => x[0]).join("").slice(0,2)}</div>
      <strong>${p[0]}</strong>
      <span>${p[1]}</span>
      <b>${p[valueIndex]} <small>${state.playerStat === "goals" ? "GOL" : "AST"}</small></b>
    </article>`).join("");
}

function renderPlayers() {
  const players = getPlayers().filter(p => p[0].toLowerCase().includes(state.playerSearch.toLowerCase()) || p[1].toLowerCase().includes(state.playerSearch.toLowerCase()));
  $("#playersTable").innerHTML = `
    <div class="table-scroll">
      <table class="players-table">
        <thead><tr><th>#</th><th>Jogador</th><th>Clube</th><th>${state.playerStat === "goals" ? "Gols" : "Assist."}</th><th>Jogos</th>${state.playerStat === "goals" ? "<th>AST</th>" : ""}</tr></thead>
        <tbody>
          ${players.map((p, i) => `<tr><td>${i + 1}</td><td><span class="player-cell"><span class="player-avatar">${p[0].slice(0,1)}</span><strong>${p[0]}</strong></span></td><td>${p[1]}</td><td><strong class="stat-number">${p[2]}</strong></td><td>${p[3]}</td>${state.playerStat === "goals" ? `<td>${p[4]}</td>` : ""}</tr>`).join("") || `<tr><td colspan="6" class="no-results">Nenhum jogador encontrado.</td></tr>`}
        </tbody>
      </table>
    </div>`;
}

function renderClubs() {
  const league = getLeague();
  const query = state.clubSearch.toLowerCase();
  const clubs = league.standings.filter(row => row[1].toLowerCase().includes(query));
  $("#clubsGrid").innerHTML = clubs.map((row, index) => `
    <button class="club-card" type="button" data-club="${row[1]}">
      ${crest(row[1])}
      <span><strong>${row[1]}</strong><small>${row[9]} pts · ${row[2]} jogos</small></span>
      <b>#${index + 1}</b>
    </button>`).join("") || `<div class="empty-state">Nenhum clube encontrado.</div>`;
}

function renderAll() {
  renderLeagueIdentity();
  renderMicroStats();
  renderSpotlight();
  renderMatches();
  renderStandings();
  renderPodium();
  renderPlayers();
  renderClubs();
}

async function syncFromAPI() {
  if (!API_BASE_URL) return false;
  const url = `${API_BASE_URL.replace(/\/$/, "")}/api/dashboard/${getLeague().apiLeagueId}`;
  setSyncState("Sincronizando…", "syncing");
  try {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const payload = await response.json();
    if (payload.league) {
      const existing = getLeague();
      existing.updatedAt = payload.updatedAt ? formatDateTime(new Date(payload.updatedAt)) : formatDateTime();
      if (Array.isArray(payload.standings)) existing.standings = payload.standings;
      if (Array.isArray(payload.scorers)) existing.scorers = payload.scorers;
      if (Array.isArray(payload.assists)) existing.assists = payload.assists;
      if (Array.isArray(payload.matches)) existing.matches = payload.matches;
    }
    state.lastRefresh = new Date();
    renderAll();
    setSyncState(`Atualizado às ${formatDateTime(state.lastRefresh)}`, "ok");
    return true;
  } catch (error) {
    console.warn("Falha na sincronização:", error);
    setSyncState("Snapshot local · API indisponível", "offline");
    return false;
  }
}

function setSyncState(text, tone) {
  $("#syncStatus").textContent = text;
  $(".live-status").classList.remove("is-syncing", "is-offline");
  if (tone === "syncing") $(".live-status").classList.add("is-syncing");
  if (tone === "offline") $(".live-status").classList.add("is-offline");
}

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function setLeague(leagueId) {
  if (!state.data[leagueId]) return;
  state.league = leagueId;
  state.matchFilter = "all";
  state.playerSearch = "";
  state.clubSearch = "";
  $("#playerSearch").value = "";
  $("#clubSearch").value = "";
  renderAll();
  syncFromAPI();
  scrollToId("conteudo");
  closeMenu();
}

function closeMenu() {
  const menu = $("#mobileMenu");
  const button = $("#menuBtn");
  menu.hidden = true;
  button.setAttribute("aria-expanded", "false");
}

function initEvents() {
  $$(`[data-league]`).forEach(btn => btn.addEventListener("click", () => setLeague(btn.dataset.league)));

  $$("[data-match-filter]").forEach(btn => btn.addEventListener("click", () => {
    state.matchFilter = btn.dataset.matchFilter;
    $$("[data-match-filter]").forEach(b => b.classList.toggle("active", b === btn));
    renderMatches();
  }));

  $$("[data-player-stat]").forEach(btn => btn.addEventListener("click", () => {
    state.playerStat = btn.dataset.playerStat;
    $$("[data-player-stat]").forEach(b => b.classList.toggle("active", b === btn));
    renderSpotlight(); renderPodium(); renderPlayers();
  }));

  $$(".seg-btn").forEach(btn => btn.addEventListener("click", () => {
    state.view = btn.dataset.view;
    $$(".seg-btn").forEach(b => b.classList.toggle("active", b === btn));
    const targets = { overview: "jogos", matches: "jogos", standings: "tabela", players: "estatisticas" };
    scrollToId(targets[state.view]);
  }));

  $("#tableMode").addEventListener("change", e => {
    state.tableMode = e.target.value;
    renderStandings();
  });

  $("#playerSearch").addEventListener("input", e => {
    state.playerSearch = e.target.value.trim();
    renderPlayers();
  });

  $("#clubSearch").addEventListener("input", e => {
    state.clubSearch = e.target.value.trim();
    renderClubs();
  });

  $("#themeBtn").addEventListener("click", () => {
    setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
  });

  $("#refreshBtn").addEventListener("click", async () => {
    const btn = $("#refreshBtn");
    btn.classList.add("spinning");
    await syncFromAPI();
    setTimeout(() => btn.classList.remove("spinning"), 500);
  });

  $("#menuBtn").addEventListener("click", () => {
    const menu = $("#mobileMenu");
    const next = menu.hidden;
    menu.hidden = !next;
    $("#menuBtn").setAttribute("aria-expanded", String(next));
  });

  $$("[data-scroll]").forEach(btn => btn.addEventListener("click", () => scrollToId(btn.dataset.scroll)));

  window.addEventListener("scroll", () => {
    $(".site-header").classList.toggle("scrolled", window.scrollY > 20);
  }, { passive: true });
}

function startPolling() {
  if (!API_BASE_URL) {
    setSyncState(`Snapshot local · ${SNAPSHOT_DATE}`, "offline");
    return;
  }
  syncFromAPI();
  window.setInterval(syncFromAPI, GENERAL_POLL_MS);
  window.setInterval(() => {
    
    const hasLive = getLeague().matches.some(match => match.status === "live");
    if (hasLive) syncFromAPI();
  }, LIVE_POLL_MS);
}

initTheme();
initEvents();
renderAll();
startPolling();
