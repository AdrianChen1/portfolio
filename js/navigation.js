// Navigation functionality
function initNavigation() {
    const nav = document.querySelector('.nav');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navItems = document.querySelectorAll('.nav-item');
    let lastScrollY = window.scrollY;

    // Create backdrop for mobile menu
    const backdrop = document.createElement('div');
    backdrop.classList.add('nav-backdrop');
    document.body.appendChild(backdrop);

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            const isActive = navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            backdrop.classList.toggle('active');

            // Lock/unlock body scroll
            if (isActive) {
                document.body.style.overflow = 'hidden';
                document.body.style.position = 'fixed';
                document.body.style.width = '100%';
            } else {
                document.body.style.overflow = '';
                document.body.style.position = '';
                document.body.style.width = '';
            }
        });
    }

    // Close mobile menu when clicking backdrop
    backdrop.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        backdrop.classList.remove('active');
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
    });

    // Close mobile menu when clicking a link (but allow navigation)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                const parentItem = link.closest('.nav-item');
                const hasDropdown = parentItem && parentItem.querySelector('.nav-dropdown');

                // Always allow the link to work - just close menu after a delay
                setTimeout(() => {
                    navToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                    backdrop.classList.remove('active');
                    document.body.style.overflow = '';
                    document.body.style.position = '';
                    document.body.style.width = '';
                }, 150);
            }
        });
    });

    // Close mobile menu when clicking dropdown links
    document.querySelectorAll('.nav-dropdown-link').forEach(link => {
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                // Stop propagation to prevent parent link from firing
                e.stopPropagation();
                setTimeout(() => {
                    navToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                    backdrop.classList.remove('active');
                    document.body.style.overflow = '';
                    document.body.style.position = '';
                    document.body.style.width = '';
                }, 150);
            }
        });
    });

    // Update navigation style on scroll (glass effect)
    const handleScroll = debounce(() => {
        const currentScrollY = window.scrollY;

        // Add scrolled class for enhanced glass effect
        if (currentScrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        lastScrollY = currentScrollY;
    }, 10);

    window.addEventListener('scroll', handleScroll);

    // Handle dropdown on desktop
    if (window.innerWidth > 768) {
        navItems.forEach(item => {
            const dropdown = item.querySelector('.nav-dropdown');
            if (dropdown) {
                item.addEventListener('mouseenter', () => {
                    dropdown.style.display = 'block';
                });
                item.addEventListener('mouseleave', () => {
                    dropdown.style.display = 'none';
                });
            }
        });
    }
}

// Update navigation on resize
window.addEventListener('resize', debounce(() => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const backdrop = document.querySelector('.nav-backdrop');

    if (window.innerWidth > 768) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        if (backdrop) {
            backdrop.classList.remove('active');
        }
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
    }
}, 250));
