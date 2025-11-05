// Typewriter Effect with Multiple Texts
const texts = ["Frontend Developer", "AI/ML Enthusiast", "Problem Solver", "Tech Explorer"];
let count = 0;
let index = 0;
const speed = 100;
const typewriter = document.getElementById("typewriter");

function type() {
  const currentText = texts[count];
  typewriter.textContent = currentText.slice(0, index + 1);
  index++;

  if (index === currentText.length) {
    setTimeout(() => {
      index = 0;
      count = (count + 1) % texts.length;
      type();
    }, 1200);
  } else {
    setTimeout(type, speed);
  }
}

// Start typing when DOM is ready
window.addEventListener("DOMContentLoaded", type);

// Hamburger Menu Toggle - Desktop
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Hamburger Menu Toggle - Mobile
const hamburgerMobile = document.getElementById('hamburger-mobile');
const mobileMenu = document.getElementById('mobile-menu');

// Toggle desktop menu
if (hamburger) {
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('active');
  });
}

// Toggle mobile menu
if (hamburgerMobile) {
  hamburgerMobile.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileMenu.classList.toggle('active');
  });
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (mobileMenu && !mobileMenu.contains(e.target) && !hamburgerMobile.contains(e.target)) {
    mobileMenu.classList.remove('active');
  }
  if (navLinks && !navLinks.contains(e.target) && hamburger && !hamburger.contains(e.target)) {
    navLinks.classList.remove('active');
  }
});

// Dark Mode Toggle
const toggle = document.getElementById('dark-toggle');
const themeIcon = document.querySelector('.theme-icon');
const toggleMenu = document.getElementById('dark-toggle-menu');

// Initialize theme with dark as default
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  
  // If no saved theme, default to dark
  if (!savedTheme || savedTheme === 'dark') {
    document.body.classList.add('dark');
    updateThemeIcons(true);
    // Save dark as default if not already saved
    if (!savedTheme) {
      localStorage.setItem('theme', 'dark');
    }
  } else {
    document.body.classList.remove('dark');
    updateThemeIcons(false);
  }
}

// Update all theme icons
function updateThemeIcons(isDark) {
  if (themeIcon) {
    themeIcon.textContent = isDark ? '🌙' : '☀️';
  }
  
  if (toggleMenu) {
    const iconSpan = toggleMenu.querySelector('.icon-menu');
    if (iconSpan) {
      iconSpan.textContent = isDark ? '☀️' : '🌙';
    }
    const textNode = toggleMenu.childNodes[toggleMenu.childNodes.length - 1];
    if (textNode && textNode.nodeType === Node.TEXT_NODE) {
      textNode.textContent = isDark ? ' Light Mode' : ' Dark Mode';
    }
  }
}

// Toggle theme function
function toggleTheme() {
  const isDark = document.body.classList.toggle('dark');
  
  // Update icons
  updateThemeIcons(isDark);
  
  // Save preference
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Add event listeners
if (toggle) {
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    toggleTheme();
  });
}

if (toggleMenu) {
  toggleMenu.addEventListener('click', (e) => {
    e.preventDefault();
    toggleTheme();
  });
}

// Smooth Scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===== Scroll Reveal Animation =====
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;
  const revealPoint = 100; // how early animation should trigger

  reveals.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add('active');
    } else {
      element.classList.remove('active'); // optional (for repeat animation)
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Initialize theme on page load
initTheme();