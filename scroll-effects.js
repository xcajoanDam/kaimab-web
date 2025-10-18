// Navbar opacitat al fer scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Animació minimalista per parallax i text
const parallaxSections = document.querySelectorAll('.parallax');
const handleScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  parallaxSections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < triggerBottom){
      section.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);
