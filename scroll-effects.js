// ===== Navbar scroll =====
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== Animació parallax minimalista =====
const parallaxSections = document.querySelectorAll('.parallax');
const handleScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  parallaxSections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
};
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

// ===== Aparició suau (fade-in) de seccions =====
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fade-section, .hero-content");
  const options = { threshold: 0.2 };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, options);

  sections.forEach(sec => observer.observe(sec));
});
