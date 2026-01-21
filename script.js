let currentLanguage = localStorage.getItem('language') || 'en';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize language
    setLanguage(currentLanguage);
    
    // Language switcher buttons
    initLanguageSwitcher();
    
    // Scroll reveal animation
    initScrollReveal();
    
    // Service card interactions
    initServiceCards();
});

function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.target.id.split('-')[1];
            setLanguage(lang);
        });
    });
}

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update all elements with data-key attribute
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active-lang', 'bg-sky-600', 'text-white');
        btn.classList.add('hover:bg-sky-600', 'text-gray-300');
    });
    
    const activeBtn = document.getElementById(`lang-${lang}`);
    if (activeBtn) {
        activeBtn.classList.add('active-lang', 'bg-sky-600', 'text-white');
        activeBtn.classList.remove('hover:bg-sky-600', 'text-gray-300');
    }
}

function initScrollReveal() {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal, .card-hover').forEach(el => {
        observer.observe(el);
    });
}

function initServiceCards() {
    document.querySelectorAll('.card-hover').forEach(card => {
        card.addEventListener('click', () => {
            const service = card.querySelector('h3')?.textContent || 'Service';
            console.log(`Roostix: Loading ${service}...`);
        });
    });
}