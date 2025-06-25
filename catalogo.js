// Array de productos (puedes agregar o modificar fácilmente)
const productos = [
  {
    nombre: "Perfume Floral",
    tipo: "floral",
    presentacion: "50ml - Jazmín y rosa",
    imagen: "img/Xerjoff.png",
    enlace: "productos/producto1.html"
  },
  {
    nombre: "Perfume Floral",
    tipo: "floral",
    presentacion: "50ml - Jazmín y rosa",
    imagen: "img/perfume1.jpg",
    enlace: "productos/producto2.html"
  },
  {
    nombre: "Perfume Cítrico",
    tipo: "citrico",
    presentacion: "50ml - Limón y bergamota",
    imagen: "img/perfume2.jpg",
    enlace: "productos/producto3.html"
  }
  // Aquí puedes seguir agregando más productos...
];

document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("grid-productos");
  const filtro = document.getElementById("filtro");

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

  filtro.addEventListener("change", () => {
    renderizarProductos(filtro.value);
  });

  renderizarProductos();
});
