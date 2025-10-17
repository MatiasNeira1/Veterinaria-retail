import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Usar Link para la navegación interna

const VerCarrito = () => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  // Cargar el carrito desde el almacenamiento local o API
  useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(carritoGuardado);
    calcularTotal(carritoGuardado);
  }, []);

  // Calcular el total del carrito
  const calcularTotal = (carrito) => {
    const nuevoTotal = carrito.reduce((acc, producto) => acc + producto.precio, 0);
    setTotal(nuevoTotal);
  };

  return (
    <div className="carrito-container">
      <header>
        <h1>Cachupin - Tu Carrito</h1>
      </header>

      <h2>Productos en tu carrito</h2>

      <div id="lista-carrito">
        {/* Muestra los productos en el carrito */}
        {carrito.length === 0 ? (
          <p>No hay productos en tu carrito.</p>
        ) : (
          carrito.map((producto, index) => (
            <div key={index} className="producto-carrito">
              <p>{producto.nombre}</p>
              <p>Precio: ${producto.precio}</p>
            </div>
          ))
        )}
      </div>

      <div className="total" id="total-carrito">
        Total: ${total}
      </div>

      {/* Botón para finalizar la compra */}
      <button className="btn-finalizar" onClick={() => window.location.href = '/Menu'}>
        Finalizar compra
      </button>

      {/* Enlace para volver */}
      <div className="volver">
        <Link to="/">← Volver</Link>
      </div>
    </div>
  );
};

export default VerCarrito;
