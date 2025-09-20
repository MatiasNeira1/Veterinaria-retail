document.addEventListener('DOMContentLoaded', () => {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const listaProductos = document.getElementById('lista-productos');
  const totalPago = document.getElementById('total-pago');

  let total = 0;

  if (carrito.length === 0) {
    listaProductos.innerHTML = '<li>No hay productos en el carrito.</li>';
    totalPago.innerHTML = 'Total a pagar: <strong>$0</strong>';
    return;
  }

  carrito.forEach(item => {
    const li = document.createElement('li');
    
    const cantidad = item.cantidad || 1; // fallback si no tiene cantidad
    const subtotal = item.precio * cantidad;
    total += subtotal;

    li.textContent = `${item.nombre} x ${cantidad}`;
    listaProductos.appendChild(li);
  });

  totalPago.innerHTML = `Total a pagar: <strong>$${total.toLocaleString('es-CL')}</strong>`;
});
