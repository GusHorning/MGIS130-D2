/* =====================================================================
   SECTION 1: DATA
   To add a quote, copy any item and change the fields.
   `wiki` is the exact Wikipedia article title; its lead image is the
   photo (person, character, or film poster). If it can't load, a bright
   illustrated portrait card appears instead.
   ===================================================================== */
const APP_DATA = {
  sports: {
    themeClass: 'theme-sports', badge: 'Sports & Athletics', button: '⚡ Discover Sports Spark', emoji: '🏆',
    colors: ['#0ea5e9', '#ff3d77'],
    items: [
      { quote: "I've missed more than 9,000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game-winning shot and missed. I've failed over and over again in my life. And that is why I succeed.",
        author: 'Michael Jordan', wiki: 'Michael_Jordan', tag: '🏀 NBA',
        insight: 'Failure is data, not a verdict. Jordan treats every miss as calibration for the next attempt.',
        fact: 'In the 1993 NBA Finals, Jordan averaged 41.0 points per game against the Phoenix Suns, the highest Finals average ever, to clinch his third straight title.',
        role: '6-Time NBA Champion & Hall of Famer',
        beliefs: 'A fierce competitive mindset, relentless practice, and turning doubt into focused execution.',
        ach: '6 championships, 6 Finals MVPs, 5 regular-season MVPs, and 10 scoring titles.',
        trivia: 'He was cut from his high school varsity team as a sophomore and kept that rejection as fuel.' },
      { quote: "It's not whether you get knocked down, it's whether you get up.",
        author: 'Vince Lombardi', wiki: 'Vince_Lombardi', tag: '🏈 NFL',
        insight: 'You cannot control the hit, only the response. Resilience is a decision made after impact.',
        fact: 'Lombardi coached the Green Bay Packers to victory in Super Bowl I (1967) and Super Bowl II (1968).',
        role: 'Legendary NFL Coach',
        beliefs: 'Discipline, flawless execution of fundamentals, and team over self.',
        ach: 'Five NFL championships in seven years (1961–67). The Super Bowl trophy is named for him.',
        trivia: 'He never had a losing season as an NFL head coach.' },
      { quote: 'The more difficult the victory, the greater the happiness in winning.',
        author: 'Pelé', wiki: 'Pelé', tag: '⚽ FIFA',
        insight: 'Effort gives a win its meaning. The struggle is what you end up being proud of.',
        fact: 'At 17, Pelé became the youngest player to win a World Cup (1958) and scored twice in the final against Sweden, a 5–2 win.',
        role: '3-Time World Cup Champion',
        beliefs: 'Joyful creativity, humility, and trusting teammates.',
        ach: 'The only player to win three World Cups (1958, 1962, 1970), with well over 1,000 career goals by his own count.',
        trivia: 'Popular accounts say a 1967 truce in the Nigerian Civil War let both sides watch him play.' },
      { quote: 'I hated every minute of training, but I said, "Don\'t quit. Suffer now and live the rest of your life as a champion."',
        author: 'Muhammad Ali', wiki: 'Muhammad_Ali', tag: '🥊 BOXING',
        insight: 'Short-term discomfort buys long-term identity. Decide who you want to be, then pay the toll.',
        fact: 'In 1964, a 22-year-old Ali upset Sonny Liston to win the world heavyweight title. In 1974 he regained it by beating George Foreman in Kinshasa, the "Rumble in the Jungle."',
        role: '3-Time World Heavyweight Champion',
        beliefs: 'Confidence as a weapon, conviction over comfort, and speaking your goals aloud.',
        ach: 'Olympic gold in 1960, three heavyweight championships, and a global humanitarian reputation.',
        trivia: 'He was stripped of his title in 1967 for refusing military induction, and returned to boxing after three years away.' },
      { quote: 'A champion is defined not by their wins but by how they can recover when they fall.',
        author: 'Serena Williams', wiki: 'Serena_Williams', tag: '🎾 TENNIS',
        insight: 'Comebacks reveal more than victories. Greatness is measured by recovery speed.',
        fact: 'Serena won 23 Grand Slam singles titles in the Open Era, including the 2017 Australian Open while roughly eight weeks pregnant.',
        role: '23-Time Grand Slam Singles Champion',
        beliefs: 'Fierce self-belief, reinvention, and using setbacks as motivation.',
        ach: 'Four Olympic gold medals and a former world No. 1 for 319 weeks.',
        trivia: 'She and her sister Venus were coached by their father, Richard, who wrote a plan for their careers before they were born.' }
    ]
  },
  film: {
    themeClass: 'theme-film', badge: 'Cinema & Drama', button: '🎬 Discover Film Spark', emoji: '🎬',
    colors: ['#ff2d75', '#8b5cf6'],
    items: [
      { quote: 'Do or do not. There is no try.',
        author: 'Yoda — The Empire Strikes Back', wiki: 'Yoda', tag: '🌌 SCI-FI',
        insight: 'A half-committed attempt leaves an exit open. Commitment is the difference between trying and doing.',
        fact: 'The line is spoken on Dagobah while Yoda trains Luke Skywalker. The film was released in 1980.',
        role: 'Jedi Master',
        beliefs: 'Calm, patience, and acting without fear or attachment.',
        ach: 'Trained generations of Jedi and became one of cinema’s most quoted mentors.',
        trivia: 'Puppeteer Frank Oz performed and voiced Yoda, and the design drew on Albert Einstein’s eyes for a look of wisdom.' },
      { quote: 'Our lives are defined by opportunities, even the ones we miss.',
        author: 'Benjamin Button — The Curious Case of Benjamin Button', wiki: 'The_Curious_Case_of_Benjamin_Button_(film)', tag: '🍿 DRAMA',
        insight: 'The paths you did not take still shape you. Regret and gratitude are two sides of the same attention.',
        fact: 'David Fincher’s 2008 film is loosely based on F. Scott Fitzgerald’s 1922 short story and earned 13 Oscar nominations.',
        role: 'Film Protagonist',
        beliefs: 'Time is unrepeatable, so meaning is found in the moments themselves.',
        ach: 'Won Oscars for Art Direction, Makeup, and Visual Effects.',
        trivia: 'Brad Pitt’s face was digitally reconstructed across the character’s many ages, a landmark in visual effects.' },
      { quote: 'All we have to decide is what to do with the time that is given to us.',
        author: 'Gandalf — The Fellowship of the Ring', wiki: 'Gandalf', tag: '⚔️ FANTASY',
        insight: 'You will never control the circumstances you inherit. You can only choose how to spend them.',
        fact: 'Gandalf says it to Frodo in the Mines of Moria in Peter Jackson’s 2001 film, echoing a passage in Tolkien’s novel.',
        role: 'Wizard of Middle-earth',
        beliefs: 'Small acts by ordinary people can change the world.',
        ach: 'Guided the Fellowship, rallied the free peoples, and defeated the Balrog.',
        trivia: 'Ian McKellen was nominated for a Best Supporting Actor Oscar for the role.' },
      { quote: "It ain't about how hard you hit. It's about how hard you can get hit and keep moving forward.",
        author: 'Rocky Balboa — Rocky Balboa', wiki: 'Rocky_Balboa', tag: '🥊 SPORTS DRAMA',
        insight: 'Durability beats power. What you absorb and keep moving through is what counts.',
        fact: 'The 2006 sixth film was written and directed by Sylvester Stallone, 30 years after the original Rocky won Best Picture.',
        role: 'Heavyweight Boxer',
        beliefs: 'Heart, persistence, and self-respect over trophies.',
        ach: 'Rose from a Philadelphia club fighter to world heavyweight champion.',
        trivia: 'Stallone has said he wrote the first Rocky screenplay in just a few days.' },
      { quote: 'Just keep swimming.',
        author: 'Dory — Finding Nemo', wiki: 'Dory_(Finding_Nemo)', tag: '🐠 ANIMATION',
        insight: 'When things feel overwhelming, shrink the goal to the next small motion and repeat it.',
        fact: 'Finding Nemo (2003) won the Academy Award for Best Animated Feature, and Ellen DeGeneres voiced Dory.',
        role: 'Blue Tang Fish',
        beliefs: 'Optimism, loyalty, and persistence despite forgetting.',
        ach: 'Headlined her own sequel, Finding Dory (2016), a huge box-office hit.',
        trivia: 'The role was written with DeGeneres in mind after Pixar saw her stand-up.' }
    ]
  },
  philosophy: {
    themeClass: 'theme-philosophy', badge: 'Philosophy & Mind', button: '🏛️ Discover Philosophy Spark', emoji: '🏛️',
    colors: ['#00c389', '#ffb800'],
    items: [
      { quote: 'We are what we repeatedly do. Excellence, then, is not an act, but a habit.',
        author: 'Aristotle (as summarized by Will Durant)', wiki: 'Aristotle', tag: '🏛️ ANCIENT GREECE',
        insight: 'Identity is built from small daily repetitions, not occasional highlights.',
        fact: 'Will Durant wrote this line in The Story of Philosophy (1926) as a summary of Aristotle’s argument in the Nicomachean Ethics (c. 350 BCE).',
        role: 'Greek Philosopher & Polymath',
        beliefs: 'Virtue ethics, the Golden Mean, and learning through observation.',
        ach: 'Founded the Lyceum, tutored Alexander the Great, and shaped logic, biology, and politics.',
        trivia: 'Many of his surviving works are thought to be lecture notes.' },
      { quote: 'He who has a why to live can bear almost any how.',
        author: 'Friedrich Nietzsche', wiki: 'Friedrich_Nietzsche', tag: '⚡ EXISTENTIALISM',
        insight: 'Purpose is a buffer against hardship. Find the reason, and the difficulty becomes tolerable.',
        fact: 'The aphorism appears in Twilight of the Idols, written in 1888 and published in 1889.',
        role: '19th-Century German Philosopher',
        beliefs: 'Self-overcoming, amor fati (love of fate), and creating your own values.',
        ach: 'Deeply influenced existentialism, psychology, and modern literature.',
        trivia: 'He took long daily walks and wrote much of Thus Spoke Zarathustra while hiking in the Swiss Alps and the Italian Riviera.' },
      { quote: 'The unexamined life is not worth living.',
        author: 'Socrates', wiki: 'Socrates', tag: '⚖️ CLASSICAL LOGIC',
        insight: 'Without reflection, we run on autopilot. Questioning your own life is how it becomes yours.',
        fact: 'In Plato’s Apology, Socrates says this at his 399 BCE trial, shortly before being sentenced to death.',
        role: 'Father of Western Philosophy',
        beliefs: 'Relentless questioning, intellectual humility, and wisdom over wealth.',
        ach: 'Pioneered the Socratic method and turned philosophy toward ethics.',
        trivia: 'He wrote nothing himself. We know him through Plato and Xenophon.' },
      { quote: 'The impediment to action advances action. What stands in the way becomes the way.',
        author: 'Marcus Aurelius — Meditations', wiki: 'Marcus_Aurelius', tag: '🏛️ STOICISM',
        insight: 'Obstacles are raw material. The thing blocking you can become the thing that trains you.',
        fact: 'Marcus Aurelius ruled Rome from 161 to 180 CE and wrote Meditations in Greek as private notes, partly during military campaigns.',
        role: 'Roman Emperor & Stoic Philosopher',
        beliefs: 'Control your judgments, accept what you cannot change, and act with duty.',
        ach: 'Last of the "Five Good Emperors" and author of a classic of Stoic thought.',
        trivia: 'Meditations was never meant for publication and is addressed to himself.' },
      { quote: 'It does not matter how slowly you go as long as you do not stop.',
        author: 'Confucius', wiki: 'Confucius', tag: '📜 CONFUCIANISM',
        insight: 'Consistency beats speed. A slow pace you can sustain outruns a sprint you cannot.',
        fact: 'The saying is traditionally attributed to Confucius (551–479 BCE). His teachings were collected by students in the Analects.',
        role: 'Chinese Philosopher & Teacher',
        beliefs: 'Self-cultivation, respect for others, and learning as a lifelong practice.',
        ach: 'His ideas shaped East Asian education, government, and ethics for over two thousand years.',
        trivia: 'He is said to have worked as a minister and then spent years traveling to find a ruler who would apply his ideas.' }
    ]
  }
};

/* =====================================================================
   SECTION 2: STATE & RULES
   ===================================================================== */
let currentCategory = 'sports';
let activeItem = null;
const lastIndex = { sports: -1, film: -1, philosophy: -1 };
const photoCache = {};

function pickItem(cat) {
  const list = APP_DATA[cat].items;
  let i;
  do { i = Math.floor(Math.random() * list.length); } while (list.length > 1 && i === lastIndex[cat]);
  lastIndex[cat] = i;
  return list[i];
}

/* =====================================================================
   SECTION 3: PHOTOS
   Bright illustrated portrait shows instantly; the real Wikipedia photo
   replaces it as soon as it loads.
   ===================================================================== */
function fallbackPortrait(item, cat) {
  const [c1, c2] = APP_DATA[cat].colors;
  const initials = item.author.split(/[\s—(]+/).filter(w => /^[A-ZÉ]/.test(w)).slice(0, 2).map(w => w[0]).join('');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs><rect width="400" height="300" fill="url(#g)"/><circle cx="320" cy="60" r="90" fill="#fff" opacity=".15"/><circle cx="70" cy="260" r="110" fill="#fff" opacity=".12"/><text x="200" y="185" font-family="Georgia,serif" font-size="120" font-weight="700" fill="#fff" text-anchor="middle">${initials}</text><text x="200" y="250" font-family="sans-serif" font-size="24" fill="#fff" text-anchor="middle" opacity=".95">${APP_DATA[cat].emoji}</text></svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

async function getPhotoUrl(wiki) {
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
   SECTION 4: DISPLAY
   ===================================================================== */
const $ = id => document.getElementById(id);
const DOM = {
  bg: $('bgLayer'), btn: $('generateBtn'), card: $('displayCard'),
  badge: $('categoryBadge'), league: $('leagueBadge'),
  avatar: $('authorAvatar'), blur: $('mediaBlur'),
  quote: $('quoteText'), author: $('quoteAuthor'),
  insightBox: $('insightBox'), insightBtn: $('insightToggle'), toggleIcon: $('toggleIcon'),
  insight: $('insightText'), fact: $('factText'),
  tabs: document.querySelectorAll('.tab-btn'),
  modal: $('detailModal'), modalBadge: $('modalBadge'), modalImg: $('modalImg'),
  modalName: $('modalName'), modalRole: $('modalRole'),
  modalBeliefs: $('modalBeliefs'), modalAch: $('modalAchievements'), modalTrivia: $('modalTrivia')
};

function setInsightOpen(open) {
  DOM.insightBox.classList.toggle('hidden', !open);
  DOM.insightBtn.setAttribute('aria-expanded', open);
  DOM.toggleIcon.textContent = open ? '▲ Hide' : '▼ Reveal';
}

function generateInsight() {
  const cat = APP_DATA[currentCategory];
  activeItem = pickItem(currentCategory);

  DOM.bg.className = `bg-layer bg-${currentCategory}`;
  DOM.card.className = `card ${cat.themeClass}`;
  DOM.btn.className = `generate-btn ${cat.themeClass}`;
  DOM.btn.textContent = cat.button;
  DOM.badge.textContent = cat.badge;
  DOM.league.textContent = activeItem.tag;
  DOM.quote.textContent = `“${activeItem.quote}”`;
  DOM.author.textContent = `— ${activeItem.author}`;
  DOM.insight.textContent = activeItem.insight;
  DOM.fact.textContent = activeItem.fact;
  setInsightOpen(false);

  DOM.card.classList.remove('fade-in');
  void DOM.card.offsetWidth;
  DOM.card.classList.add('fade-in');

  showPhoto(activeItem, currentCategory);
}

function selectCategory(name) {
  currentCategory = name;
  DOM.tabs.forEach(t => t.classList.toggle('active', t.dataset.category === name));
  generateInsight();
}

function openDetailView() {
  if (!activeItem) return;
  DOM.modalBadge.textContent = APP_DATA[currentCategory].badge;
  DOM.modalName.textContent = activeItem.author;
  DOM.modalRole.textContent = activeItem.role;
  DOM.modalBeliefs.textContent = activeItem.beliefs;
  DOM.modalAch.textContent = activeItem.ach;
  DOM.modalTrivia.textContent = activeItem.trivia;
  DOM.modal.classList.add('active');
  DOM.modal.setAttribute('aria-hidden', 'false');
}

function closeDetailView() {
  DOM.modal.classList.remove('active');
  DOM.modal.setAttribute('aria-hidden', 'true');
}

/* =====================================================================
   SECTION 5: EVENTS
   ===================================================================== */
DOM.tabs.forEach(t => t.addEventListener('click', () => selectCategory(t.dataset.category)));
DOM.btn.addEventListener('click', generateInsight);
DOM.insightBtn.addEventListener('click', () => setInsightOpen(DOM.insightBox.classList.contains('hidden')));
$('exploreBtn').addEventListener('click', openDetailView);
$('closeModal').addEventListener('click', closeDetailView);
$('backBtn').addEventListener('click', closeDetailView);
DOM.modal.addEventListener('click', e => { if (e.target === DOM.modal) closeDetailView(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDetailView(); });

generateInsight();
