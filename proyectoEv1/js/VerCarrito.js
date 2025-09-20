document.addEventListener('DOMContentLoaded', () => {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const listaCarrito = document.getElementById('lista-carrito');
  const totalCarrito = document.getElementById('total-carrito');

  let total = 0;

  if (carrito.length === 0) {
    listaCarrito.innerHTML = `<p>Tu carrito está vacío.</p>`;
    totalCarrito.innerText = `Total: $0`;
    return;
  }

  carrito.forEach((item, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('carrito-item');
    itemDiv.innerHTML = `
      <span class="item-nombre">${item.nombre}</span>
      <span class="item-precio">$${item.precio.toLocaleString('es-CL')}</span>
      <button class="btn-eliminar" data-index="${index}">❌</button>
    `;
    listaCarrito.appendChild(itemDiv);
    total += item.precio;
  });       

  totalCarrito.innerText = `Total: $${total.toLocaleString('es-CL')}`;

  // Agregar funcionalidad para eliminar un producto del carrito
  const botonesEliminar = document.querySelectorAll('.btn-eliminar');
  botonesEliminar.forEach(btn => {
    btn.addEventListener('click', () => {
      const index = parseInt(btn.getAttribute('data-index'));
      carrito.splice(index, 1);
      localStorage.setItem('carrito', JSON.stringify(carrito));
      location.reload(); // Refresca la página para actualizar la lista
    });
  });
});