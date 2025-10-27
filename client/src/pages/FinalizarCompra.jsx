import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  ListGroup,
  Card,
  Alert,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const FinalizarCompra = () => {
  const [productos, setProductos] = useState([]);
  const [total, setTotal] = useState(0);
  const [metodoPago, setMetodoPago] = useState(""); // nuevo estado

  // Cargar el carrito desde localStorage y calcular el total
  useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
    setProductos(carritoGuardado);
    const totalCarrito = carritoGuardado.reduce(
      (acc, producto) => acc + producto.precio,
      0
    );
    setTotal(totalCarrito);
  }, []);

  // Si no hay productos en el carrito
  if (productos.length === 0) {
    return (
      <Container className="text-center my-5">
        <Alert variant="warning" className="fs-5">
          🐾 No hay productos en tu carrito para finalizar la compra.
        </Alert>
        <Link to="/" className="btn btn-success rounded-pill px-4 mt-3">
          ← Volver a la tienda
        </Link>
      </Container>
    );
  }

  return (
    <Container
      className="my-5 p-4 rounded shadow-lg"
      style={{
        backgroundColor: "#ffffff",
        maxWidth: "700px",
      }}
    >
      <h1 className="text-center mb-4 fw-bold text-success">
        🛍️ Finalizar Compra
      </h1>

      {/* Resumen del pedido */}
      <Card
        className="mb-4 shadow-sm border-0"
        style={{ borderRadius: "15px", backgroundColor: "#f8f9fa" }}
      >
        <Card.Body>
          <Card.Title className="fw-semibold mb-3 text-success fs-5">
            🧾 Resumen del pedido
          </Card.Title>
          <ListGroup variant="flush">
            {productos.map((producto, index) => (
              <ListGroup.Item
                key={index}
                className="d-flex justify-content-between align-items-center"
                style={{
                  backgroundColor: "transparent",
                  borderBottom: "1px solid #dee2e6",
                }}
              >
                <span>{producto.nombre}</span>
                <strong>${producto.precio.toLocaleString()}</strong>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <div className="text-end mt-3">
            <h5>
              <strong>Total a pagar: </strong>
              <span className="text-success fw-bold">
                ${total.toLocaleString()}
              </span>
            </h5>
          </div>
        </Card.Body>
      </Card>

      {/* Formulario de método de pago */}
      <Card
        className="mb-4 border-0 shadow-sm"
        style={{ borderRadius: "15px", backgroundColor: "#f8f9fa" }}
      >
        <Card.Body>
          <Form>
            <Form.Label className="fw-semibold fs-5 text-success mb-3 d-block text-center">
              💳 Selecciona tu método de pago
            </Form.Label>

            {/* Opciones tipo "tarjeta seleccionable" */}
            <Row className="g-3">
              {[
                { label: "Tarjeta de crédito o débito", value: "tarjeta", icon: "💳" },
                { label: "Transferencia bancaria", value: "transferencia", icon: "🏦" },
                { label: "Efectivo al recibir", value: "efectivo", icon: "💵" },
              ].map((opcion) => (
                <Col xs={12} key={opcion.value}>
                  <div
                    onClick={() => setMetodoPago(opcion.value)}
                    style={{
                      borderRadius: "15px",
                      padding: "15px",
                      border:
                        metodoPago === opcion.value
                          ? "2px solid #28a745"
                          : "2px solid #dee2e6",
                      backgroundColor:
                        metodoPago === opcion.value
                          ? "#e8f8ee"
                          : "#ffffff",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <Form.Check
                      type="radio"
                      id={opcion.value}
                      name="pago"
                      value={opcion.value}
                      checked={metodoPago === opcion.value}
                      onChange={() => setMetodoPago(opcion.value)}
                      label={
                        <span
                          style={{
                            fontWeight: "500",
                            fontSize: "1.05rem",
                            color:
                              metodoPago === opcion.value
                                ? "#28a745"
                                : "#333",
                          }}
                        >
                          {opcion.icon} {opcion.label}
                        </span>
                      }
                    />
                  </div>
                </Col>
              ))}
            </Row>

            <Button
              variant="success"
              type="submit"
              className="w-100 py-2 rounded-pill mt-4"
              disabled={!metodoPago}
            >
              ✅ Confirmar compra
            </Button>
          </Form>
        </Card.Body>
      </Card>

      {/* Enlace para volver al carrito */}
      <div className="text-center mt-3">
        <Link to="/vercarrito">
          <Button variant="secondary" className="rounded-pill px-4">
            ← Volver al carrito
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default FinalizarCompra;
