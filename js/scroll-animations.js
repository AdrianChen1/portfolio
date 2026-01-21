// Scroll-based reveal animations using Intersection Observer
function initScrollAnimations() {
    // Configuration for Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '100px 0px',
        threshold: 0.05
    };

    // Callback function for observer
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Once animated, stop observing to prevent re-triggering
                observer.unobserve(entry.target);
            }
        });
    };

    // Create observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all elements with reveal classes
    const revealElements = document.querySelectorAll('.reveal, .reveal-stagger, .scale-in, .slide-in-left, .slide-in-right, .fade-in-up');

    revealElements.forEach(element => {
        observer.observe(element);
    });

    // Animate elements on scroll with custom delay
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('[data-animate]');

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const isVisible = (elementTop < window.innerHeight - 100) && (elementBottom > 0);

            if (isVisible) {
                element.classList.add('animated');
            }
        });
    };

    window.addEventListener('scroll', debounce(animateOnScroll, 10));
    animateOnScroll(); // Run on load
}

// Parallax effect for hero sections
function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');

    const handleParallax = () => {
        const scrolled = window.pageYOffset;

        parallaxElements.forEach(element => {
            const speed = element.dataset.parallax || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    };

    if (parallaxElements.length > 0) {
        window.addEventListener('scroll', debounce(handleParallax, 10));
    }
}

// Counter animation for statistics
function animateCounters() {
    const counters = document.querySelectorAll('[data-counter]');

    counters.forEach(counter => {
        const target = parseInt(counter.dataset.counter);
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };

        // Start animation when element is in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(counter);
    });
}

// Initialize parallax and counters
document.addEventListener('DOMContentLoaded', () => {
    initParallax();
    animateCounters();
});
