import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FinalizarCompra = () => {
  const [productos, setProductos] = useState([]);
  const [total, setTotal] = useState(0);

  // Cargar el carrito desde localStorage y calcular el total
  useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || [];
    setProductos(carritoGuardado);

    const totalCarrito = carritoGuardado.reduce((acc, producto) => acc + producto.precio, 0);
    setTotal(totalCarrito);
  }, []);

  // Si no hay productos en el carrito, mostramos un mensaje
  if (productos.length === 0) {
    return <p>No hay productos en el carrito</p>;
  }

  return (
    <Container className="my-5">
      <Row>
        <Col xs={12} md={6} className="mx-auto">
          <h1 className="text-center mb-4">Finalizar Compra</h1>

          {/* Resumen del pedido */}
          <div className="resumen mb-4">
            <p><strong>Resumen del pedido:</strong></p>
            <ListGroup>
              {productos.map((producto, index) => (
                <ListGroup.Item key={index}>
                  {producto.nombre} - ${producto.precio}
                </ListGroup.Item>
              ))}
            </ListGroup>
            <p id="total-pago" className="mt-3">Total a pagar: <strong>${total}</strong></p>
          </div>

          {/* Formulario de método de pago */}
          <Form action="confirmacion.html" method="POST">
            <div className="metodo-pago mb-4">
              <Form.Label><strong>Método de pago:</strong></Form.Label>
              <Form.Check
                type="radio"
                label="Tarjeta de crédito/débito"
                name="pago"
                value="tarjeta"
                required
              />
              <Form.Check
                type="radio"
                label="Transferencia bancaria"
                name="pago"
                value="transferencia"
              />
              <Form.Check
                type="radio"
                label="Efectivo al recibir"
                name="pago"
                value="efectivo"
              />
            </div>

            {/* Botón de confirmar compra */}
            <Button variant="success" type="submit" className="w-100">
              Confirmar compra
            </Button>
          </Form>

          {/* Volver al carrito */}
          <div className="mt-3 text-center">
            <Link to="/vercarrito">← Volver al carrito</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FinalizarCompra;
