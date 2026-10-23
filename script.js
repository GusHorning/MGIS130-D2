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

// Comprehensive portrait & poster map for sports legends, film characters, and philosophers
const CUSTOM_IMAGE_MAP = {
  // --- SPORTS & ATHLETICS ---
  "Michael Jordan": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Jordan_lip_ss.jpg/400px-Jordan_lip_ss.jpg",
  "Vince Lombardi": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Vince_Lombardi_1964.jpg/400px-Vince_Lombardi_1964.jpg",
  "Pelé": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Pele_by_John_Mathew_Smith_crop.jpg/400px-Pele_by_John_Mathew_Smith_crop.jpg",
  "Muhammad Ali": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Muhammad_Ali_NYWTS.jpg/400px-Muhammad_Ali_NYWTS.jpg",
  "Serena Williams": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Serena_Williams_at_2013_US_Open.jpg/400px-Serena_Williams_at_2013_US_Open.jpg",
  "Jerry Rice": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Jerry_Rice_2012.jpg/400px-Jerry_Rice_2012.jpg",
  "Wayne Gretzky": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Wayne_Gretzky_2006-02-18_torino_001.jpg/400px-Wayne_Gretzky_2006-02-18_torino_001.jpg",
  "Usain Bolt": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Usain_Bolt_after_4_x_100_m_relay_final_2013_World_Championships_in_Athletics.jpg/400px-Usain_Bolt_after_4_x_100_m_relay_final_2013_World_Championships_in_Athletics.jpg",
  "Billie Jean King": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Billie_Jean_King_2011.jpg/400px-Billie_Jean_King_2011.jpg",
  "Michael Phelps": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Michael_Phelps_Rio_2016.jpg/400px-Michael_Phelps_Rio_2016.jpg",
  "Tim Notke": "https://images.unsplash.com/photo-1519766304817-4f37bda74a29?w=400&auto=format&fit=crop&q=80",
  "Dean Karnazes": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Dean_Karnazes_2009.jpg/400px-Dean_Karnazes_2009.jpg",
  "Evander Holyfield": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Evander_Holyfield_2011.jpg/400px-Evander_Holyfield_2011.jpg",
  "Derek Jeter": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Derek_Jeter_2014.jpg/400px-Derek_Jeter_2014.jpg",

  // --- FILM & CINEMA CHARACTERS ---
  "Yoda": "https://images.unsplash.com/photo-1601814933824-fd0b574dd592?w=400&auto=format&fit=crop&q=80",
  "Benjamin Button": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&auto=format&fit=crop&q=80",
  "Gandalf": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&auto=format&fit=crop&q=80",
  "Rocky Balboa": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=400&auto=format&fit=crop&q=80",
  "Dory": "https://images.unsplash.com/photo-1524704685729-b8785d2d3ecb?w=400&auto=format&fit=crop&q=80",
  "Tyler Durden": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&auto=format&fit=crop&q=80",
  "Atticus Finch": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Gregory_Peck_in_To_Kill_a_Mockingbird_trailer.jpg/400px-Gregory_Peck_in_To_Kill_a_Mockingbird_trailer.jpg",
  "Albus Dumbledore": "https://images.unsplash.com/photo-1514539079130-25950c84af65?w=400&auto=format&fit=crop&q=80",
  "Morpheus": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&auto=format&fit=crop&q=80",
  "Andy Dufresne": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&auto=format&fit=crop&q=80",
  "Walter Mitty": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&auto=format&fit=crop&q=80",
  "Rafiki": "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=400&auto=format&fit=crop&q=80",
  "John Keating": "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&auto=format&fit=crop&q=80",
  "Chris Gardner": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Chris_Gardner_2011.jpg/400px-Chris_Gardner_2011.jpg",
  "Maximus Decimus Meridius": "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&auto=format&fit=crop&q=80",

  // --- PHILOSOPHY & MIND ---
  "Aristotle": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Aristotle_Altemps_Inv8575.jpg/400px-Aristotle_Altemps_Inv8575.jpg",
  "Friedrich Nietzsche": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Nietzsche1879.jpg/400px-Nietzsche1879.jpg",
  "Socrates": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Socrates_Louvre.jpg/400px-Socrates_Louvre.jpg",
  "Marcus Aurelius": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Marcus_Aurelius_Louvre_MR561.jpg/400px-Marcus_Aurelius_Louvre_MR561.jpg",
  "Confucius": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Confucius_Tang_Dynasty.jpg/400px-Confucius_Tang_Dynasty.jpg",
  "Epictetus": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Epictetus_frontispiece.jpg/400px-Epictetus_frontispiece.jpg",
  "Seneca the Younger": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Seneca_Louvre_Ma92.jpg/400px-Seneca_Louvre_Ma92.jpg",
  "Lao Tzu": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Laozi_Eremitage.jpg/400px-Laozi_Eremitage.jpg",
  "Gautama Buddha": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Buddha_in_Victoria_and_Albert_Museum.jpg/400px-Buddha_in_Victoria_and_Albert_Museum.jpg",
  "René Descartes": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg/400px-Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg",
  "Immanuel Kant": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Immanuel_Kant_3.jpg/400px-Immanuel_Kant_3.jpg",
  "Søren Kierkegaard": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Kierkegaard.jpg/400px-Kierkegaard.jpg"
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

  // Fallback avatar using modern UI Initials service with category styling
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
