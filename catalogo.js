const productos = [
  {
    nombre: "Xerjoff – Erba Pura",
    tipo: "Oriental",
    presentacion: "50ml - Ámbar y vainilla",
    imagen: "img/Xerjoff.png",
    enlace: "productos/producto1.html"
  },
  {
    nombre: "Armaf - Mandarin Sky",
    tipo: "Citrico",
    presentacion: "100ml - Mandarina y menta",
    imagen: "img/Mandarin.png",
    enlace: "productos/producto2.html"
  },
  {
    nombre: "Perfume Floral",
    tipo: "floral",
    presentacion: "50ml - Jazmín y rosa",
    imagen: "img/perfume1.jpg",
    enlace: "productos/producto3.html"
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const filtroActual = document.getElementById("filtroActual");
  const opcionesFiltro = document.getElementById("opcionesFiltro");
  const contenedor = document.getElementById("grid-productos");

  function renderizarProductos(tipoSeleccionado = "todos") {
    contenedor.innerHTML = "";

    const productosFiltrados = productos.filter(producto =>
      tipoSeleccionado === "todos" || producto.tipo === tipoSeleccionado
    );

    productosFiltrados.forEach(producto => {
      const tarjeta = document.createElement("a");
      tarjeta.href = producto.enlace;
      tarjeta.className = `tarjeta-producto ${producto.tipo}`;
      tarjeta.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>${producto.presentacion}</p>
      `;
      contenedor.appendChild(tarjeta);
    });
  }

  filtroActual.addEventListener("click", () => {
    opcionesFiltro.style.display = opcionesFiltro.style.display === "block" ? "none" : "block";
  });

  opcionesFiltro.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      const tipo = e.target.getAttribute("data-tipo");
      filtroActual.textContent = e.target.textContent;
      opcionesFiltro.style.display = "none";
      filtroActual.blur();
      renderizarProductos(tipo);
    }
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".filtro-personalizado")) {
      opcionesFiltro.style.display = "none";
    }
  });

  renderizarProductos();
});
