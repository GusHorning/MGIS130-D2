/* =======================================================================
   DAILY SPARKS - LOGIC & DATA SCRIPT
   Categories: Sports, Film, Philosophy
   ======================================================================= */

// Comprehensive Dataset containing verified entries for Sports, Film, and Philosophy
const APP_DATA = {
    sports: {
        title: "Sports",
        themeClass: "theme-sports",
        bgClass: "bg-sports-layer",
        badgeText: "Sports & Athletics",
        buttonText: "⚡ Discover Sports Spark",
        items: [
            {
                id: "sports-1",
                quote: "I've missed more than 9,000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game-winning shot and missed. I've failed over and over again. And that is why I succeed.",
                author: "Michael Jordan",
                leagueBadge: "🏀 NBA INSIGHT",
                authorImg: "https://upload.wikimedia.org/wikipedia/commons/8/88/Jordan_by_Lipofsky_16577_%28high_quality%29.jpg",
                synthesis: "High performance requires embracing failure as a necessary calibration tool rather than an endpoint.",
                fact: "During the 1993 NBA Finals, Michael Jordan scored an unprecedented average of 41 points per game while securing his third consecutive championship ring.",
                details: {
                    role: "6-Time NBA Champion & Hall of Famer",
                    beliefs: "Unrelenting competitive mindset, ruthless work ethic, and converting self-doubt into focused execution.",
                    achievements: "6 NBA Championships, 5 MVP Awards, 10 Scoring Titles, and widely considered the greatest basketball player of all time.",
                    trivia: "Jordan was famously cut from his high school varsity basketball team as a sophomore, using that rejection as lifelong motivation."
                }
            },
            {
                id: "sports-2",
                quote: "It's not whether you get knocked down, it's whether you get up.",
                author: "Vince Lombardi",
                leagueBadge: "🏈 NFL INSIGHT",
                authorImg: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Vince_Lombardi_1964.jpg",
                synthesis: "Resilience in competitive environments mirrors stoic fortitude: shift focus from external blows to internal response.",
                fact: "Lombardi led the Green Bay Packers to victory in the first two Super Bowls in NFL history (1967 and 1968).",
                details: {
                    role: "Legendary NFL Coach & Super Bowl Trophy Namesake",
                    beliefs: "Discipline, execution, unity, and refusal to accept defeat under any condition.",
                    achievements: "Won 5 NFL Championships in 7 years, including Super Bowls I & II. The NFL Championship trophy bears his name.",
                    trivia: "Lombardi never had a losing season as a head coach in the NFL."
                }
            },
            {
                id: "sports-3",
                quote: "The more difficult the victory, the greater the happiness in winning.",
                author: "Pelé",
                leagueBadge: "⚽ FIFA INSIGHT",
                authorImg: "https://upload.wikimedia.org/wikipedia/commons/5/54/Pele_by_John_Mathew_Smith.jpg",
                synthesis: "Value is intrinsically tied to friction; ease rarely yields deep psychological satisfaction.",
                fact: "Pelé became the youngest player ever to win a FIFA World Cup in 1958 at just 17 years old, scoring two goals in the final.",
                details: {
                    role: "Global Football Ambassador & 3-Time World Cup Champion",
                    beliefs: "Joyful creativity ('Joga Bonito'), humble persistence, and dedication to team synergy over individualism.",
                    achievements: "Only player in history to win three FIFA World Cups (1958, 1962, 1970) and scored over 1,200 career goals.",
                    trivia: "In 1967, a 48-hour ceasefire was declared in the Nigerian Civil War so both sides could watch Pelé play an exhibition match."
                }
            },
            {
                id: "sports-4",
                quote: "Float like a butterfly, sting like a bee. His hands can't hit what his eyes can't see.",
                author: "Muhammad Ali",
                leagueBadge: "🥊 BOXING INSIGHT",
                authorImg: "https://upload.wikimedia.org/wikipedia/commons/8/89/Muhammad_Ali_NYWTS.jpg",
                synthesis: "True dominance combines psychological conviction, fluid adaptability, and absolute confidence in execution.",
                fact: "Ali reclaimed the World Heavyweight Championship during the iconic 'Rumble in the Jungle' against George Foreman in 1974.",
                details: {
                    role: "3-Time Heavyweight Champion of the World",
                    beliefs: "Self-determination, social conviction, unmatched psychological warfare, and unshakeable belief.",
                    achievements: "3-time World Heavyweight Champion, Olympic Gold Medalist, and named Sportsman of the Century.",
                    trivia: "Ali was stripped of his boxing title and banned from boxing for 3.5 years at his physical peak for refusing military induction on moral grounds."
                }
            },
            {
                id: "sports-5",
                quote: "You miss 100% of the shots you don't take.",
                author: "Wayne Gretzky",
                leagueBadge: "🏒 NHL INSIGHT",
                authorImg: "https://upload.wikimedia.org/wikipedia/commons/1/15/Wayne_Gretzky_2006-03-18.jpg",
                synthesis: "Inaction guarantees zero output; bold initiative carries risk but remains the sole path to achievement.",
                fact: "Gretzky holds 61 NHL records, including having more career assists than any other player has total points.",
                details: {
                    role: "NHL All-Time Leading Scorer ('The Great One')",
                    beliefs: "Anticipating where the opportunity will be rather than reacting to where it has already been.",
                    achievements: "4 Stanley Cup victories, 9 Hart Trophies (MVP), and the all-time leader in NHL goals and points.",
                    trivia: "Gretzky's jersey number #99 was retired league-wide across the entire NHL upon his retirement."
                }
            }
        ]
    },
    film: {
        title: "Film",
        themeClass: "theme-film",
        bgClass: "bg-film-layer",
        badgeText: "Cinema & Drama",
        buttonText: "🎬 Discover Film Spark",
        items: [
            {
                id: "film-1",
                quote: "Do or do not. There is no try.",
                author: "Yoda (The Empire Strikes Back)",
                leagueBadge: "🌌 SCI-FI CINEMA",
                authorImg: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?auto=format&fit=crop&w=800&q=80",
                synthesis: "Eliminating tentative mindsets converts abstract intent into decisive commitment.",
                fact: "Spoken during Luke Skywalker's training on Dagobah in 1980, this line redefined cinematic archetypes of mentorship.",
                details: {
                    role: "Jedi Master & Cinematic Cultural Icon",
                    beliefs: "Mindfulness, mastery over inner impulse, and total harmony between spirit and action.",
                    achievements: "Trained Jedi for over 800 years and remains one of film history's most quoted fictional characters.",
                    trivia: "Master Yoda's iconic face design was partially inspired by Albert Einstein to evoke instant wisdom."
                }
            },
            {
                id: "film-2",
                quote: "Our lives are defined by opportunities, even the ones we miss.",
                author: "Benjamin Button",
                leagueBadge: "🍿 DRAMA & NARRATIVE",
                authorImg: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
                synthesis: "Non-events and lost paths shape human identity as profoundly as conscious achievements.",
                fact: "Directed by David Fincher in 2008, the film adapted F. Scott Fitzgerald's short story, earning 13 Academy Award nominations.",
                details: {
                    role: "Literary & Cinematic Protagonist",
                    beliefs: "Acceptance of time's inexorable flow and finding wonder in fleeting moments.",
                    achievements: "Pioneered revolutionary aging CGI visual effects that won the Academy Award for Best Visual Effects.",
                    trivia: "Brad Pitt spent up to 5 hours daily in prosthetic makeup before CGI blending was applied."
                }
            },
            {
                id: "film-3",
                quote: "It's what you do right now that makes a difference.",
                author: "Aragorn (The Lord of the Rings)",
                leagueBadge: "⚔️ EPIC FANTASY",
                authorImg: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
                synthesis: "Agency exists exclusively in the immediate present; legacy is merely the byproduct of immediate execution.",
                fact: "Delivered prior to the Battle of the Black Gate, symbolizing ultimate duty in J.R.R. Tolkien's legendary saga.",
                details: {
                    role: "Ranger of the North & King of Gondor",
                    beliefs: "Servant leadership, honor through sacrifice, and standing firm against overwhelming darkness.",
                    achievements: "Unrivaled swordsman who united the fractured kingdoms of Men in Middle-earth.",
                    trivia: "Actor Viggo Mortensen did all his own stunts and insisted on carrying a real steel sword throughout filming."
                }
            },
            {
                id: "film-4",
                quote: "Get busy living, or get busy dying.",
                author: "Andy Dufresne (The Shawshank Redemption)",
                leagueBadge: "🎥 CLASSIC CINEMA",
                authorImg: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80",
                synthesis: "Hope combined with persistent strategic action can triumph over seemingly permanent confinement.",
                fact: "Based on Stephen King's novella, the 1994 film currently holds the highest user rating on IMDb of all time.",
                details: {
                    role: "Shawshank Protagonist & Symbol of Perseverance",
                    beliefs: "Hope is a good thing, maybe the best of things, and no good thing ever dies.",
                    achievements: "Maintained humanity and mental integrity over 19 years of wrongful imprisonment before escaping.",
                    trivia: "The film was initially a box office disappointment before becoming one of the most beloved films in history via video rentals."
                }
            },
            {
                id: "film-5",
                quote: "All we have to decide is what to do with the time that is given us.",
                author: "Gandalf (The Fellowship of the Ring)",
                leagueBadge: "🧙‍♂️ CINEMATIC FANTASY",
                authorImg: "https://images.unsplash.com/photo-1514539079130-25950c84af65?auto=format&fit=crop&w=800&q=80",
                synthesis: "Grieving unchosen circumstances is futile; agency resides solely in shaping our active response.",
                fact: "Spoken inside the Mines of Moria, offering timeless solace when facing existential uncertainty.",
                details: {
                    role: "Istar Wizard & Guide to the Free Peoples",
                    beliefs: "Patience, nurturing courage in the small and humble, and seeing the unseen moral strength in others.",
                    achievements: "Orchestrated the defeat of Sauron and guided Middle-earth through the Third Age.",
                    trivia: "Sir Ian McKellen based Gandalf's vocal pitch and cadence on author J.R.R. Tolkien's own speaking voice."
                }
            }
        ]
    },
    philosophy: {
        title: "Philosophy",
        themeClass: "theme-philosophy",
        bgClass: "bg-philosophy-layer",
        badgeText: "Philosophy & Mind",
        buttonText: "🏛️ Discover Philosophy Spark",
        items: [
            {
                id: "philosophy-1",
                quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
                author: "Aristotle",
                leagueBadge: "🏛️ ANCIENT GREECE",
                authorImg: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Aristotle_Altemps_Inv8575.jpg",
                synthesis: "Character and identity are emergent properties derived from daily routines rather than singular highlights.",
                fact: "Recorded in the 'Nicomachean Ethics', written around 350 BCE as a foundational framework for human virtue.",
                details: {
                    role: "Classical Greek Philosopher & Polymath",
                    beliefs: "Virtue ethics, the Golden Mean (balance), and empirical observation of nature.",
                    achievements: "Student of Plato and tutor to Alexander the Great; laid foundations for formal logic, biology, and political theory.",
                    trivia: "Aristotle created one of the world's earliest known botanical and zoological libraries in Athens."
                }
            },
            {
                id: "philosophy-2",
                quote: "He who has a why to live can bear almost any how.",
                author: "Friedrich Nietzsche",
                leagueBadge: "⚡ EXISTENTIALISM",
                authorImg: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Nietzsche1879.jpg",
                synthesis: "Purpose acts as a powerful cognitive buffer against existential hardship and physical strain.",
                fact: "Published in 'Twilight of the Idols' in 1889, exploring human endurance through psychological intent.",
                details: {
                    role: "19th-Century German Philosopher & Cultural Critic",
                    beliefs: "Self-overcoming (Übermensch), Amor Fati (love of fate), and personal creation of meaning.",
                    achievements: "Profoundly influenced 20th-century literature, psychology, and existentialist thought.",
                    trivia: "Nietzsche wrote many of his greatest works while hiking long distances through the Swiss Alps."
                }
            },
            {
                id: "philosophy-3",
                quote: "The unexamined life is not worth living.",
                author: "Socrates",
                leagueBadge: "⚖️ CLASSICAL LOGIC",
                authorImg: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Socrates_Louvre.jpg",
                synthesis: "Self-reflection is the prerequisite for intentional living; without it, actions are automated responses.",
                fact: "Spoken during Socrates' trial in Athens in 399 BCE as he defended his practice of questioning dogma.",
                details: {
                    role: "Father of Western Philosophy",
                    beliefs: "Socratic Method (relentless questioning), pursuit of wisdom over material wealth, and intellectual humility.",
                    achievements: "Transformed philosophical inquiry from studying physics to evaluating ethics and human behavior.",
                    trivia: "Socrates wrote down none of his own teachings; everything known about him comes from Plato and Xenophon."
                }
            },
            {
                id: "philosophy-4",
                quote: "You have power over your mind - not outside events. Realize this, and you will find strength.",
                author: "Marcus Aurelius",
                leagueBadge: "🏛️ STOICISM",
                authorImg: "https://upload.wikimedia.org/wikipedia/commons/2/22/Marcus_Aurelius_Louvre_MR561.jpg",
                synthesis: "Distinguish strictly between external events beyond control and internal interpretations within command.",
                fact: "Written in his private journals, published posthumously as 'Meditations', composed during military campaigns.",
                details: {
                    role: "Roman Emperor & Stoic Philosopher",
                    beliefs: "Duty, rational self-command, cosmic perspective, and emotional resilience under extreme pressure.",
                    achievements: "Successfully ruled the Roman Empire during plague, war, and economic crisis while maintaining inner virtue.",
                    trivia: "Aurelius never intended his 'Meditations' to be published; they were private daily personal reminders."
                }
            },
            {
                id: "philosophy-5",
                quote: "Waste no more time arguing about what a good man should be. Be one.",
                author: "Epictetus",
                leagueBadge: "📜 LATE STOICISM",
                authorImg: "https://upload.wikimedia.org/wikipedia/commons/0/00/Epictetus_statue.jpg",
                synthesis: "Theoretical ethics are meaningless without active, observable moral conduct in everyday behavior.",
                fact: "Epictetus was born into slavery in Hierapolis before earning his freedom and teaching philosophy in Rome and Greece.",
                details: {
                    role: "Greek Stoic Philosopher & Teacher",
                    beliefs: "Dichotomy of control, moral autonomy, and philosophical discipline through real-world trial.",
                    achievements: "His discourses were recorded by his pupil Arrian in 'Enchiridion' (The Handbook for Living).",
                    trivia: "Despite severe physical disability caused by his former master, Epictetus taught that physical constraints cannot enslave the mind."
                }
            }
        ]
    }
};

/* =======================================================================
   STATE MANAGEMENT & NON-REPEATING LOGIC
   ======================================================================= */

let currentCategory = 'sports';
let activeItem = null;
let savedBookmarks = [];
const lastIndices = { sports: -1, film: -1, philosophy: -1 };

/**
 * Image Error Fallback: Generates a styled SVG avatar if image fails to load
 */
function handleImageError(imgElement) {
    const initials = activeItem ? activeItem.author.split(' ').map(n => n[0]).join('') : 'DS';
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
        <rect width="100%" height="100%" fill="#0f172a"/>
        <circle cx="400" cy="400" r="280" fill="#1e293b" stroke="rgba(255,255,255,0.2)" stroke-width="8"/>
        <text x="50%" y="54%" font-family="sans-serif" font-weight="900" font-size="160" fill="#38bdf8" text-anchor="middle" dominant-baseline="middle">${initials}</text>
    </svg>`;
    imgElement.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

/**
 * Ensures non-repeating quote selection on consecutive button presses
 */
function getRandomUniqueItem(list, categoryKey) {
    if (!list || list.length === 0) return null;
    if (list.length === 1) return list[0];
    
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * list.length);
    } while (newIndex === lastIndices[categoryKey]);

    lastIndices[categoryKey] = newIndex;
    return list[newIndex];
}

/**
 * Updates selected category and regenerates UI
 */
function selectCategory(categoryName) {
    if (!APP_DATA[categoryName]) return;
    currentCategory = categoryName;
    
    // Update active tab styling
    document.querySelectorAll('.cat-tab').forEach(btn => {
        const cat = btn.dataset.cat || btn.getAttribute('onclick')?.match(/'([^']+)'/)?.[1];
        if (cat === categoryName) {
            btn.className = "cat-tab active px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all duration-300 bg-sky-500/20 text-sky-300 border border-sky-400/30 shadow-lg shadow-sky-500/20";
        } else {
            btn.className = "cat-tab px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all duration-300 text-slate-400 hover:text-white hover:bg-white/5";
        }
    });

    generateInsight();
}

/**
 * Toggles the Further Insight dropdown section
 */
function toggleFurtherInsight() {
    const box = document.getElementById('synthesisBox');
    const icon = document.getElementById('synthesisToggleIcon');
    if (!box) return;

    const isHidden = box.classList.contains('hidden');
    if (isHidden) {
        box.classList.remove('hidden');
        if (icon) icon.textContent = '▲ Hide';
    } else {
        box.classList.add('hidden');
        if (icon) icon.textContent = '▼ Reveal';
    }
}

/**
 * Main function to generate and render a new wisdom spark
 */
function generateInsight() {
    const categoryData = APP_DATA[currentCategory];
    if (!categoryData) return;

    activeItem = getRandomUniqueItem(categoryData.items, currentCategory);
    if (!activeItem) return;

    // Update dynamic background class
    const bgLayer = document.getElementById('bgLayer');
    if (bgLayer) {
        bgLayer.className = `fixed inset-0 z-0 ${categoryData.bgClass} transition-all duration-700`;
    }

    // Update generate button text
    const btnLabel = document.getElementById('generateBtnLabel');
    if (btnLabel) {
        btnLabel.textContent = categoryData.buttonText;
    }

    // Update badges and image
    const categoryBadge = document.getElementById('categoryBadge');
    if (categoryBadge) categoryBadge.textContent = categoryData.badgeText;

    const leagueBadge = document.getElementById('leagueOverlayBadge');
    if (leagueBadge) leagueBadge.textContent = activeItem.leagueBadge;

    const avatar = document.getElementById('authorAvatar');
    if (avatar) {
        avatar.src = activeItem.authorImg;
        avatar.alt = activeItem.author;
    }

    // Update quote and authors
    const quoteText = document.getElementById('quoteText');
    if (quoteText) quoteText.textContent = `"${activeItem.quote}"`;

    const quoteAuthor = document.getElementById('quoteAuthor');
    if (quoteAuthor) quoteAuthor.textContent = `— ${activeItem.author}`;

    // Update Further Insight and Historical Context
    const synthesisText = document.getElementById('synthesisText');
    if (synthesisText) synthesisText.textContent = activeItem.synthesis;

    const factText = document.getElementById('factText');
    if (factText) factText.textContent = activeItem.fact;

    // Reset bookmark button state
    updateBookmarkButtonState();

    // Trigger card entry animation
    const card = document.getElementById('displayCard');
    if (card) {
        card.classList.remove('card-entry-animation');
        void card.offsetWidth; // Force reflow
        card.classList.add('card-entry-animation');
    }
}

/* =======================================================================
   MODAL DIALOG MANAGEMENT & BOOKMARKS
   ======================================================================= */

function openDetailModal() {
    if (!activeItem) return;
    const modal = document.getElementById('detailModal');
    if (!modal) return;

    document.getElementById('modalCategoryBadge').textContent = APP_DATA[currentCategory].badgeText;
    document.getElementById('modalAuthorImg').src = activeItem.authorImg;
    document.getElementById('modalAuthorName').textContent = activeItem.author;
    document.getElementById('modalAuthorRole').textContent = activeItem.details.role;
    document.getElementById('modalBeliefs').textContent = activeItem.details.beliefs;
    document.getElementById('modalAchievements').textContent = activeItem.details.achievements;
    document.getElementById('modalTrivia').textContent = activeItem.details.trivia;

    modal.classList.remove('opacity-0', 'pointer-events-none');
}

function closeDetailModal() {
    const modal = document.getElementById('detailModal');
    if (modal) modal.classList.add('opacity-0', 'pointer-events-none');
}

function toggleBookmarkCurrent() {
    if (!activeItem) return;

    const index = savedBookmarks.findIndex(b => b.id === activeItem.id);
    if (index > -1) {
        savedBookmarks.splice(index, 1);
    } else {
        savedBookmarks.push(activeItem);
    }

    updateBookmarkButtonState();
    updateBookmarkCount();
}

function updateBookmarkButtonState() {
    const btn = document.getElementById('bookmarkBtn');
    if (!btn || !activeItem) return;

    const isBookmarked = savedBookmarks.some(b => b.id === activeItem.id);
    btn.innerHTML = isBookmarked ? '★' : '☆';
    btn.className = isBookmarked
        ? "absolute top-4 right-4 w-10 h-10 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center transition-all shadow-lg"
        : "absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-900/80 border border-white/20 text-slate-300 hover:text-amber-400 flex items-center justify-center transition-all backdrop-blur-md";
}

function updateBookmarkCount() {
    const countEl = document.getElementById('bookmarkCount');
    if (countEl) countEl.textContent = savedBookmarks.length;
}

function openBookmarksModal() {
    const modal = document.getElementById('bookmarksModal');
    const list = document.getElementById('bookmarksList');
    if (!modal || !list) return;

    if (savedBookmarks.length === 0) {
        list.innerHTML = `<p class="text-slate-400 text-sm italic">No saved sparks yet. Click the star icon on any card to save it!</p>`;
    } else {
        list.innerHTML = savedBookmarks.map(item => `
            <div class="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start justify-between gap-4">
                <div>
                    <p class="font-serif italic text-sm text-slate-100">"${item.quote}"</p>
                    <p class="text-xs font-bold text-sky-400 mt-1">— ${item.author}</p>
                </div>
                <button onclick="removeBookmark('${item.id}')" class="text-rose-400 hover:text-rose-300 text-xs font-bold">Remove</button>
            </div>
        `).join('');
    }

    modal.classList.remove('opacity-0', 'pointer-events-none');
}

function closeBookmarksModal() {
    const modal = document.getElementById('bookmarksModal');
    if (modal) modal.classList.add('opacity-0', 'pointer-events-none');
}

function removeBookmark(id) {
    savedBookmarks = savedBookmarks.filter(b => b.id !== id);
    updateBookmarkCount();
    openBookmarksModal();
    updateBookmarkButtonState();
}

/**
 * Text-to-Speech narration engine
 */
function playAudioNarration() {
    if (!activeItem || !('speechSynthesis' in window)) {
        alert("Audio narration is not supported on this device/browser.");
        return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(`${activeItem.quote}. Spoken by ${activeItem.author}.`);
    utterance.rate = 0.95;
    utterance.pitch = 1.0;
    
    const status = document.getElementById('ttsStatus');
    if (status) status.textContent = "Playing narration...";

    utterance.onend = () => {
        if (status) status.textContent = "Listen to audio narration";
    };

    window.speechSynthesis.speak(utterance);
}

// Initial kickoff on DOM ready
window.addEventListener('DOMContentLoaded', () => {
    generateInsight();
});
