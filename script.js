/* =======================================================================
   SECTION 1: DATA SECTION
   Quotes, directly linked historical snapshots, subject imagery, and modal data
   ======================================================================= */

const APP_DATA = {
    sports: {
        title: "Sports",
        themeClass: "theme-sports",
        badgeText: "Sports & Athletics",
        buttonText: "⚡ Discover Sports Spark",
        items: [
            {
                quote: "I've missed more than 9,000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game-winning shot and missed. I've failed over and over again. And that is why I succeed.",
                author: "Michael Jordan",
                leagueBadge: "🏀 NBA INSIGHT",
                authorImg: "https://upload.wikimedia.org/wikipedia/commons/8/88/Jordan_by_Lipofsky_16577_%28high_quality%29.jpg",
                synthesis: "High performance requires embracing failure as a necessary calibration tool rather than an endpoint.",
                fact: "Direct context: During the 1993 NBA Finals, Michael Jordan scored an unprecedented average of 41 points per game while securing his third consecutive championship ring.",
                details: {
                    role: "6-Time NBA Champion & Hall of Famer",
                    beliefs: "Unrelenting competitive mindset, ruthless work ethic, and converting self-doubt into focused execution.",
                    achievements: "6 NBA Championships, 5 MVP Awards, 10 Scoring Titles, and widely considered the greatest basketball player of all time.",
                    trivia: "Jordan was famously cut from his high school varsity basketball team as a sophomore, using that rejection as lifelong motivation."
                }
            },
            {
                quote: "It's not whether you get knocked down, it's whether you get up.",
                author: "Vince Lombardi",
                leagueBadge: "🏈 NFL INSIGHT",
                authorImg: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&w=800&q=80",
                synthesis: "Resilience in competitive environments mirrors stoic fortitude: shift focus from external blows to internal response.",
                fact: "Direct context: Lombardi led the Green Bay Packers to victory in the first two Super Bowls in NFL history (1967 and 1968).",
                details: {
                    role: "Legendary NFL Coach & Super Bowl Trophy Namesake",
                    beliefs: "Discipline, execution, unity, and refusal to accept defeat under any condition.",
                    achievements: "Won 5 NFL Championships in 7 years, including Super Bowls I & II. The NFL Championship trophy bears his name.",
                    trivia: "Lombardi never had a losing season as a head coach in the NFL."
                }
            },
            {
                quote: "The more difficult the victory, the greater the happiness in winning.",
                author: "Pelé",
                leagueBadge: "⚽ FIFA INSIGHT",
                authorImg: "https://upload.wikimedia.org/wikipedia/commons/5/54/Pele_by_John_Mathew_Smith.jpg",
                synthesis: "Value is intrinsically tied to friction; ease rarely yields deep psychological satisfaction.",
                fact: "Direct context: Pelé became the youngest player ever to win a FIFA World Cup in 1958 at just 17 years old, scoring two goals in the final.",
                details: {
                    role: "Global Football Ambassador & 3-Time World Cup Champion",
                    beliefs: "Joyful creativity ('Joga Bonito'), humble persistence, and dedication to team synergy over individualism.",
                    achievements: "Only player in history to win three FIFA World Cups (1958, 1962, 1970) and scored over 1,200 career goals.",
                    trivia: "In 1967, a 48-hour ceasefire was declared in the Nigerian Civil War so both sides could watch Pelé play an exhibition match."
                }
            }
        ]
    },
    film: {
        title: "Film",
        themeClass: "theme-film",
        badgeText: "Cinema & Drama",
        buttonText: "🎬 Discover Film Spark",
        items: [
            {
                quote: "Do or do not. There is no try.",
                author: "Yoda (The Empire Strikes Back)",
                leagueBadge: "🌌 SCI-FI CINEMA",
                authorImg: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
                synthesis: "Eliminating tentative mindsets converts abstract intent into decisive commitment.",
                fact: "Direct context: Spoken during Luke Skywalker's training on Dagobah in 1980, this line redefined cinematic archetypes of mentorship.",
                details: {
                    role: "Jedi Master & Cinematic Cultural Icon",
                    beliefs: "Mindfulness, mastery over inner impulse, and total harmony between spirit and action.",
                    achievements: "Trained Jedi for over 800 years and remains one of film history's most quoted fictional characters.",
                    trivia: "Master Yoda's iconic face design was partially inspired by Albert Einstein to evoke wisdom and intellect."
                }
            },
            {
                quote: "Our lives are defined by opportunities, even the ones we miss.",
                author: "Benjamin Button",
                leagueBadge: "🍿 DRAMA & NARRATIVE",
                authorImg: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
                synthesis: "Non-events and lost paths shape human identity as profoundly as conscious achievements.",
                fact: "Direct context: Directed by David Fincher in 2008, the film adapted F. Scott Fitzgerald's tale, earning 13 Oscar nominations.",
                details: {
                    role: "Literary & Cinematic Protagonist",
                    beliefs: "Acceptance of time's inexorable flow and finding wonder in fleeting moments.",
                    achievements: "Pioneered revolutionary aging CGI visual effects that won the Academy Award for Best Visual Effects.",
                    trivia: "Brad Pitt spent up to 5 hours daily in makeup before CGI was layered onto his face for earlier stages of aging."
                }
            },
            {
                quote: "It's what you do right now that makes a difference.",
                author: "Aragorn (The Lord of the Rings)",
                leagueBadge: "⚔️ EPIC FANTASY",
                authorImg: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
                synthesis: "Agency exists exclusively in the immediate present; legacy is merely the byproduct of immediate execution.",
                fact: "Direct context: Delivered prior to the Battle of the Black Gate, symbolizing ultimate duty in J.R.R. Tolkien's legendary saga.",
                details: {
                    role: "Ranger of the North & King of Gondor",
                    beliefs: "Servant leadership, honor through sacrifice, and standing firm against overwhelming darkness.",
                    achievements: "Unrivaled swordsman who united the fractured kingdoms of Men in Middle-earth.",
                    trivia: "Actor Viggo Mortensen did all his own stunts and insisted on carrying a real steel sword throughout filming."
                }
            }
        ]
    },
    philosophy: {
        title: "Philosophy",
        themeClass: "theme-philosophy",
        badgeText: "Philosophy & Mind",
        buttonText: "🏛️ Discover Philosophy Spark",
        items: [
            {
                quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
                author: "Aristotle",
                leagueBadge: "🏛️ ANCIENT GREECE",
                authorImg: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Aristotle_Altemps_Inv8575.jpg",
                synthesis: "Character and identity are emergent properties derived from daily routines rather than singular highlights.",
                fact: "Direct context: Recorded in the 'Nicomachean Ethics', written around 350 BCE as a foundational framework for human virtue.",
                details: {
                    role: "Classical Greek Philosopher & Polymath",
                    beliefs: "Virtue ethics, the Golden Mean (balance), and empirical observation of nature.",
                    achievements: "Student of Plato and tutor to Alexander the Great; laid foundations for formal logic, biology, and political theory.",
                    trivia: "Aristotle created one of the world's earliest known botanical and zoological libraries in Athens."
                }
            },
            {
                quote: "He who has a why to live can bear almost any how.",
                author: "Friedrich Nietzsche",
                leagueBadge: "⚡ EXISTENTIALISM",
                authorImg: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
                synthesis: "Purpose acts as a powerful cognitive buffer against existential hardship and physical strain.",
                fact: "Direct context: Published in 'Twilight of the Idols' in 1889, exploring human endurance through psychological intent.",
                details: {
                    role: "19th-Century German Philosopher & Cultural Critic",
                    beliefs: "Self-overcoming (Übermensch), Amor Fati (love of fate), and personal creation of meaning.",
                    achievements: "Profoundly influenced 20th-century literature, psychology, and existentialist thought.",
                    trivia: "Nietzsche wrote many of his greatest works while hiking long distances through the Swiss Alps."
                }
            },
            {
                quote: "The unexamined life is not worth living.",
                author: "Socrates",
                leagueBadge: "⚖️ CLASSICAL LOGIC",
                authorImg: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80",
                synthesis: "Self-reflection is the prerequisite for intentional living; without it, actions are automated responses.",
                fact: "Direct context: Spoken during Socrates' trial in Athens in 399 BCE as he defended his practice of questioning dogma.",
                details: {
                    role: "Father of Western Philosophy",
                    beliefs: "Socratic Method (relentless questioning), pursuit of wisdom over material wealth, and intellectual humility.",
                    achievements: "Transformed philosophical inquiry from studying physics to evaluating ethics and human behavior.",
                    trivia: "Socrates wrote down none of his own teachings; everything known about him comes from Plato and Xenophon."
                }
            }
        ]
    }
};

/* =======================================================================
   SECTION 2: RULES SECTION
   State management, non-repeating index rules, and category switching
   ======================================================================= */

let currentCategory = 'sports';
let activeItem = null;
let lastIndices = { sports: -1, film: -1, philosophy: -1 };

/**
 * Image error fallback handling to ensure robust presentation
 */
function handleImageError(imgElement) {
    imgElement.src = 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80';
}

/**
 * Returns a unique random item from the list, avoiding consecutive repeats
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
 * Changes active category and refreshes UI
 */
function selectCategory(categoryName) {
    if (!APP_DATA[categoryName]) return;
    currentCategory = categoryName;
    updateTabUI();
    generateInsight();
}

/**
 * Toggles visibility of the optional Mindset Connection box
 */
function toggleMindsetConnection() {
    const box = document.getElementById('synthesisBox');
    const btnIcon = document.getElementById('synthesisToggleIcon');
    
    if (!box) return;
    
    box.classList.toggle('hidden-synthesis');
    const isHidden = box.classList.contains('hidden-synthesis');
    if (btnIcon) {
        btnIcon.textContent = isHidden ? '▼ Reveal' : '▲ Hide';
    }
}

/* =======================================================================
   SECTION 3: DISPLAY SECTION
   DOM references, card updates, theme application, and modal screens
   ======================================================================= */

const DOM = {
    bgLayer: document.getElementById('bgImageLayer'),
    generateBtn: document.getElementById('generateBtn'),
    displayCard: document.getElementById('displayCard'),
    categoryBadge: document.getElementById('categoryBadge'),
    leagueOverlayBadge: document.getElementById('leagueOverlayBadge'),
    authorAvatar: document.getElementById('authorAvatar'),
    quoteText: document.getElementById('quoteText'),
    quoteAuthor: document.getElementById('quoteAuthor'),
    synthesisText: document.getElementById('synthesisText'),
    factText: document.getElementById('factText'),
    tabButtons: document.querySelectorAll('.tab-btn'),
    
    detailModal: document.getElementById('detailModal'),
    modalCategoryBadge: document.getElementById('modalCategoryBadge'),
    modalAuthorImg: document.getElementById('modalAuthorImg'),
    modalAuthorName: document.getElementById('modalAuthorName'),
    modalAuthorRole: document.getElementById('modalAuthorRole'),
    modalBeliefs: document.getElementById('modalBeliefs'),
    modalAchievements: document.getElementById('modalAchievements'),
    modalTrivia: document.getElementById('modalTrivia')
};

function updateTabUI() {
    DOM.tabButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === currentCategory);
    });
}

function generateInsight() {
    const categoryData = APP_DATA[currentCategory];
    activeItem = getRandomUniqueItem(categoryData.items, currentCategory);

    // Update themes and backgrounds
    if (DOM.bgLayer) DOM.bgLayer.className = `bg-image-layer bg-${currentCategory}`;
    if (DOM.displayCard) DOM.displayCard.className = `card ${categoryData.themeClass}`;
    if (DOM.generateBtn) {
        DOM.generateBtn.className = `generate-btn ${categoryData.themeClass}`;
        DOM.generateBtn.textContent = categoryData.buttonText;
    }
    if (DOM.categoryBadge) DOM.categoryBadge.textContent = categoryData.badgeText;

    // Trigger visual reflow animation
    if (DOM.displayCard) {
        DOM.displayCard.classList.remove('fade-in');
        void DOM.displayCard.offsetWidth;
        DOM.displayCard.classList.add('fade-in');
    }

    // Populate elements
    if (DOM.authorAvatar) {
        DOM.authorAvatar.src = activeItem.authorImg;
        DOM.authorAvatar.alt = activeItem.author;
    }
    if (DOM.leagueOverlayBadge) DOM.leagueOverlayBadge.textContent = activeItem.leagueBadge;
    if (DOM.quoteText) DOM.quoteText.textContent = `"${activeItem.quote}"`;
    if (DOM.quoteAuthor) DOM.quoteAuthor.textContent = `— ${activeItem.author}`;
    if (DOM.synthesisText) DOM.synthesisText.textContent = activeItem.synthesis;
    if (DOM.factText) DOM.factText.textContent = activeItem.fact;
}

function openDetailView() {
    if (!activeItem || !DOM.detailModal) return;

    if (DOM.modalCategoryBadge) DOM.modalCategoryBadge.textContent = APP_DATA[currentCategory].badgeText;
    if (DOM.modalAuthorImg) {
        DOM.modalAuthorImg.src = activeItem.authorImg;
        DOM.modalAuthorImg.alt = activeItem.author;
    }
    if (DOM.modalAuthorName) DOM.modalAuthorName.textContent = activeItem.author;
    if (DOM.modalAuthorRole) DOM.modalAuthorRole.textContent = activeItem.details.role;
    if (DOM.modalBeliefs) DOM.modalBeliefs.textContent = activeItem.details.beliefs;
    if (DOM.modalAchievements) DOM.modalAchievements.textContent = activeItem.details.achievements;
    if (DOM.modalTrivia) DOM.modalTrivia.textContent = activeItem.details.trivia;

    DOM.detailModal.classList.add('active');
    DOM.detailModal.setAttribute('aria-hidden', 'false');
}

function closeDetailView() {
    if (!DOM.detailModal) return;
    DOM.detailModal.classList.remove('active');
    DOM.detailModal.setAttribute('aria-hidden', 'true');
}

// Initial initialization when DOM is fully loaded
window.addEventListener('DOMContentLoaded', () => {
    generateInsight();
});
