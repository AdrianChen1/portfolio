// Main JavaScript - Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    initNavigation();
    initScrollAnimations();
    // initGallery(); // Not defined yet
    initMorphingImages();

    // Add smooth scrolling for anchor links
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

    // Update active navigation on scroll
    updateActiveNav();
    window.addEventListener('scroll', updateActiveNav);
});

// Update active navigation item based on scroll position
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Utility function for debouncing
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Initialize morphing images animation
function initMorphingImages() {
    const morphingSection = document.getElementById('morphing-section');
    if (!morphingSection) {
        return;
    }

    const img1 = document.getElementById('morph-img-1');
    const img2 = document.getElementById('morph-img-2');
    const img3 = document.getElementById('morph-img-3');
    const captionTitle = document.getElementById('morph-title');
    const captionLocation = document.getElementById('morph-location');
    const awardBadge = document.getElementById('morph-award');

    if (!img1 || !img2 || !img3 || !captionTitle || !captionLocation) {
        return;
    }

    const captions = [
        {
            title: 'Onward!',
            location: 'Using my tripod & half exposure technique, I capture myself in regimental uniform as streaks of light emit behind me from a car, blended by the long exposure.',
            award: 'silver'
        },
        {
            title: 'The Carpenter',
            location: 'Reenactor saws wood; captured in Plymouth Patuxet Historical Museum.',
            award: null
        },
        {
            title: 'Remembrance',
            location: 'A Lexington reenactor walks along the reservoir at dusk, where Revolutionary memory and present-day landscape quietly intersect.',
            award: 'honorable'
        }
    ];

    let currentCaption = 0;

    function updateCaption(newIndex) {
        if (currentCaption !== newIndex) {
            // Fade out
            captionTitle.style.opacity = '0';
            captionLocation.style.opacity = '0';
            if (awardBadge) awardBadge.style.opacity = '0';

            // Wait for fade out, then update text and fade in
            setTimeout(() => {
                captionTitle.textContent = captions[newIndex].title;
                captionLocation.textContent = captions[newIndex].location;
                currentCaption = newIndex;

                // Apply special positioning for Carpenter on mobile
                const captionContainer = document.getElementById('morph-caption');
                if (captionContainer) {
                    if (newIndex === 1) { // Carpenter is index 1
                        captionContainer.classList.add('carpenter-position');
                    } else {
                        captionContainer.classList.remove('carpenter-position');
                    }
                }

                // Update award badge content
                if (awardBadge) {
                    if (captions[newIndex].award === 'silver') {
                        awardBadge.innerHTML = `
                            <p style="font-size: 0.9rem; font-weight: 500; margin: 0 0 12px 0; color: #1C1C1C; line-height: 1.4;">
                                Scholastic Art & Writing Awards (Regional) — Silver Key (Photography)</p>
                            <img src="images/photography/SilverKey.png" alt="Silver Key Award"
                                style="width: 80px; height: auto; display: block; margin: 0 auto;">
                        `;
                    } else if (captions[newIndex].award === 'honorable') {
                        awardBadge.innerHTML = `
                            <p style="font-size: 0.9rem; font-weight: 500; margin: 0; color: #1C1C1C; line-height: 1.4;">
                                Scholastic Art & Writing Awards (Regional) — Honorable Mention (Photography)</p>
                        `;
                    } else {
                        awardBadge.innerHTML = '';
                    }
                }

                // Fade in
                setTimeout(() => {
                    captionTitle.style.opacity = '1';
                    captionLocation.style.opacity = '1';
                    if (awardBadge && captions[newIndex].award) {
                        awardBadge.style.opacity = '1';
                    }
                }, 150);
            }, 600);
        }
    }

    function updateMorphing() {
        const sectionTop = morphingSection.offsetTop;
        const sectionHeight = morphingSection.offsetHeight;
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        // How far we've scrolled into the section (can be negative if we haven't reached it yet)
        const scrollIntoSection = scrollY - sectionTop;

        // Only animate when we're actually in the section
        if (scrollIntoSection < 0) {
            // Before section - show first image
            img1.style.opacity = '1';
            img2.style.opacity = '0';
            img3.style.opacity = '0';
            updateCaption(0);
            return;
        }

        if (scrollIntoSection > sectionHeight) {
            // After section - show last image
            img1.style.opacity = '0';
            img2.style.opacity = '0';
            img3.style.opacity = '1';
            updateCaption(2);
            return;
        }

        // Calculate progress (0 to 1) through the section
        const progress = scrollIntoSection / sectionHeight;

        // Update images based on progress through the section
        if (progress < 0.33) {
            // First third: transition from image 1 to image 2
            const localProgress = progress / 0.33; // 0 to 1 within this third
            img1.style.opacity = String(1 - localProgress);
            img2.style.opacity = String(localProgress);
            img3.style.opacity = '0';

            // Update caption at halfway point (0.5 opacity) for smooth transitions
            if (localProgress < 0.5) {
                updateCaption(0);
            } else {
                updateCaption(1);
            }
        } else if (progress < 0.66) {
            // Second third: transition from image 2 to image 3
            const localProgress = (progress - 0.33) / 0.33; // 0 to 1 within this third
            img1.style.opacity = '0';
            img2.style.opacity = String(1 - localProgress);
            img3.style.opacity = String(localProgress);

            // Update caption at halfway point (0.5 opacity) for smooth transitions
            if (localProgress < 0.5) {
                updateCaption(1);
            } else {
                updateCaption(2);
            }
        } else {
            // Final third: show image 3
            img1.style.opacity = '0';
            img2.style.opacity = '0';
            img3.style.opacity = '1';
            updateCaption(2);
        }
    }

    window.addEventListener('scroll', updateMorphing);
    window.addEventListener('resize', updateMorphing);

    // Initial update after a short delay to ensure page is fully loaded
    setTimeout(() => {
        updateMorphing();
    }, 500);
}

// Add page transition effect
window.addEventListener('load', () => {
    document.body.classList.add('page-transition');
});
