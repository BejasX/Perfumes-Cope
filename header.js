// header.js
document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("main-header");

  if (!header) return;

  // Detecta si estás en una subcarpeta (como /productos/)
  const esSubcarpeta = window.location.pathname.split("/").length > 2;

  // Si estás en una subcarpeta, usá ../ para volver a raíz
  const base = esSubcarpeta ? "../" : "";

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