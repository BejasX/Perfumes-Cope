
// scripts.js
document.addEventListener('DOMContentLoaded', () => {
  const filtro = document.getElementById('filtro');
if (filtro) {
  filtro.addEventListener('change', () => {
    const valor = filtro.value;
    document.querySelectorAll('.producto').forEach(p => {
      p.style.display = (valor === 'todos' || p.classList.contains(valor)) ? 'block' : 'none';
    });
  });
}
  const elements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  });
  elements.forEach(el => observer.observe(el));
});
