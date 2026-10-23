// Global App State
let APP_DATA = {};
let currentCategory = 'sports';
let currentIndex = 0;

// High-quality category photographic fallbacks (No initial/letter boxes)
const AVATAR_PLACEHOLDERS = {
  sports: 'https://images.unsplash.com/photo-1517649763962-0c623266010b?w=400&auto=format&fit=crop&q=80',
  film: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&auto=format&fit=crop&q=80',
  philosophy: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&auto=format&fit=crop&q=80'
};

// Direct, verified portrait overrides for key figures to guarantee accuracy
const DIRECT_PORTRAIT_MAP = {
  "Michael Jordan": "https://upload.wikimedia.org/wikipedia/commons/8/87/Michael_Jordan_in_2014.jpg",
  "Yoda": "https://upload.wikimedia.org/wikipedia/en/9/9b/Yoda_Empire_Strikes_Back.png"
};

// Comprehensive map for exact Wikipedia article titles
const WIKI_TITLE_MAP = {
  // --- SPORTS & ATHLETICS ---
  "Michael Jordan": "Michael Jordan",
  "Vince Lombardi": "Vince Lombardi",
  "Pelé": "Pelé",
  "Muhammad Ali": "Muhammad Ali",
  "Serena Williams": "Serena Williams",
  "Jerry Rice": "Jerry Rice",
  "Wayne Gretzky": "Wayne Gretzky",
  "Usain Bolt": "Usain Bolt",
  "Billie Jean King": "Billie Jean King",
  "Michael Phelps": "Michael Phelps",
  "Tim Notke": "Basketball",
  "Dean Karnazes": "Dean Karnazes",
  "Evander Holyfield": "Evander Holyfield",
  "Derek Jeter": "Derek Jeter",

  // --- FILM CHARACTERS (Map character -> exact page title) ---
  "Yoda": "Yoda_(Star_Wars)",
  "Benjamin Button": "The Curious Case of Benjamin Button (film)",
  "Gandalf": "Gandalf",
  "Rocky Balboa": "Rocky Balboa",
  "Dory": "Dory (Finding Nemo)",
  "Tyler Durden": "Tyler Durden",
  "Atticus Finch": "Atticus Finch",
  "Albus Dumbledore": "Albus Dumbledore",
  "Morpheus": "Morpheus (The Matrix)",
  "Andy Dufresne": "The Shawshank Redemption",
  "Walter Mitty": "The Secret Life of Walter Mitty",
  "Rafiki": "Rafiki",
  "John Keating": "Dead Poets Society",
  "Chris Gardner": "Chris Gardner",
  "Maximus Decimus Meridius": "Maximus Decimus Meridius",

  // --- PHILOSOPHY & MIND ---
  "Aristotle": "Aristotle",
  "Friedrich Nietzsche": "Friedrich Nietzsche",
  "Socrates": "Socrates",
  "Marcus Aurelius": "Marcus Aurelius",
  "Confucius": "Confucius",
  "Epictetus": "Epictetus",
  "Seneca the Younger": "Seneca the Younger",
  "Lao Tzu": "Laozi",
  "Gautama Buddha": "Gautama Buddha",
  "René Descartes": "René Descartes",
  "Immanuel Kant": "Immanuel Kant",
  "Søren Kierkegaard": "Søren Kierkegaard"
};

// In-memory cache for Wikipedia image lookups
const imageCache = {};

/**
 * Cleans author names (e.g. "Yoda (Jedi Master)" -> "Yoda")
 */
function cleanAuthorName(name) {
  if (!name) return '';
  return name.replace(/\(.*\)/, '').trim();
}

/**
 * Dynamically retrieves portrait images from Direct Maps or Wikipedia Open API.
 */
async function getAuthorImage(item) {
  if (item && item.image) return item.image;
  if (!item || !item.author) return AVATAR_PLACEHOLDERS[currentCategory];

  const authorName = item.author;
  const searchName = cleanAuthorName(authorName);

  // Check direct high-fidelity overrides first
  if (DIRECT_PORTRAIT_MAP[searchName]) {
    return DIRECT_PORTRAIT_MAP[searchName];
  }

  const wikiTarget = WIKI_TITLE_MAP[searchName] || searchName;

  if (imageCache[wikiTarget]) {
    return imageCache[wikiTarget];
  }

  // 1. Primary Wikipedia Direct Image Fetch
  try {
    const wikiUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(wikiTarget)}&prop=pageimages&format=json&pithumbsize=500&origin=*`;
    const response = await fetch(wikiUrl);
    const data = await response.json();

    if (data && data.query && data.query.pages) {
      const pages = data.query.pages;
      const pageId = Object.keys(pages)[0];

      if (pageId && pageId !== "-1" && pages[pageId].thumbnail) {
        const imageUrl = pages[pageId].thumbnail.source;
        imageCache[wikiTarget] = imageUrl;
        return imageUrl;
      }
    }
  } catch (err) {
    console.warn(`Wikipedia pageimage fetch failed for ${wikiTarget}:`, err);
  }

  // 2. Secondary Wikipedia Search API Fallback
  try {
    const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(searchName)}&gsrlimit=1&prop=pageimages&pithumbsize=500&format=json&origin=*`;
    const searchResp = await fetch(searchUrl);
    const searchData = await searchResp.json();

    if (searchData && searchData.query && searchData.query.pages) {
      const pages = searchData.query.pages;
      const firstPageId = Object.keys(pages)[0];
      if (pages[firstPageId].thumbnail) {
        const imageUrl = pages[firstPageId].thumbnail.source;
        imageCache[wikiTarget] = imageUrl;
        return imageUrl;
      }
    }
  } catch (err) {
    console.warn(`Wikipedia search fallback failed for ${searchName}:`, err);
  }

  // Return thematic photographic fallback if API calls yield no image
  return AVATAR_PLACEHOLDERS[currentCategory];
}

// Fetch JSON data asynchronously from external files
async function initApp() {
  try {
    const [sportsRes, filmRes, philosophyRes] = await Promise.all([
      fetch('./sports.json'),
      fetch('./film.json'),
      fetch('./philosophy.json')
    ]);

    const sports = await sportsRes.json();
    const film = await filmRes.json();
    const philosophy = await philosophyRes.json();

    APP_DATA = { sports, film, philosophy };

    setupEventListeners();
    await renderCurrentCard();
  } catch (error) {
    console.error('Error loading JSON datasets:', error);
    const quoteEl = document.getElementById('quoteText');
    if (quoteEl) quoteEl.textContent = 'Unable to load datasets. Please check that sports.json, film.json, and philosophy.json exist in your folder.';
  }
}

function setupEventListeners() {
  // Category Tab switching
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');

      const cat = e.target.getAttribute('data-category');
      switchCategory(cat);
    });
  });

  // Discover Next Spark Button
  const genBtn = document.getElementById('generateBtn');
  if (genBtn) genBtn.addEventListener('click', nextSpark);

  // Toggle Insight Accordion
  const insightToggle = document.getElementById('insightToggle');
  if (insightToggle) {
    insightToggle.addEventListener('click', () => {
      const insightBox = document.getElementById('insightBox');
      const toggleIcon = document.getElementById('toggleIcon');
      const isHidden = insightBox.classList.contains('hidden');

      if (isHidden) {
        insightBox.classList.remove('hidden');
        insightToggle.setAttribute('aria-expanded', 'true');
        if (toggleIcon) toggleIcon.textContent = '▲ Hide';
      } else {
        insightBox.classList.add('hidden');
        insightToggle.setAttribute('aria-expanded', 'false');
        if (toggleIcon) toggleIcon.textContent = '▼ Reveal';
      }
    });
  }

  // Modal Controls ("Learn More About This Mind")
  const exploreBtn = document.getElementById('exploreBtn');
  const closeModalBtn = document.getElementById('closeModal');
  const backBtn = document.getElementById('backBtn');

  if (exploreBtn) exploreBtn.addEventListener('click', openModal);
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (backBtn) backBtn.addEventListener('click', closeModal);

  // Close modal when clicking dark backdrop
  const modal = document.getElementById('detailModal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }
}

function switchCategory(cat) {
  currentCategory = cat;
  currentIndex = 0;

  // Update Body & Card Theme Classes
  const bgLayer = document.getElementById('bgLayer');
  if (bgLayer) bgLayer.className = `bg-layer bg-${cat}`;

  const displayCard = document.getElementById('displayCard');
  if (displayCard) displayCard.className = `card theme-${cat}`;

  const genBtn = document.getElementById('generateBtn');
  if (genBtn) {
    genBtn.className = `generate-btn theme-${cat}`;
    const titleCategory = cat.charAt(0).toUpperCase() + cat.slice(1);
    genBtn.textContent = `⚡ Discover ${titleCategory} Spark`;
  }

  renderCurrentCard();
}

async function renderCurrentCard() {
  const data = APP_DATA[currentCategory];
  if (!data || !data.items || data.items.length === 0) return;

  const item = data.items[currentIndex];

  const quoteText = document.getElementById('quoteText');
  const quoteAuthor = document.getElementById('quoteAuthor');
  const categoryBadge = document.getElementById('categoryBadge');
  const leagueBadge = document.getElementById('leagueBadge');
  const insightText = document.getElementById('insightText');
  const factText = document.getElementById('factText');

  if (quoteText) quoteText.textContent = `"${item.quote}"`;
  if (quoteAuthor) quoteAuthor.textContent = `\u2014 ${item.author}`;
  if (categoryBadge) categoryBadge.textContent = data.badge || currentCategory;
  if (leagueBadge) leagueBadge.textContent = item.role || '';

  if (insightText) insightText.textContent = item.deeperInsight || 'No additional insights available.';
  if (factText) factText.textContent = item.historicalContext || 'No historical facts available.';

  // Render Image
  const avatar = document.getElementById('authorAvatar');
  if (avatar) {
    const imageUrl = await getAuthorImage(item);
    avatar.src = imageUrl;
    avatar.alt = item.author;

    avatar.onerror = function() {
      this.onerror = null;
      this.src = AVATAR_PLACEHOLDERS[currentCategory];
    };
  }

  // Reset insight toggle state
  const insightBox = document.getElementById('insightBox');
  const toggleIcon = document.getElementById('toggleIcon');
  if (insightBox) insightBox.classList.add('hidden');
  if (toggleIcon) toggleIcon.textContent = '▼ Reveal';
}

function nextSpark() {
  const items = APP_DATA[currentCategory].items;
  if (!items || items.length === 0) return;
  currentIndex = (currentIndex + 1) % items.length;
  renderCurrentCard();
}

async function openModal() {
  const data = APP_DATA[currentCategory];
  if (!data || !data.items) return;
  const item = data.items[currentIndex];
  if (!item) return;

  const modalName = document.getElementById('modalName');
  const modalRole = document.getElementById('modalRole');
  const modalBadge = document.getElementById('modalBadge');
  const modalImg = document.getElementById('modalImg');
  const modalBeliefs = document.getElementById('modalBeliefs');
  const modalAchievements = document.getElementById('modalAchievements');
  const modalTrivia = document.getElementById('modalTrivia');

  if (modalName) modalName.textContent = item.author;
  if (modalRole) modalRole.textContent = item.role || '';
  if (modalBadge) modalBadge.textContent = data.badge || currentCategory;

  if (modalBeliefs) modalBeliefs.textContent = item.deeperInsight || 'Core mindset focused on growth, resilience, and discipline.';
  if (modalAchievements) modalAchievements.textContent = item.historicalContext || 'Renowned contributor in their field.';
  if (modalTrivia) modalTrivia.textContent = `Historical Context & Significance: ${item.historicalContext || 'N/A'}`;

  if (modalImg) {
    modalImg.src = await getAuthorImage(item);
    modalImg.alt = item.author;
    modalImg.onerror = function() {
      this.onerror = null;
      modalImg.src = AVATAR_PLACEHOLDERS[currentCategory];
    };
  }

  const modal = document.getElementById('detailModal');
  if (modal) modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  const modal = document.getElementById('detailModal');
  if (modal) modal.setAttribute('aria-hidden', 'true');
}

// Initialize on DOM Ready
window.addEventListener('DOMContentLoaded', initApp);
