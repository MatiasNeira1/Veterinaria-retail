import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Container,
  Form,
  Button,
  Card,
  Row,
  Col,
  Badge,
  Toast,
  ToastContainer,
} from "react-bootstrap";

import CorreaGato from "/img/CorreaGato.jpg";
import ComidaGato from "/img/ComidaGato.webp";
import JugueteGato from "/img/JugueteGato.webp";
import CajaArenaGato from "/img/CajaArenaGato.webp";

const Productos = () => {
  const [carrito, setCarrito] = useState([]);
  const [mostrarToast, setMostrarToast] = useState(false);
  const [productoAgregado, setProductoAgregado] = useState("");

  // Cargar carrito desde localStorage
  useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(carritoGuardado);
  }, []);

  // Lista de productos
  const productos = [
    { src: CorreaGato, alt: "Correa Gato", nombre: "Correa para gato", precio: 5990 },
    { src: ComidaGato, alt: "Comida Gato", nombre: "Comida húmeda", precio: 10990 },
    { src: CajaArenaGato, alt: "Caja Arena Gato", nombre: "Caja de arena para gato", precio: 20990 },
    { src: JugueteGato, alt: "Juguete Gato", nombre: "Juguete interactivo", precio: 12990 },
  ];

  // Añadir producto al carrito
  const añadirAlCarrito = (producto) => {
    const nuevoCarrito = [...carrito, producto];
    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));

    setProductoAgregado(producto.nombre);
    setMostrarToast(true);
  };

  return (
    <>
      {/* NAVBAR VERDE */}
      <Navbar
        expand="lg"
        sticky="top"
        className="shadow-sm mb-4"
        style={{
          backgroundColor: "#0b6b21ff", // Verde Bootstrap
          marginLeft: "calc(50% - 50vw)",
          marginRight: "calc(50% - 50vw)",
        }}
      >
        <Container fluid>
          <Navbar.Brand
            as={Link}
            to="/"
            className="fw-bold fs-3"
            
            style={{ color: "white" }}
          >
            🐾 Cachupin
          </Navbar.Brand>

          {/* Buscador */}
          <Form
            className="d-flex mx-auto"
            role="search"
            style={{ maxWidth: 400 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <Form.Control
              type="text"
              name="q"
              placeholder="Buscar en cachupin.com"
              className="me-2 rounded-pill"
            />
            <Button
              variant="light"
              className="rounded-pill"
              style={{ color: "#28a745", fontWeight: "600" }}
            >
              Buscar
            </Button>
          </Form>

          {/* Carrito */}
          <Link to="/vercarrito">
            <Button
              variant="light"
              className="position-relative rounded-pill"
              style={{ color: "#0a7a25ff", fontWeight: "600" }}
            >
              🛒
              {carrito.length > 0 && (
                <Badge
                  bg="danger"
                  pill
                  className="position-absolute top-0 start-100 translate-middle"
                >
                  {carrito.length}
                </Badge>
              )}
            </Button>
          </Link>
        </Container>
      </Navbar>

      {/* TÍTULO */}
      <Container className="text-center mb-4">
        <h1 className="fw-bold text-dark">Productos para tu mascota</h1>
        <p className="text-muted">Explora los mejores productos para tu mejor amigo</p>
      </Container>

      {/* GRID DE PRODUCTOS */}
      <Container>
        <Row className="justify-content-center">
          {productos.map((producto, index) => (
            <Col
              key={index}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="mb-4 d-flex justify-content-center"
            >
              <Card
                style={{
                  width: "100%",
                  border: "none",
                  borderRadius: "15px",
                  overflow: "hidden",
                  backgroundColor: "#f8f9fa", 
                  boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(0, 0, 0, 0.35)"; 
                  e.currentTarget.style.backgroundColor = "#e4e2e2ad";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 15px rgba(0,0,0,0.15)";
                  e.currentTarget.style.backgroundColor = "#f8f9fa";
                }}
              >
                <Card.Img
                  variant="top"
                  src={producto.src}
                  alt={producto.alt}
                  style={{
                    height: "220px",
                    objectFit: "cover",
                  }}
                />
                <Card.Body className="text-center">
                  <Card.Title className="fw-semibold text-dark">
                    {producto.nombre}
                  </Card.Title>
                  <Card.Text
                    className="fw-bold fs-5"
                    style={{ color: "#28a745" }}
                  >
                    ${producto.precio.toLocaleString()}
                  </Card.Text>
                  <Button
                    variant="success"
                    className="rounded-pill px-4"
                    onClick={() => añadirAlCarrito(producto)}
                  >
                    Añadir al carrito
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* TOAST (notificación de producto agregado) */}
      <ToastContainer position="bottom-end" className="p-3">
        <Toast
          bg="success"
          show={mostrarToast}
          onClose={() => setMostrarToast(false)}
          delay={2000}
          autohide
        >
          <Toast.Body className="text-white">
            ✅ <strong>{productoAgregado}</strong> agregado al carrito
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default Productos;
 