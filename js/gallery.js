// Photography Gallery functionality
function initGallery() {
    // Gallery items are now links to detail pages
    // No lightbox needed - simple link navigation
    console.log('Gallery initialized with detail page navigation');
}

// Filter gallery by category (if needed in future)
function initGalleryFilter() {
    const filterButtons = document.querySelectorAll('[data-filter]');
    const galleryItems = document.querySelectorAll('[data-category]');

    if (filterButtons.length === 0) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter items
            galleryItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = '';
                    setTimeout(() => item.classList.add('visible'), 10);
                } else {
                    item.classList.remove('visible');
                    setTimeout(() => item.style.display = 'none', 300);
                }
            });
        });
    });
}

// Initialize gallery features
document.addEventListener('DOMContentLoaded', () => {
    initGallery();
    initGalleryFilter();
});
