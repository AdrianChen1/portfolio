// Photography Gallery functionality
function initGallery() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = createLightbox();
  
  if (galleryItems.length === 0) return;
  
  let currentIndex = 0;
  const images = Array.from(galleryItems).map(item => ({
    src: item.querySelector('img').src,
    alt: item.querySelector('img').alt,
    title: item.querySelector('.gallery-title')?.textContent || ''
  }));
  
  // Add click event to gallery items
  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      currentIndex = index;
      openLightbox(images[index]);
    });
  });
  
  // Create lightbox element
  function createLightbox() {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
      <div class="lightbox-content">
        <button class="lightbox-close" aria-label="Close">&times;</button>
        <button class="lightbox-prev lightbox-nav" aria-label="Previous">&lsaquo;</button>
        <img class="lightbox-image" src="" alt="">
        <button class="lightbox-next lightbox-nav" aria-label="Next">&rsaquo;</button>
      </div>
    `;
    document.body.appendChild(lightbox);
    
    // Close button
    lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    
    // Navigation buttons
    lightbox.querySelector('.lightbox-prev').addEventListener('click', () => showImage(-1));
    lightbox.querySelector('.lightbox-next').addEventListener('click', () => showImage(1));
    
    // Close on background click
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('active')) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showImage(-1);
      if (e.key === 'ArrowRight') showImage(1);
    });
    
    return lightbox;
  }
  
  // Open lightbox with image
  function openLightbox(image) {
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  
  // Close lightbox
  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
  
  // Navigate images
  function showImage(direction) {
    currentIndex += direction;
    
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    lightboxImage.style.opacity = '0';
    
    setTimeout(() => {
      lightboxImage.src = images[currentIndex].src;
      lightboxImage.alt = images[currentIndex].alt;
      lightboxImage.style.opacity = '1';
    }, 200);
  }
}

// Masonry layout initialization (if using masonry)
function initMasonry() {
  const masonryContainer = document.querySelector('.gallery-masonry');
  if (!masonryContainer) return;
  
  // Trigger layout recalculation after images load
  const images = masonryContainer.querySelectorAll('img');
  let loadedImages = 0;
  
  images.forEach(img => {
    if (img.complete) {
      loadedImages++;
    } else {
      img.addEventListener('load', () => {
        loadedImages++;
        if (loadedImages === images.length) {
          // All images loaded, layout is complete
          masonryContainer.style.opacity = '1';
        }
      });
    }
  });
  
  if (loadedImages === images.length) {
    masonryContainer.style.opacity = '1';
  }
}

// Filter gallery by category
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
  initMasonry();
  initGalleryFilter();
});
