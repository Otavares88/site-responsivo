// header encolhe ao rolar, ganhando espaço de tela no celular
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

// menu mobile
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// alternância manual de tema claro/escuro
const themeBtn = document.getElementById('themeBtn');
const root = document.documentElement;
themeBtn.addEventListener('click', () => {
  const isLight = root.getAttribute('data-theme') === 'light';
  root.setAttribute('data-theme', isLight ? 'dark' : 'light');
  themeBtn.textContent = isLight ? '🌙' : '☀️';
});

// cronômetro simulado da partida "ao vivo"
let minute = 63;
setInterval(() => {
  minute = minute < 90 ? minute + 1 : 45;
  document.getElementById('minuteCount').textContent = minute;
}, 8000);

// filtro de jogos por status
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.game-card');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    cards.forEach(card => {
      const show = f === 'all' || card.dataset.status === f;
      card.style.display = show ? '' : 'none';
    });
  });
});