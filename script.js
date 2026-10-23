let APP_DATA = {};
let currentCategory = 'sports';
let currentIndex = 0;

// Default avatar placeholder SVGs
const AVATAR_PLACEHOLDERS = {
  sports: 'https://images.unsplash.com/photo-1517649763962-0c623266010b?w=150&auto=format&fit=crop&q=80',
  film: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=150&auto=format&fit=crop&q=80',
  philosophy: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=150&auto=format&fit=crop&q=80'
};

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
    renderCurrentCard();
  } catch (error) {
    console.error('Error loading JSON datasets:', error);
    document.getElementById('quoteText').textContent = 'Unable to load wisdom datasets. Please check JSON files.';
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

function renderCurrentCard() {
  const data = APP_DATA[currentCategory];
  if (!data || !data.items || data.items.length === 0) return;

  const item = data.items[currentIndex];

  document.getElementById('quoteText').textContent = `"${item.quote}"`;
  document.getElementById('quoteAuthor').textContent = `— ${item.author}`;
  document.getElementById('categoryBadge').textContent = data.badge || currentCategory;
  document.getElementById('leagueBadge').textContent = item.role || '';
  
  document.getElementById('insightText').textContent = item.deeperInsight || 'No additional insights available.';
  document.getElementById('factText').textContent = item.historicalContext || 'No historical facts available.';

  // Image handling
  const avatar = document.getElementById('authorAvatar');
  avatar.src = item.image || AVATAR_PLACEHOLDERS[currentCategory];
  avatar.alt = item.author;

  // Reset insight toggle state
  document.getElementById('insightBox').classList.add('hidden');
  document.getElementById('toggleIcon').textContent = '▼ Reveal';
}

function nextSpark() {
  const items = APP_DATA[currentCategory].items;
  currentIndex = (currentIndex + 1) % items.length;
  renderCurrentCard();
}

function openModal() {
  const item = APP_DATA[currentCategory].items[currentIndex];
  if (!item) return;

  document.getElementById('modalName').textContent = item.author;
  document.getElementById('modalRole').textContent = item.role || '';
  document.getElementById('modalBadge').textContent = APP_DATA[currentCategory].badge || currentCategory;
  document.getElementById('modalImg').src = item.image || AVATAR_PLACEHOLDERS[currentCategory];

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
