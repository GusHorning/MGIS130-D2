// Global App State
let APP_DATA = {};
let currentCategory = 'sports';
let currentIndex = 0;

// High quality fallback avatar placeholders per category
const AVATAR_PLACEHOLDERS = {
  sports: 'https://images.unsplash.com/photo-1517649763962-0c623266010b?w=400&auto=format&fit=crop&q=80',
  film: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&auto=format&fit=crop&q=80',
  philosophy: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&auto=format&fit=crop&q=80'
};

// Custom image overrides for specific figures / fictional film characters
const CUSTOM_IMAGE_MAP = {
  // Michael Jordan in Chicago Bulls Uniform
  "Michael Jordan": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Jordan_lip_bite.jpg/400px-Jordan_lip_bite.jpg",
  
  // Film Character mappings to real Wikipedia articles or iconic stills
  "Yoda": "https://upload.wikimedia.org/wikipedia/en/9/9b/Yoda_Empire_Strikes_Back.png",
  "Benjamin Button": "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Curious_case_of_benjamin_button.jpg/300px-Curious_case_of_benjamin_button.jpg",
  "Gandalf": "https://upload.wikimedia.org/wikipedia/en/e/e9/Gandalf6000.jpg",
  "Rocky Balboa": "https://upload.wikimedia.org/wikipedia/en/1/18/Rocky_balboa.jpeg",
  "Dory": "https://upload.wikimedia.org/wikipedia/en/2/22/Dory_Finding_Nemo.png",
  "Tyler Durden": "https://upload.wikimedia.org/wikipedia/en/c/c0/Tyler_Durden_Fight_Club.jpg",
  "Atticus Finch": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Gregory_Peck_in_To_Kill_a_Mockingbird_trailer.jpg/400px-Gregory_Peck_in_To_Kill_a_Mockingbird_trailer.jpg",
  "Albus Dumbledore": "https://upload.wikimedia.org/wikipedia/en/f/fe/Dumbledore_and_Harry_Potter.jpg",
  "Morpheus": "https://upload.wikimedia.org/wikipedia/en/a/ab/Morpheus_Matrix.png",
  "Andy Dufresne": "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
  "Walter Mitty": "https://upload.wikimedia.org/wikipedia/en/5/52/The_Secret_Life_of_Walter_Mitty_poster.jpg",
  "Rafiki": "https://upload.wikimedia.org/wikipedia/en/d/d2/Rafiki_Lion_King.jpg",
  "John Keating": "https://upload.wikimedia.org/wikipedia/en/4/49/Dead_poets_society.jpg",
  "Chris Gardner": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Chris_Gardner_2011.jpg/400px-Chris_Gardner_2011.jpg",
  "Maximus Decimus Meridius": "https://upload.wikimedia.org/wikipedia/en/8/8d/Gladiator_poster.jpg"
};

// In-memory cache for Wikipedia image lookups
const imageCache = {};

/**
 * Cleans author names (e.g. "Yoda (Jedi Master)" -> "Yoda") for clean Wikipedia API lookups.
 */
function cleanAuthorName(name) {
  if (!name) return '';
  return name.replace(/\(.*\)/, '').trim();
}

/**
 * Dynamically retrieves portrait images from custom maps or Wikipedia API.
 */
async function getAuthorImage(item) {
  if (item && item.image) return item.image;
  if (!item || !item.author) return AVATAR_PLACEHOLDERS[currentCategory];

  const authorName = item.author;
  const searchName = cleanAuthorName(authorName);

  // Check static custom image override map first
  if (CUSTOM_IMAGE_MAP[searchName]) {
    return CUSTOM_IMAGE_MAP[searchName];
  }

  if (imageCache[searchName]) {
    return imageCache[searchName];
  }

  // Wikipedia API Lookup for historical/sports figures
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

  // Fallback avatar using modern UI Initials service
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
  if (quoteAuthor) quoteAuthor.textContent = `— ${item.author}`;
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
