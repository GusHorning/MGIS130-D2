/* =======================================================================
   SECTION 1: DATA SECTION
   Quotes, facts, domain connections, vector graphic assets, and author bios
   ======================================================================= */

const APP_DATA = {
    sports: {
        title: "Sports",
        themeClass: "theme-sports",
        bgClass: "bg-sports",
        badgeText: "Sports & Athletics",
        buttonText: "🎲 Discover Today's Spark",
        items: [
            {
                quote: "I've missed more than 9,000 shots in my career. I've lost almost 300 games. Twenty-six times I've been trusted to take the game-winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.",
                author: "Michael Jordan",
                role: "NBA Legend & Entrepreneur",
                beliefs: "Embraces relentless competitive spirit, extreme obsession with mastery, and viewing failure strictly as fuel for progress rather than a limitation.",
                achievements: "6-time NBA Champion, 5-time NBA MVP, 6-time Finals MVP, and widely considered the greatest basketball player of all time.",
                trivia: "Jordan was famously cut from his high school varsity basketball team as a sophomore, which fueled his iconic work ethic for decades.",
                synthesis: "High performance requires embracing failure as an essential calibration tool rather than a final verdict.",
                fact: "The modern Olympic Games were revived in Athens in 1896, featuring 241 athletes from 14 nations competing in 43 events.",
                svg: `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="sg1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stop-color="#0284c7" />
                                <stop offset="100%" stop-color="#0f172a" />
                            </linearGradient>
                        </defs>
                        <rect width="400" height="220" fill="url(#sg1)" />
                        <circle cx="200" cy="110" r="70" stroke="rgba(56, 189, 248, 0.4)" stroke-width="6" fill="none"/>
                        <line x1="200" y1="0" x2="200" y2="220" stroke="rgba(255,255,255,0.15)" stroke-width="3" />
                        <circle cx="200" cy="110" r="8" fill="#38bdf8"/>
                      </svg>`
            },
            {
                quote: "It's not whether you get knocked down, it's whether you get up.",
                author: "Vince Lombardi",
                role: "NFL Head Coach & Executive",
                beliefs: "Rooted in discipline, commitment to perfection, personal accountability, and mental toughness under intense pressure.",
                achievements: "Led the Green Bay Packers to five NFL championships, including victories in the first two Super Bowls.",
                trivia: "The NFL Super Bowl trophy was permanently renamed the 'Vince Lombardi Trophy' in his honor in 1970.",
                synthesis: "Resilience in competitive environments mirrors stoic fortitude, shifting focus from external blows to internal response.",
                fact: "Basketball was invented in December 1891 by Canadian professor Dr. James Naismith as an indoor winter sport using peach baskets.",
                svg: `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="sg2" x1="0%" y1="100%" x2="100%" y2="0%">
                                <stop offset="0%" stop-color="#0369a1" />
                                <stop offset="100%" stop-color="#38bdf8" />
                            </linearGradient>
                        </defs>
                        <rect width="400" height="220" fill="#0f172a" />
                        <path d="M 50 180 Q 200 20 350 180" stroke="url(#sg2)" stroke-width="8" fill="none" stroke-linecap="round"/>
                        <circle cx="350" cy="180" r="12" fill="#38bdf8"/>
                      </svg>`
            },
            {
                quote: "The more difficult the victory, the greater the happiness in winning.",
                author: "Pelé",
                role: "International Football Superstar",
                beliefs: "Believed sports could unite nations and bring joy, emphasizing creativity, technical joy, and teamwork on the pitch.",
                achievements: "The only player in soccer history to win three FIFA World Cups (1958, 1962, 1970) and scored over 1,200 career goals.",
                trivia: "In 1969, a 48-hour ceasefire was declared during the Nigerian Civil War so both sides could watch Pelé play an exhibition match.",
                synthesis: "Value is intrinsically tied to friction; ease rarely yields deep psychological satisfaction or growth.",
                fact: "The FIFA World Cup was first held in 1930 in Uruguay, where the host country emerged victorious.",
                svg: `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
                        <rect width="400" height="220" fill="#0c4a6e" />
                        <polygon points="200,40 240,150 160,150" fill="none" stroke="#38bdf8" stroke-width="5" />
                        <circle cx="200" cy="40" r="15" fill="#38bdf8"/>
                      </svg>`
            }
        ]
    },
    film: {
        title: "Film",
        themeClass: "theme-film",
        bgClass: "bg-film",
        badgeText: "Cinema & Narrative",
        buttonText: "🎲 Discover Today's Spark",
        items: [
            {
                quote: "Do or do not. There is no try.",
                author: "Yoda",
                role: "Jedi Master (Star Wars)",
                beliefs: "Focuses on mindfulness, total commitment, spiritual harmony with nature, and rejecting self-doubt or passive hesitation.",
                achievements: "Trained Jedi Knights for over 800 years and served as Grand Master of the Jedi Order.",
                trivia: "Yoda's iconic face design was partly inspired by Albert Einstein to evoke wisdom and intelligence.",
                synthesis: "Eliminating tentative mindsets converts abstract intent into decisive action.",
                fact: "The Lumière brothers held the first projected public movie screening on December 28, 1895, at the Grand Café in Paris.",
                svg: `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="fg1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stop-color="#be123c" />
                                <stop offset="100%" stop-color="#0f172a" />
                            </linearGradient>
                        </defs>
                        <rect width="400" height="220" fill="url(#fg1)" />
                        <polygon points="160,70 260,110 160,150" fill="#f43f5e"/>
                        <rect x="50" y="50" width="300" height="120" stroke="rgba(244,63,94,0.4)" stroke-width="4" fill="none" rx="10"/>
                      </svg>`
            },
            {
                quote: "Our lives are defined by opportunities, even the ones we miss.",
                author: "Benjamin Button",
                role: "Protagonist (F. Scott Fitzgerald / David Fincher)",
                beliefs: "Embraces acceptance of time's unidirectional flow, the impermanence of beauty, and finding gratitude in unexpected moments.",
                achievements: "Lived an extraordinary inverted life cycle, navigating WWII, deep romance, and global exploration backwards.",
                trivia: "The movie made history with ground-breaking CGI face-replacement technology to age Brad Pitt dynamically.",
                synthesis: "Non-events and lost paths shape identity as profoundly as conscious choices and successes.",
                fact: "The Jazz Singer (1927) was the first feature-length motion picture with synchronized singing and speech, ending the silent film era.",
                svg: `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
                        <rect width="400" height="220" fill="#881337" />
                        <circle cx="120" cy="110" r="50" fill="none" stroke="#f43f5e" stroke-width="8"/>
                        <circle cx="280" cy="110" r="50" fill="none" stroke="#f43f5e" stroke-width="8"/>
                        <line x1="120" y1="110" x2="280" y2="110" stroke="#f43f5e" stroke-width="4"/>
                      </svg>`
            },
            {
                quote: "It's what you do right now that makes a difference.",
                author: "Aragorn",
                role: "Ranger & High King of Gondor (Middle-earth)",
                beliefs: "Duty over personal desire, selfless leadership, loyalty to comrades, and relentless hope in the face of despair.",
                achievements: "Reunited the kingdoms of Arnor and Gondor and led the free peoples to victory against Sauron.",
                trivia: "Viggo Mortensen performed almost all of his own swordplay stunts, earning high praise from professional fight choreographers.",
                synthesis: "Agency exists exclusively in the present moment; legacy is merely the byproduct of immediate execution.",
                fact: "The Academy Awards (Oscars) were first handed out in 1929 at a private dinner hosted at the Hollywood Roosevelt Hotel.",
                svg: `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
                        <rect width="400" height="220" fill="#4c0519" />
                        <path d="M 100 180 L 200 40 L 300 180 Z" fill="none" stroke="#f43f5e" stroke-width="6"/>
                        <line x1="100" y1="140" x2="300" y2="140" stroke="#f43f5e" stroke-width="3"/>
                      </svg>`
            }
        ]
    },
    philosophy: {
        title: "Philosophy",
        themeClass: "theme-philosophy",
        bgClass: "bg-philosophy",
        badgeText: "Philosophy & Logic",
        buttonText: "🎲 Discover Today's Spark",
        items: [
            {
                quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
                author: "Aristotle",
                role: "Ancient Greek Philosopher & Polymath",
                beliefs: "Emphasized virtue ethics, the Golden Mean, practical wisdom (phronesis), and empirical observation of human nature.",
                achievements: "Founded the Lyceum school in Athens and tutored Alexander the Great; wrote foundational treatises on logic, ethics, and biology.",
                trivia: "Aristotle was one of the first thinkers to systematically classify animals into species based on shared characteristics.",
                synthesis: "Character and identity are emergent properties derived from daily routines rather than singular achievements.",
                fact: "Western philosophy originated in ancient Greece during the 6th century BCE with Thales of Miletus, who sought non-mythological explanations of nature.",
                svg: `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="pg1" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stop-color="#047857" />
                                <stop offset="100%" stop-color="#0f172a" />
                            </linearGradient>
                        </defs>
                        <rect width="400" height="220" fill="url(#pg1)" />
                        <rect x="80" y="40" width="20" height="140" fill="#10b981" opacity="0.8"/>
                        <rect x="160" y="40" width="20" height="140" fill="#10b981" opacity="0.8"/>
                        <rect x="240" y="40" width="20" height="140" fill="#10b981" opacity="0.8"/>
                        <rect x="320" y="40" width="20" height="140" fill="#10b981" opacity="0.8"/>
                        <rect x="60" y="30" width="290" height="15" fill="#10b981"/>
                      </svg>`
            },
            {
                quote: "He who has a why to live can bear almost any how.",
                author: "Friedrich Nietzsche",
                role: "19th Century Cultural Critic & Philosopher",
                beliefs: "Focused on self-overcoming, personal agency, finding meaning through struggle, and challenging conventional dogmas.",
                achievements: "Penned transformative works like 'Thus Spoke Zarathustra' and influenced existentialism and modern literature.",
                trivia: "Nietzsche became a full professor of classical philology at the University of Basel at the young age of 24.",
                synthesis: "Purpose acts as a cognitive buffer against existential hardship and physical strain.",
                fact: "Stoicism was founded in Athens by Zeno of Citium in the early 3rd century BCE and named after the Stoa Poikile (public porch) where he taught.",
                svg: `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
                        <rect width="400" height="220" fill="#064e3b" />
                        <circle cx="200" cy="110" r="60" stroke="#10b981" stroke-width="4" fill="none"/>
                        <polygon points="200,60 240,140 160,140" fill="#10b981" opacity="0.6"/>
                      </svg>`
            },
            {
                quote: "The unexamined life is not worth living.",
                author: "Socrates",
                role: "Classical Athenian Philosopher",
                beliefs: "Devoted to questioning beliefs, seeking objective truth, intellectual humility, and prioritizing ethical integrity over power.",
                achievements: "Developed the Socratic Method of inquiry and is widely regarded as the foundational founder of Western philosophy.",
                trivia: "Socrates wrote zero texts; everything known about his teachings comes from dialogues written by his student Plato.",
                synthesis: "Self-reflection is the prerequisite for intentional living; without it, actions are automated responses.",
                fact: "The term 'Philosophy' derives from the Greek roots 'Philo' (loving) and 'Sophia' (wisdom), literally translating to 'love of wisdom'.",
                svg: `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
                        <rect width="400" height="220" fill="#022c22" />
                        <circle cx="200" cy="110" r="80" stroke="#10b981" stroke-width="2" stroke-dasharray="8,8" fill="none"/>
                        <circle cx="200" cy="110" r="40" stroke="#10b981" stroke-width="4" fill="none"/>
                        <circle cx="200" cy="110" r="10" fill="#10b981"/>
                      </svg>`
            }
        ]
    }
};

/* =======================================================================
   SECTION 2: RULES SECTION
   State management, non-repeating random selection rules, and category switching
   ======================================================================= */

let currentCategory = 'sports';
let lastIndices = { sports: -1, film: -1, philosophy: -1 };
let currentActiveItem = null;

/**
 * Selects a random item from a category without repeating the immediate previous selection
 * @param {Array} list - Domain items
 * @param {string} categoryKey - Active category identifier
 * @returns {Object} Selected item
 */
function getRandomUniqueItem(list, categoryKey) {
    if (list.length <= 1) return list[0];
    
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * list.length);
    } while (newIndex === lastIndices[categoryKey]);

    lastIndices[categoryKey] = newIndex;
    return list[newIndex];
}

/**
 * Switches current category selection
 * @param {string} categoryName - Category identifier ('sports'|'film'|'philosophy')
 */
function selectCategory(categoryName) {
    if (!APP_DATA[categoryName]) return;
    currentCategory = categoryName;
    
    updateTabUI();
    generateInsight();
}

/* =======================================================================
   SECTION 3: DISPLAY SECTION
   DOM referencing, element rendering, dynamic background updates, and modal logic
   ======================================================================= */

const DOM = {
    bgImageLayer: document.getElementById('bgImageLayer'),
    generateBtn: document.getElementById('generateBtn'),
    displayCard: document.getElementById('displayCard'),
    categoryBadge: document.getElementById('categoryBadge'),
    mediaViewer: document.getElementById('mediaViewer'),
    quoteText: document.getElementById('quoteText'),
    quoteAuthor: document.getElementById('quoteAuthor'),
    synthesisText: document.getElementById('synthesisText'),
    factText: document.getElementById('factText'),
    tabButtons: document.querySelectorAll('.tab-btn'),
    // Exploration Modal Elements
    detailModal: document.getElementById('detailModal'),
    modalCategoryBadge: document.getElementById('modalCategoryBadge'),
    modalAuthorName: document.getElementById('modalAuthorName'),
    modalAuthorRole: document.getElementById('modalAuthorRole'),
    modalBeliefs: document.getElementById('modalBeliefs'),
    modalAchievements: document.getElementById('modalAchievements'),
    modalTrivia: document.getElementById('modalTrivia')
};

/**
 * Updates navigation tabs highlight states
 */
function updateTabUI() {
    DOM.tabButtons.forEach(btn => {
        if (btn.dataset.category === currentCategory) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

/**
 * Applies visual theme color schemes and background images according to category
 * @param {Object} categoryData 
 */
function applyTheme(categoryData) {
    DOM.displayCard.className = `card custom-corners ${categoryData.themeClass}`;
    DOM.generateBtn.className = `generate-btn ${categoryData.themeClass}`;
    DOM.generateBtn.textContent = categoryData.buttonText;
    DOM.categoryBadge.textContent = categoryData.badgeText;
    
    // Update Dynamic Category Background Image
    if (DOM.bgImageLayer) {
        DOM.bgImageLayer.className = `bg-image-layer ${categoryData.bgClass}`;
    }
}

/**
 * Renders output card with generated insight data
 */
function generateInsight() {
    const categoryData = APP_DATA[currentCategory];
    const insightItem = getRandomUniqueItem(categoryData.items, currentCategory);
    currentActiveItem = insightItem;

    // Trigger visual reflow for smooth animation transition
    DOM.displayCard.classList.remove('fade-in');
    void DOM.displayCard.offsetWidth;
    DOM.displayCard.classList.add('fade-in');

    // Update styling theme and background image
    applyTheme(categoryData);

    // Render Data into DOM Elements
    DOM.mediaViewer.innerHTML = insightItem.svg;
    DOM.quoteText.textContent = `"${insightItem.quote}"`;
    DOM.quoteAuthor.textContent = `— ${insightItem.author}`;
    DOM.synthesisText.textContent = insightItem.synthesis;
    DOM.factText.textContent = insightItem.fact;
}

/**
 * Opens full-screen exploratory view for deep-dive context
 */
function openDetailView() {
    if (!currentActiveItem) return;

    const categoryData = APP_DATA[currentCategory];
    
    DOM.modalCategoryBadge.textContent = categoryData.badgeText;
    DOM.modalAuthorName.textContent = currentActiveItem.author;
    DOM.modalAuthorRole.textContent = currentActiveItem.role || "Influential Figure";
    DOM.modalBeliefs.textContent = currentActiveItem.beliefs || "No detailed beliefs recorded.";
    DOM.modalAchievements.textContent = currentActiveItem.achievements || "Notable contributions across their domain.";
    DOM.modalTrivia.textContent = currentActiveItem.trivia || "Key historical facts and context.";

    DOM.detailModal.classList.add('active');
    DOM.detailModal.setAttribute('aria-hidden', 'false');
}

/**
 * Closes exploratory view screen
 */
function closeDetailView() {
    DOM.detailModal.classList.remove('active');
    DOM.detailModal.setAttribute('aria-hidden', 'true');
}

// Initial render when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
    generateInsight();
});
