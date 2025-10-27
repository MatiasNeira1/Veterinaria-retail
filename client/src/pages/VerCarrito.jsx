import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Card, Alert, Badge } from "react-bootstrap";

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
  const calcularTotal = (carritoActualizado) => {
    const nuevoTotal = carritoActualizado.reduce(
      (acc, producto) => acc + producto.precio,
      0
    );
    setTotal(nuevoTotal);
  };

  // Eliminar un producto del carrito
  const eliminarProducto = (index) => {
    const nuevoCarrito = carrito.filter((_, i) => i !== index);
    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    calcularTotal(nuevoCarrito);
  };

  // Vaciar todo el carrito
  const vaciarCarrito = () => {
    setCarrito([]);
    localStorage.removeItem("carrito");
    setTotal(0);
  };

  return (
    <Container
      className="my-5 p-4 rounded shadow-lg"
      style={{
        backgroundColor: "#ffffff",
        minHeight: "80vh",
      }}
    >
      <header className="text-center mb-4">
        <h1 className="fw-bold text-success">🛒 Tu Carrito en Cachupin</h1>
        <p className="text-muted">Revisa y gestiona tus productos antes de comprar</p>
      </header>

      {/* Si no hay productos, mostrar alerta */}
      {carrito.length === 0 ? (
        <Alert variant="warning" className="text-center fs-5">
          🐾 No hay productos en tu carrito.
        </Alert>
      ) : (
        <>
          {/* LISTA DE PRODUCTOS */}
          <Row className="justify-content-center">
            {carrito.map((producto, index) => (
              <Col
                key={index}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className="mb-4 d-flex justify-content-center"
              >
                <Card
                  className="h-100"
                  style={{
                    width: "100%",
                    border: "none",
                    borderRadius: "15px",
                    backgroundColor: "#f8f9fa",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 8px 20px rgba(40,167,69,0.3)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 4px 12px rgba(0,0,0,0.15)")
                  }
                >
                  <Card.Img
                    variant="top"
                    src={producto.src}
                    alt={producto.alt}
                    style={{
                      height: "200px",
                      objectFit: "cover",
                      borderTopLeftRadius: "15px",
                      borderTopRightRadius: "15px",
                    }}
                  />
                  <Card.Body className="text-center d-flex flex-column justify-content-between">
                    <div>
                      <Card.Title className="fw-semibold">
                        {producto.nombre}
                      </Card.Title>
                      <Card.Text className="fw-bold text-success fs-5">
                        ${producto.precio.toLocaleString()}
                      </Card.Text>
                    </div>
                    <Button
                      variant="outline-danger"
                      className="rounded-pill mt-2"
                      onClick={() => eliminarProducto(index)}
                    >
                      🗑️ Eliminar
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* TOTAL Y ACCIONES */}
          <div
            className="text-center mt-5 p-4 rounded"
            style={{
              backgroundColor: "#e9f7ef",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <h3 className="fw-bold text-dark mb-3">
              Total:{" "}
              <span className="text-success">
                ${total.toLocaleString()}
              </span>
            </h3>

            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Button
                variant="success"
                size="lg"
                className="rounded-pill px-4"
                onClick={() => (window.location.href = "/FinalizarCompra")}
              >
                ✅ Finalizar compra
              </Button>

              <Button
                variant="outline-danger"
                size="lg"
                className="rounded-pill px-4"
                onClick={vaciarCarrito}
              >
                🧹 Vaciar carrito
              </Button>
            </div>
          </div>
        </>
      )}

      {/* VOLVER AL MENÚ */}
      <div className="d-flex justify-content-center mt-5">
        <Link to="/">
          <Button variant="secondary" className="rounded-pill px-4">
            ← Volver al menú principal
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default VerCarrito;
