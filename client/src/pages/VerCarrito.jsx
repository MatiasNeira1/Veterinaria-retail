import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import { Container, Row, Col, Button, Card, Alert } from "react-bootstrap"; // Importar componentes de Bootstrap

const VerCarrito = () => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  // Cargar el carrito desde el almacenamiento local
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
    <Container className="my-4">
      <header>
        <h1 className="text-center mb-4">Cachupin - Tu Carrito</h1>
      </header>

      <h2 className="mb-3 text-center">Productos en tu carrito</h2>

      {/* no hay productos, mostrar alerta */}
      {carrito.length === 0 ? (
        <Alert variant="warning" className="text-center">
          No hay productos en tu carrito.
        </Alert>
      ) : (
        <Row className="justify-content-center">
          {/*productos en el carrito */}
          {carrito.map((producto, index) => (
            <Col key={index} xs={5} sm={50} md={50} lg={50} xl={50} className="mb-4">
              <Card>
                <Card.Img variant="top" src={producto.src} alt={producto.alt} />
                <Card.Body>
                  <Card.Title>{producto.nombre}</Card.Title>
                  <Card.Text>
                    Precio: <strong>${producto.precio}</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      {/* total */}
      <div className="total text-center mt-4">
        <h3>Total: ${total}</h3>
      </div>

      {/* boton para finalizar la compra */}
      <div className="d-flex justify-content-center mt-4">
        <Button
          variant="success"
          size="lg"
          onClick={() => window.location.href = '/FinalizarCompra'}
        >
          Finalizar compra
        </Button>
      </div>

      {/* Enlace para volver */}
      <div className="d-flex justify-content-center mt-3">
        <Link to="/">
          <Button variant="/">← Volver al menú</Button>
        </Link>
      </div>
    </Container>
  );
};

export default VerCarrito;
