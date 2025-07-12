// Initialize AOS animations
AOS.init({
  duration: 800,
  easing: 'ease-out-cubic',
  once: true,
  offset: 100,
});

// Smooth scroll for anchor links
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

// Optional: Parallax hero effect
const hero = document.querySelector('.hero-section');
window.addEventListener('scroll', () => {
  if (hero) {
    const scrollY = window.scrollY;
    hero.style.backgroundPosition = `center ${scrollY * 0.3}px`;
  }
});

// Optional: Floating effect on cards
const floatCards = document.querySelectorAll('.card');
floatCards.forEach(card => {
  card.addEventListener('mousemove', e => {
    const { offsetX, offsetY } = e;
    const centerX = card.offsetWidth / 2;
    const centerY = card.offsetHeight / 2;
    const rotateX = (offsetY - centerY) / 15;
    const rotateY = (centerX - offsetX) / 15;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0) rotateY(0)';
  });
});