// header.js
document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("main-header");
  if (!header) return;

  // Base para GitHub Pages
  const base = "/Perfumes-Cope/";

  header.innerHTML = `
    <h1>SENZIA</h1>
    <nav>
      <a href="${base}index.html">Inicio</a>
      <a href="${base}catalogo.html">Catálogo</a>
      <a href="${base}quienes-somos.html">Quiénes somos</a>
      <a href="${base}contacto.html">Contacto</a>
    </nav>
  `;
});
