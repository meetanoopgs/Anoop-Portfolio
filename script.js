// ===== Mobile nav =====
const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// ===== Active link on scroll =====
const links = document.querySelectorAll('#site-nav a[href^="#"]');
const sections = [...links].map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    const id = '#' + e.target.id;
    const link = document.querySelector(`#site-nav a[href="${id}"]`);
    if (link && e.isIntersecting) {
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
sections.forEach(s => io.observe(s));

// ===== Dark mode toggle with localStorage =====
const themeBtn = document.getElementById('themeBtn');
const rootEl = document.documentElement;
const savedTheme = localStorage.getItem('theme');
if (savedTheme) rootEl.setAttribute('data-theme', savedTheme);
if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    const current = rootEl.getAttribute('data-theme') || 'light';
    const next = current === 'light' ? 'dark' : 'light';
    rootEl.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
}

// ===== Reveal on scroll =====
const reveals = document.querySelectorAll('.reveal');
const io2 = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.15 });
revels = Array.from(reveals).forEach(el => io2.observe(el));

// ===== Footer year =====
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// ===== Load posts from JSON =====
fetch('posts.json')
  .then(r => r.ok ? r.json() : [])
  .then(posts => {
    const list = document.getElementById('postList');
    if (!list || !Array.isArray(posts)) return;
    posts.sort((a,b) => (b.date || '').localeCompare(a.date || ''));
    posts.forEach(p => {
      const el = document.createElement('article');
      el.className = 'card';
      el.innerHTML = `
        <h3>${p.title}</h3>
        <p class="meta">${p.date} · ${p.tags?.join(', ') || ''}</p>
        <p>${p.summary || ''}</p>
        ${p.url ? `<a class="readmore" href="${p.url}">Read more →</a>` : ''}
      `.trim();
      list.appendChild(el);
    });
  })
  .catch(() => {/* ignore */});
