// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Add subtle parallax to hero
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero-content');
    const scrolled = window.scrollY;
    if (scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - (scrolled / 600);
    }
});

// Fallback for missing images
const imgFallbacks = {
    'profileImg': '🎮',
    'beatdropImg': '🎵',
    'urlImg': '🔗',
    'portalImg': '📚'
};

Object.keys(imgFallbacks).forEach(id => {
    const img = document.getElementById(id);
    if (img) {
        img.onerror = function() {
            const parent = this.parentElement;
            parent.innerHTML = `<div style="font-size: 5rem;">${imgFallbacks[id]}</div>`;
        };
    }
});
