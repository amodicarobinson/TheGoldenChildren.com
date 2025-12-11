// Navigation logic
document.addEventListener('DOMContentLoaded', function() {
  // Active Page Highlighting
  const currentPage = window.location.pathname.split('/').pop() || '';
  const navLinks = document.querySelectorAll('.nav a');

  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    // Simple check: if href ends with the current path
    if (linkPage === window.location.pathname ||
       (window.location.pathname === '/' && linkPage.endsWith('home')) ||
       (linkPage.includes(currentPage) && currentPage !== '')) {
      link.setAttribute('aria-current', 'page');
    }
  });

  // Mobile Navigation Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
      navToggle.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
        navToggle.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !navToggle.contains(e.target) && nav.classList.contains('active')) {
        nav.classList.remove('active');
        navToggle.classList.remove('active');
      }
    });
  }
});

// Scroll Animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Only animate once
    }
  });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});
