document.addEventListener('DOMContentLoaded', () => {
    // Scroll reveal animation
    initScrollReveal();
    
    // Service card interactions
    initServiceCards();
});

function initScrollReveal() {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal, .service-card').forEach(el => {
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