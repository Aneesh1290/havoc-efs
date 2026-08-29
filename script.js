// Havoc EFS — script.js
// Minor interactivity

// Smooth nav active state on scroll
document.addEventListener('DOMContentLoaded', () => {

  // Newsletter subscribe feedback
  const form = document.getElementById('newsletter-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('newsletter-email');
      const btn = document.getElementById('btn-subscribe');
      if (input.value && input.value.includes('@')) {
        btn.textContent = '✓ Subscribed!';
        btn.style.background = '#27ae60';
        input.value = '';
        setTimeout(() => {
          btn.innerHTML = 'SUBSCRIBE NOW <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';
          btn.style.background = '';
        }, 3000);
      }
    });
  }

  // Navbar link active on click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Scroll reveal (simple fade-in)
  const revealEls = document.querySelectorAll('.card-aviation, .card-racing, .why-item, .stat-item, .bottom-card, .event-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
    observer.observe(el);
  });

});
