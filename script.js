let APP_DATA = {};
let currentCategory = 'sports';
let currentIndex = 0;

// Category fallback image placeholders (Clean high-res themed defaults)
const AVATAR_PLACEHOLDERS = {
  sports: 'https://images.unsplash.com/photo-1517649763962-0c623266010b?w=300&auto=format&fit=crop&q=80',
  film: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300&auto=format&fit=crop&q=80',
  philosophy: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=300&auto=format&fit=crop&q=80'
};

// In-memory cache for Wikipedia lookups
const imageCache = {};

/**
 * Cleans author names (e.g. "Yoda (Jedi Master)" -> "Yoda") for clean Wikipedia API lookups.
 */
function cleanAuthorName(name) {
  if (!name) return '';
  return name.replace(/\(.*\)/, '').trim();
}

/**
 * Dynamically queries Wikipedia's API for free public-domain portraits.
 */
async function getAuthorImage(item) {
  if (item && item.image) return item.image;
  if (!item || !item.author) return AVATAR_PLACEHOLDERS[currentCategory];

  const authorName = item.author;
  const searchName = cleanAuthorName(authorName);

  if (imageCache[searchName]) {
    return imageCache[searchName];
  }

  try {
    const wikiUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(searchName)}&prop=pageimages&format=json&pithumbsize=400&origin=*`;
    const response = await fetch(wikiUrl);
    const data = await response.json();

    if (data && data.query && data.query.pages) {
      const pages = data.query.pages;
      const pageId = Object.keys(pages)[0];

      if (pageId && pageId !== "-1" && pages[pageId].thumbnail) {
        const imageUrl = pages[pageId].thumbnail.source;
        imageCache[searchName] = imageUrl;
        return imageUrl;
      }
    }
  } catch (err) {
    console.warn(`Could not fetch Wikipedia portrait for ${searchName}:`, err);
  }

  // Fallback: Custom UI Initials Avatar with clean theme colors
  const themeColors = {
    sports: { bg: '6366f1', color: 'ffffff' },
    film: { bg: 'ec4899', color: 'ffffff' },
    philosophy: { bg: '10b981', color: 'ffffff' }
  };
  const theme = themeColors[currentCategory] || themeColors.sports;
  const fallbackUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(searchName)}&background=${theme.bg}&color=${theme.color}&size=300&bold=true`;

  imageCache[searchName] = fallbackUrl;
  return fallbackUrl;
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
    document.getElementById('quoteText').textContent = 'Unable to load datasets. Please check your JSON files.';
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

  // Discover Next Button
  document.getElementById('generateBtn').addEventListener('click', nextSpark);

  // Toggle Insight Accordion
  const insightToggle = document.getElementById('insightToggle');
  insightToggle.addEventListener('click', () => {
    const insightBox = document.getElementById('insightBox');
    const isHidden = insightBox.classList.contains('hidden');

    if (isHidden) {
      insightBox.classList.remove('hidden');
      insightToggle.setAttribute('aria-expanded', 'true');
      document.getElementById('toggleIcon').textContent = '▲ Hide';
    } else {
      insightBox.classList.add('hidden');
      insightToggle.setAttribute('aria-expanded', 'false');
      document.getElementById('toggleIcon').textContent = '▼ Reveal';
    }
  });

  // Modal Controls
  document.getElementById('exploreBtn').addEventListener('click', openModal);
  document.getElementById('closeModal').addEventListener('click', closeModal);
  document.getElementById('backBtn').addEventListener('click', closeModal);
}

function switchCategory(cat) {
  currentCategory = cat;
  currentIndex = 0;

  // Update Body & Card Theme Classes
  document.getElementById('bgLayer').className = `bg-layer bg-${cat}`;

  const displayCard = document.getElementById('displayCard');
  displayCard.className = `card theme-${cat}`;

  const genBtn = document.getElementById('generateBtn');
  genBtn.className = `generate-btn theme-${cat}`;

  const titleCategory = cat.charAt(0).toUpperCase() + cat.slice(1);
  genBtn.textContent = `⚡ Discover ${titleCategory} Spark`;

  renderCurrentCard();
}

async function renderCurrentCard() {
  const data = APP_DATA[currentCategory];
  if (!data || !data.items || data.items.length === 0) return;

  const item = data.items[currentIndex];

  document.getElementById('quoteText').textContent = `"${item.quote}"`;
  document.getElementById('quoteAuthor').textContent = `— ${item.author}`;
  document.getElementById('categoryBadge').textContent = data.badge || currentCategory;
  document.getElementById('leagueBadge').textContent = item.role || '';

  document.getElementById('insightText').textContent = item.deeperInsight || 'No additional insights available.';
  document.getElementById('factText').textContent = item.historicalContext || 'No historical facts available.';

  // Fetch real image from Wikipedia or modern UI Initials fallback
  const avatar = document.getElementById('authorAvatar');
  const imageUrl = await getAuthorImage(item);
  avatar.src = imageUrl;
  avatar.alt = item.author;

  avatar.onerror = function() {
    this.onerror = null;
    const clean = cleanAuthorName(item.author);
    this.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(clean)}&background=6366f1&color=ffffff&size=300&bold=true`;
  };

  // Reset insight toggle state
  document.getElementById('insightBox').classList.add('hidden');
  document.getElementById('toggleIcon').textContent = '▼ Reveal';
}

function nextSpark() {
  const items = APP_DATA[currentCategory].items;
  currentIndex = (currentIndex + 1) % items.length;
  renderCurrentCard();
}

async function openModal() {
  const item = APP_DATA[currentCategory].items[currentIndex];
  if (!item) return;

  document.getElementById('modalName').textContent = item.author;
  document.getElementById('modalRole').textContent = item.role || '';
  document.getElementById('modalBadge').textContent = APP_DATA[currentCategory].badge || currentCategory;

  const modalImg = document.getElementById('modalImg');
  modalImg.src = await getAuthorImage(item);
  modalImg.onerror = function() {
    this.onerror = null;
    modalImg.src = AVATAR_PLACEHOLDERS[currentCategory];
  };

  document.getElementById('modalBeliefs').textContent = item.deeperInsight || 'Core mindset focused on growth and discipline.';
  document.getElementById('modalAchievements').textContent = item.historicalContext || 'Famous contributor in their field.';
  document.getElementById('modalTrivia').textContent = `Historical Context: ${item.historicalContext || 'N/A'}`;

  const modal = document.getElementById('detailModal');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  const modal = document.getElementById('detailModal');
  modal.setAttribute('aria-hidden', 'true');
}

// Initialize on DOM Ready
window.addEventListener('DOMContentLoaded', initApp);
