let carrito = [];

// productos.js

function añadirAlCarrito(nombre, precio) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Agrega el producto al carrito
  carrito.push({ nombre, precio });

  // Guarda el carrito actualizado en localStorage
  localStorage.setItem("carrito", JSON.stringify(carrito));

  alert(`${nombre} ha sido añadido al carrito.`);
}


function mostrarTotalCarrito() {
  // Sumar todos los precios del carrito
  const total = carrito.reduce((acum, precio) => acum + precio, 0);

  // Mostrar el total en el elemento con id="total-carrito"
  document.getElementById("total-carrito").textContent = 
    `Total del carrito: $${total.toLocaleString("es-CL")}`;
}