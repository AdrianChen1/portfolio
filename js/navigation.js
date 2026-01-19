// Navigation functionality
function initNavigation() {
  const nav = document.querySelector('.nav');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navItems = document.querySelectorAll('.nav-item');
  let lastScrollY = window.scrollY;
  
  // Mobile menu toggle
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
  }
  
  // Close mobile menu when clicking a link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
  
  // Mobile dropdown toggle
  navItems.forEach(item => {
    const hasDropdown = item.querySelector('.nav-dropdown');
    if (hasDropdown && window.innerWidth <= 768) {
      item.addEventListener('click', (e) => {
        if (e.target.closest('.nav-link') && !e.target.closest('.nav-dropdown')) {
          e.preventDefault();
          item.classList.toggle('active');
        }
      });
    }
  });
  
  // Hide/show navigation on scroll
  const handleScroll = debounce(() => {
    const currentScrollY = window.scrollY;
    
    // Add scrolled class for styling
    if (currentScrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    
    // Hide nav on scroll down, show on scroll up
    if (currentScrollY > lastScrollY && currentScrollY > 200) {
      nav.classList.add('hidden');
    } else {
      nav.classList.remove('hidden');
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
  
  if (window.innerWidth > 768) {
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
  }
}, 250));
