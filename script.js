/* =====================================================================
   Daily Sparks
   Quotes live in sports.json, film.json, and philosophy.json.
   To add a quote, copy any item there, give it a new unique `id`, and set
   `wiki` to the exact Wikipedia article title (used for the photo and the
   "Read more" link). `wiki` is optional. Use one quote per person.
   `mindset`, `achievements`, and `trivia` fill the "Learn more" popup;
   any that are missing are simply hidden.
   ===================================================================== */

/* ---------- Category settings ---------- */
const CATEGORIES = {
  sports:     { label: 'Sports',     emoji: '🏆', button: '⚡ Discover Sports Spark',     colors: ['#5f95aa', '#9c7587'] },
  film:       { label: 'Film',       emoji: '🎬', button: '🎬 Discover Film Spark',       colors: ['#a35d74', '#7d6fa6'] },
  philosophy: { label: 'Philosophy', emoji: '🏛️', button: '🏛️ Discover Philosophy Spark', colors: ['#5a9179', '#4f8aa0'] }
};

/* ---------- State ---------- */
const APP_DATA = {};          // { sports: {badge, items}, film: {...}, philosophy: {...} }
const ITEM_INDEX = {};        // id -> { cat, item }
const lastId = {};            // last quote shown per category
const bags = {};              // shuffled quotes not yet shown, per category
const photoCache = {};
let currentCategory = 'sports';
let activeItem = null;
let savedFilter = 'all';
let lastTrigger = null;

/* ---------- Storage (guarded: it can be blocked in private mode) ---------- */
const STORE = { favorites: 'dailySparks.favorites', onboarded: 'dailySparks.onboarded' };

function readStore(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw === null ? fallback : JSON.parse(raw);
  } catch (e) { return fallback; }
}
function writeStore(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* keep working in memory */ }
}

let favorites = readStore(STORE.favorites, []);   // array of quote ids
if (!Array.isArray(favorites)) favorites = [];

/* ---------- DOM ---------- */
const $ = id => document.getElementById(id);
const DOM = {
  bg: $('bgLayer'), btn: $('generateBtn'), card: $('displayCard'),
  badge: $('categoryBadge'), league: $('leagueBadge'),
  avatar: $('authorAvatar'), blur: $('mediaBlur'), favBtn: $('favBtn'),
  quote: $('quoteText'), author: $('quoteAuthor'),
  insightBox: $('insightBox'), insightBtn: $('insightToggle'), toggleIcon: $('toggleIcon'),
  insight: $('insightText'), fact: $('factText'),
  tabs: document.querySelectorAll('.tab-btn'),
  savedBtn: $('savedBtn'), savedCount: $('savedCount'), helpBtn: $('helpBtn'), live: $('liveStatus'),
  modal: $('detailModal'), modalBadge: $('modalBadge'), modalImg: $('modalImg'),
  modalName: $('modalName'), modalRole: $('modalRole'),
  modalLink: $('modalLink'),
  modalSections: [['secMindset', 'modalMindset', 'mindset'], ['secAchievements', 'modalAchievements', 'achievements'], ['secTrivia', 'modalTrivia', 'trivia']]
    .map(([sec, p, field]) => ({ sec: $(sec), p: $(p), field })),
  savedModal: $('savedModal'), savedList: $('savedList'), chips: document.querySelectorAll('.filter-chip'),
  tour: $('tourModal'), tourIcon: $('tourIcon'), tourStep: $('tourStep'), tourTitle: $('tourTitle'),
  tourText: $('tourText'), tourDots: $('tourDots'), tourBack: $('tourBack'), tourNext: $('tourNext')
};

function el(tag, className, text) {
  const n = document.createElement(tag);
  if (className) n.className = className;
  if (text !== undefined) n.textContent = text;
  return n;
}
function announce(msg) { DOM.live.textContent = ''; DOM.live.textContent = msg; }

/* =====================================================================
   DATA LOADING
   ===================================================================== */
async function loadData() {
  const names = Object.keys(CATEGORIES);
  const results = await Promise.all(names.map(async name => {
    // no-cache makes the browser re-check the file instead of reusing a stale copy
    const res = await fetch(`./${name}.json`, { cache: 'no-cache' });
    if (!res.ok) throw new Error(`${name}.json returned HTTP ${res.status}`);
    return res.json();
  }));
  names.forEach((name, i) => {
    APP_DATA[name] = results[i];
    lastId[name] = null;
    bags[name] = [];
    results[i].items.forEach(item => { ITEM_INDEX[item.id] = { cat: name, item }; });
  });
}

function showLoadError(err) {
  console.error('Could not load quote data:', err);
  const onFile = location.protocol === 'file:';
  DOM.quote.textContent = onFile
    ? 'Browsers block JSON files when a page is opened straight from disk. Run a small local server in this folder (for example: python3 -m http.server) and open http://localhost:8000 instead.'
    : 'Could not load sports.json, film.json, or philosophy.json. Check that all three files sit next to index.html.';
  DOM.author.textContent = '';
}

/* =====================================================================
   PHOTOS
   A soft illustrated portrait shows instantly; the real Wikipedia photo
   replaces it when it loads.
   ===================================================================== */
function fallbackPortrait(item, cat) {
  const [c1, c2] = CATEGORIES[cat].colors;
  const initials = item.author.split(/[\s—(]+/).filter(w => /^\p{Lu}/u.test(w)).slice(0, 2).map(w => w[0]).join('');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs><rect width="400" height="300" fill="url(#g)"/><circle cx="320" cy="60" r="90" fill="#fff" opacity=".15"/><circle cx="70" cy="260" r="110" fill="#fff" opacity=".12"/><text x="200" y="185" font-family="Georgia,serif" font-size="120" font-weight="700" fill="#fff" text-anchor="middle">${initials}</text><text x="200" y="250" font-family="sans-serif" font-size="24" fill="#fff" text-anchor="middle" opacity=".95">${CATEGORIES[cat].emoji}</text></svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

async function getPhotoUrl(wiki) {
  if (!wiki) return null;
  if (wiki in photoCache) return photoCache[wiki];
  try {
    const res = await fetch('https://en.wikipedia.org/api/rest_v1/page/summary/' + encodeURIComponent(wiki));
    const data = await res.json();
    const thumb = data.thumbnail && data.thumbnail.source;
    photoCache[wiki] = thumb ? thumb.replace(/\/\d+px-/, '/960px-') : null;
    photoCache[wiki + ':small'] = thumb || null;
  } catch (e) {
    photoCache[wiki] = null;
  }
  return photoCache[wiki];
}

function loadImage(url) {
  return new Promise(resolve => {
    if (!url) return resolve(false);
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
}

function setPhoto(src, alt) {
  DOM.avatar.src = src; DOM.avatar.alt = alt; DOM.blur.src = src;
  DOM.modalImg.src = src; DOM.modalImg.alt = alt;
}

async function showPhoto(item, cat) {
  setPhoto(fallbackPortrait(item, cat), item.author);
  let url = await getPhotoUrl(item.wiki);
  if (!(await loadImage(url))) {
    url = photoCache[item.wiki + ':small'];
    if (!(await loadImage(url))) return;
  }
  if (activeItem === item) setPhoto(url, item.author);
}

/* =====================================================================
   CARD DISPLAY
   ===================================================================== */
// Shuffle-bag: every quote is shown once before any repeats, and a new round
// never opens with the person who was just shown.
function refillBag(cat) {
  const items = [...APP_DATA[cat].items];
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  const last = ITEM_INDEX[lastId[cat]];
  if (last && items.length > 1 && items[0].author === last.item.author) {
    const k = items.findIndex(it => it.author !== last.item.author);
    if (k > 0) [items[0], items[k]] = [items[k], items[0]];
  }
  bags[cat] = items;
}

function pickItem(cat) {
  if (!bags[cat].length) refillBag(cat);
  return bags[cat].shift();
}

function setInsightOpen(open) {
  DOM.insightBox.classList.toggle('hidden', !open);
  DOM.insightBtn.setAttribute('aria-expanded', open);
  DOM.toggleIcon.textContent = open ? '▲ Hide' : '▼ Reveal';
}

function showItem(item, cat) {
  currentCategory = cat;
  activeItem = item;
  lastId[cat] = item.id;

  const meta = CATEGORIES[cat];
  const theme = `theme-${cat}`;

  DOM.tabs.forEach(t => t.classList.toggle('active', t.dataset.category === cat));
  DOM.bg.className = `bg-layer bg-${cat}`;
  DOM.card.className = `card ${theme}`;
  DOM.btn.className = `generate-btn ${theme}`;
  DOM.btn.textContent = meta.button;
  DOM.badge.textContent = APP_DATA[cat].badge || meta.label;
  DOM.league.textContent = item.role || '';
  DOM.league.hidden = !item.role;
  DOM.quote.textContent = `“${item.quote}”`;
  DOM.author.textContent = `— ${item.author}`;
  DOM.insight.textContent = item.deeperInsight || '';
  DOM.fact.textContent = item.historicalContext || '';
  setInsightOpen(false);
  updateFavUI();

  DOM.card.classList.remove('fade-in');
  void DOM.card.offsetWidth;
  DOM.card.classList.add('fade-in');

  showPhoto(item, cat);
}

const nextSpark = () => showItem(pickItem(currentCategory), currentCategory);
const selectCategory = cat => showItem(pickItem(cat), cat);

/* =====================================================================
   FAVORITES
   ===================================================================== */
const isFavorite = id => favorites.includes(id);

function toggleFavorite(id) {
  const i = favorites.indexOf(id);
  if (i === -1) favorites.push(id); else favorites.splice(i, 1);
  writeStore(STORE.favorites, favorites);
  return i === -1;
}

// Saved ids that no longer exist in the JSON files are skipped.
function savedEntries() {
  return favorites.map(id => ITEM_INDEX[id]).filter(Boolean);
}

function updateFavUI() {
  const saved = !!activeItem && isFavorite(activeItem.id);
  DOM.favBtn.setAttribute('aria-pressed', saved);
  DOM.favBtn.setAttribute('aria-label', saved ? 'Remove from favorites' : 'Save to favorites');
  DOM.favBtn.textContent = saved ? '♥' : '♡';
  DOM.savedCount.textContent = savedEntries().length;
}

function renderSaved() {
  const all = savedEntries().reverse();   // newest first
  const shown = savedFilter === 'all' ? all : all.filter(e => e.cat === savedFilter);
  DOM.savedList.replaceChildren();

  DOM.chips.forEach(c => {
    const on = c.dataset.filter === savedFilter;
    c.classList.toggle('active', on);
    c.setAttribute('aria-pressed', on);
  });

  if (!shown.length) {
    DOM.savedList.append(el('p', 'saved-empty', all.length
      ? 'No saved quotes in this category yet.'
      : 'Nothing saved yet. Tap the heart on any quote to keep it here.'));
    return;
  }

  shown.forEach(({ cat, item }) => {
    const row = el('article', `saved-item cat-${cat}`);
    row.append(el('p', 'saved-quote', `“${item.quote}”`), el('p', 'saved-author', `— ${item.author}`));

    const actions = el('div', 'saved-actions');
    const view = el('button', 'mini-btn', 'View on card');
    view.type = 'button';
    view.setAttribute('aria-label', `View the quote by ${item.author} on the card`);
    view.addEventListener('click', () => {
      closeOverlay(DOM.savedModal);
      showItem(item, cat);
    });

    const remove = el('button', 'mini-btn danger', 'Remove');
    remove.type = 'button';
    remove.setAttribute('aria-label', `Remove the quote by ${item.author} from favorites`);
    remove.addEventListener('click', () => {
      toggleFavorite(item.id);
      updateFavUI();
      renderSaved();
      announce('Removed from favorites.');
      (DOM.savedList.querySelector('button') || DOM.savedModal.querySelector('.close-modal-btn')).focus();
    });

    actions.append(view, remove);
    row.append(actions);
    DOM.savedList.append(row);
  });
}

/* =====================================================================
   OVERLAYS (detail, saved, onboarding)
   The CSS shows an overlay when it has the `active` class.
   ===================================================================== */
function openOverlay(overlay, focusEl) {
  lastTrigger = document.activeElement;
  overlay.classList.add('active');
  overlay.setAttribute('aria-hidden', 'false');
  (focusEl || overlay.querySelector('button')).focus();
}

function closeOverlay(overlay) {
  if (!overlay.classList.contains('active')) return;
  overlay.classList.remove('active');
  overlay.setAttribute('aria-hidden', 'true');
  const back = lastTrigger && lastTrigger !== document.body && document.contains(lastTrigger) ? lastTrigger : DOM.btn;
  back.focus();
}

function openDetailView() {
  if (!activeItem) return;
  DOM.modalBadge.textContent = APP_DATA[currentCategory].badge || CATEGORIES[currentCategory].label;
  DOM.modalName.textContent = activeItem.author;
  DOM.modalRole.textContent = activeItem.role || '';
  DOM.modalSections.forEach(({ sec, p, field }) => {
    const text = activeItem[field] || '';
    p.textContent = text;
    sec.hidden = !text;
  });
  DOM.modalLink.href = activeItem.wiki
    ? 'https://en.wikipedia.org/wiki/' + encodeURIComponent(activeItem.wiki)
    : 'https://en.wikipedia.org/w/index.php?search=' + encodeURIComponent(activeItem.author);
  openOverlay(DOM.modal, $('closeModal'));
}

function openSaved() {
  renderSaved();
  openOverlay(DOM.savedModal, $('closeSaved'));
}

/* =====================================================================
   ONBOARDING
   ===================================================================== */
const TOUR = [
  { icon: '👋', title: 'Welcome to Daily Sparks',
    text: 'One short quote at a time from athletes, films, and philosophers. Here is a 30-second tour.' },
  { icon: '🧭', title: 'Pick a category',
    text: 'Use the Sports, Film, and Philosophy tabs to switch topics. The colors change with you.' },
  { icon: '✨', title: 'Discover a spark',
    text: 'Press the big button for a new quote. Open Further Insight for the takeaway, or Learn more to read about the person behind it.' },
  { icon: '♥', title: 'Save your favorites',
    text: 'Tap the heart on a card to save it. Open Saved at the top to revisit, filter, or remove quotes. They stay on this device.' }
];
let tourStep = 0;

function renderTour() {
  const s = TOUR[tourStep];
  DOM.tourIcon.textContent = s.icon;
  DOM.tourStep.textContent = `Step ${tourStep + 1} of ${TOUR.length}`;
  DOM.tourTitle.textContent = s.title;
  DOM.tourText.textContent = s.text;
  DOM.tourBack.hidden = tourStep === 0;
  DOM.tourNext.textContent = tourStep === TOUR.length - 1 ? 'Get started' : 'Next';
  DOM.tourDots.replaceChildren(...TOUR.map((_, i) => el('span', i === tourStep ? 'dot active' : 'dot')));
}

function startTour() {
  tourStep = 0;
  renderTour();
  openOverlay(DOM.tour, DOM.tourNext);
}

function finishTour() {
  writeStore(STORE.onboarded, true);
  closeOverlay(DOM.tour);
}

/* =====================================================================
   EVENTS
   ===================================================================== */
function bindEvents() {
  DOM.tabs.forEach(t => t.addEventListener('click', () => selectCategory(t.dataset.category)));
  DOM.btn.addEventListener('click', nextSpark);
  DOM.insightBtn.addEventListener('click', () => setInsightOpen(DOM.insightBox.classList.contains('hidden')));

  DOM.favBtn.addEventListener('click', () => {
    if (!activeItem) return;
    const added = toggleFavorite(activeItem.id);
    updateFavUI();
    announce(added ? 'Saved to favorites.' : 'Removed from favorites.');
  });

  $('exploreBtn').addEventListener('click', openDetailView);
  $('closeModal').addEventListener('click', () => closeOverlay(DOM.modal));
  $('backBtn').addEventListener('click', () => closeOverlay(DOM.modal));

  DOM.savedBtn.addEventListener('click', openSaved);
  $('closeSaved').addEventListener('click', () => closeOverlay(DOM.savedModal));
  $('savedBack').addEventListener('click', () => closeOverlay(DOM.savedModal));
  DOM.chips.forEach(c => c.addEventListener('click', () => { savedFilter = c.dataset.filter; renderSaved(); }));

  DOM.helpBtn.addEventListener('click', startTour);
  DOM.tourNext.addEventListener('click', () => {
    if (tourStep === TOUR.length - 1) finishTour();
    else { tourStep++; renderTour(); }
  });
  DOM.tourBack.addEventListener('click', () => { if (tourStep > 0) { tourStep--; renderTour(); } });
  $('tourSkip').addEventListener('click', finishTour);

  // Click on the dim backdrop closes detail and saved overlays
  [DOM.modal, DOM.savedModal].forEach(o => o.addEventListener('click', e => { if (e.target === o) closeOverlay(o); }));

  document.addEventListener('keydown', e => {
    const open = document.querySelector('.detail-modal.active');
    if (!open) return;
    if (e.key === 'Escape') {
      if (open === DOM.tour) finishTour(); else closeOverlay(open);
    } else if (e.key === 'Tab') {
      // Keep keyboard focus inside the open dialog
      const focusable = [...open.querySelectorAll('button, a[href]')].filter(b => !b.hidden && !b.disabled);
      if (!focusable.length) return;
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
}

/* =====================================================================
   START
   ===================================================================== */
async function init() {
  bindEvents();
  try {
    await loadData();
  } catch (err) {
    showLoadError(err);
    return;
  }
  const total = Object.values(APP_DATA).reduce((n, c) => n + c.items.length, 0);
  const foot = document.querySelector('.app-footer');
  if (foot) foot.textContent += ` • ${total} quotes`;
  nextSpark();
  if (!readStore(STORE.onboarded, false)) startTour();
}

init();
