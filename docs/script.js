// script.js
// Add any interactive features here (optional)

document.addEventListener('DOMContentLoaded', () => {
  console.log("R&DBC site loaded");

  // Example: Smooth scroll for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Example: Highlight current weekday if needed (placeholder)
  const today = new Date().getDay();
  if (today === 2) { // Tuesday
    document.querySelector('h2')?.classList.add('highlight');
  }
});
