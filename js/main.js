// ===================================
// SMOOTH SCROLLING & NAVIGATION
// ===================================

// Navigation toggle for mobile
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===================================
// PROJECT FILTERING
// ===================================

const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        // Filter projects
        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');

            if (filter === 'all' || category === filter) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// ===================================
// ANIMATIONS ON SCROLL
// ===================================

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';

            // Trigger number animation if it's a metric
            if (entry.target.classList.contains('metric-item')) {
                animateNumber(entry.target);
            }
        }
    });
}, observerOptions);

// Observe project cards (already declared above for filtering)
projectCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Observe skill items
const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = `all 0.5s ease ${index * 0.05}s`;
    observer.observe(item);
});

// Observe metric items
const metricItems = document.querySelectorAll('.metric-item');
metricItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = `all 0.7s ease ${index * 0.1}s`;
    observer.observe(item);
});

// ===================================
// ANIMATED NUMBER COUNTER
// ===================================

function animateNumber(element) {
    const numberElement = element.querySelector('.metric-number');
    if (!numberElement || numberElement.dataset.animated === 'true') return;

    const finalValue = numberElement.textContent;
    const numericValue = parseInt(finalValue.replace(/\D/g, ''));
    const suffix = finalValue.replace(/[0-9]/g, '');
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepValue = numericValue / steps;
    const stepDuration = duration / steps;

    let currentValue = 0;
    numberElement.textContent = '0' + suffix;

    const counter = setInterval(() => {
        currentValue += stepValue;
        if (currentValue >= numericValue) {
            numberElement.textContent = finalValue;
            clearInterval(counter);
            numberElement.dataset.animated = 'true';
        } else {
            numberElement.textContent = Math.floor(currentValue) + suffix;
        }
    }, stepDuration);
}

// ===================================
// TYPING EFFECT
// ===================================

const heroRole = document.querySelector('.hero-role');
if (heroRole) {
    const text = heroRole.textContent;
    heroRole.textContent = '';
    let i = 0;

    const typeWriter = () => {
        if (i < text.length) {
            heroRole.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };

    // Start typing after page load
    window.addEventListener('load', () => {
        setTimeout(typeWriter, 500);
    });
}

// ===================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// PERFORMANCE: LAZY LOADING
// ===================================

// Lazy load images if any are added later
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => imageObserver.observe(img));
}

// ===================================
// CONSOLE EASTER EGG
// ===================================

console.log('%c👋 ¡Hola, developer!', 'font-size: 20px; font-weight: bold; color: #00ff88;');
console.log('%c🤖 Este portfolio fue desarrollado con Botpress', 'font-size: 14px; color: #0088ff;');
console.log('%c📧 ¿Interesado/a en trabajar juntos? Contactame!', 'font-size: 12px; color: #a8b2d1;');
