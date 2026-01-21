document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Animación de revelado (Scroll Reveal)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Aplicar a títulos y tarjetas
    document.querySelectorAll('.reveal, .service-card').forEach(el => {
        el.style.opacity = "0";
        el.style.transition = "all 0.8s ease-out";
        observer.observe(el);
    });

    // Función simple para manejar la opacidad al entrar en vista
    window.addEventListener('scroll', () => {
        document.querySelectorAll('.visible').forEach(el => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        });
    });

    // 2. Efecto de clic en tarjetas
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const service = card.getAttribute('data-service');
            console.log(`Roostix: Cargando solución para ${service}...`);
            // Aquí podrías redirigir a una página específica
        });
    });
});