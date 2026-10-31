// Typing effect (typed.js loads before this file)
if (document.getElementById('text') && typeof Typed !== 'undefined') {
    new Typed('#text', {
        strings: ['Frontend Developer', 'Web Designer', 'UI/UX Enthusiast', 'Tech Enthusiast'],
        typeSpeed: 70,
        backSpeed: 40,
        backDelay: 1400,
        loop: true
    });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Header shadow on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile menu
const toggle = document.getElementById('menuToggle');
const navbar = document.getElementById('navbar');
if (toggle && navbar) {
    toggle.addEventListener('click', () => {
        const open = navbar.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open);
        toggle.firstElementChild.className = open ? 'bx bx-x' : 'bx bx-menu';
    });
    navbar.querySelectorAll('a').forEach(link =>
        link.addEventListener('click', () => {
            navbar.classList.remove('open');
            toggle.setAttribute('aria-expanded', false);
            toggle.firstElementChild.className = 'bx bx-menu';
        })
    );
}

// Reveal on scroll + animated skill bars
const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        entry.target.querySelectorAll('.bar').forEach(bar => {
            const fill = bar.querySelector('.track span');
            if (fill) fill.style.width = bar.dataset.level + '%';
        });
        io.unobserve(entry.target);
    });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Active nav link on scroll
const sections = document.querySelectorAll('main section[id]');
const links = document.querySelectorAll('.navbar a[href^="#"]');
const spy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + entry.target.id));
    });
}, { rootMargin: '-45% 0px -50% 0px' });
sections.forEach(s => spy.observe(s));

// Lightbox (gallery page)
const lightbox = document.getElementById('lightbox');
if (lightbox) {
    const big = lightbox.querySelector('img');
    document.querySelectorAll('.gallery-grid button').forEach(btn =>
        btn.addEventListener('click', () => {
            big.src = btn.querySelector('img').src;
            lightbox.classList.add('open');
        })
    );
    lightbox.addEventListener('click', () => lightbox.classList.remove('open'));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') lightbox.classList.remove('open'); });
}
