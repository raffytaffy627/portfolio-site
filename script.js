// Subtle reveal-on-scroll for project cards.
const cards = document.querySelectorAll('.project-card');

if ('IntersectionObserver' in window && cards.length) {
  cards.forEach((card) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(16px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  cards.forEach((card) => observer.observe(card));
}
