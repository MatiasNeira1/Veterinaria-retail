import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
 
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
import Navbar from "../components/Navbar";
import api from "../api/api"; 

// Imágenes locales
import CorreaGato from "/img/CorreaGato.jpg";
import ComidaGato from "/img/ComidaGato.webp";
import JugueteGato from "/img/JugueteGato.webp";
import CajaArenaGato from "/img/CajaArenaGato.webp";

// Función para elegir una imagen según el nombre del producto
const getImagenProducto = (nombre = "") => {
  const n = nombre.toLowerCase();

  if (n.includes("correa")) return CorreaGato;
  if (n.includes("comida") || n.includes("alimento")) return ComidaGato;
  if (n.includes("arena") || n.includes("caja")) return CajaArenaGato;
  if (n.includes("juguete")) return JugueteGato;

  // Por defecto
  return ComidaGato;
};

const Productos = () => {
  const [carrito, setCarrito] = useState([]);
  const [mostrarToast, setMostrarToast] = useState(false);
  const [productoAgregado, setProductoAgregado] = useState("");

  // 👉 productos que vienen del BACK
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [errorCarga, setErrorCarga] = useState("");

  // Cargar carrito desde localStorage
  useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(carritoGuardado);
  }, []);

  // 🔹 Cargar productos desde el backend al montar el componente
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const res = await api.get("/products/all"); 
        setProductos(res.data);
      } catch (err) {
        console.error("Error cargando productos:", err);
        setErrorCarga("No se pudieron cargar los productos. Intenta más tarde.");
      } finally {
        setCargando(false);
      }
    };

    fetchProductos();
  }, []);

  // Añadir producto al carrito
  const añadirAlCarrito = (producto) => {
    const itemCarrito = {
      id: producto.idProducto ?? producto.id, // por si tu entidad se llama distinto
      nombre: producto.nombre,
      precio: producto.precio,
      src: getImagenProducto(producto.nombre),
    };

    const nuevoCarrito = [...carrito, itemCarrito];
    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));

    setProductoAgregado(producto.nombre);
    setMostrarToast(true);
  };

  return (
    <>  
      <Navbar>
            
      </Navbar>

      {/* TÍTULO */}
      <Container className="text-center mb-4">
        <h1 className="fw-bold text-dark">Productos para tu mascota</h1>
        <p className="text-muted">
          Explora los mejores productos para tu mejor amigo
        </p>
      </Container>

      {/* GRID DE PRODUCTOS */}
      <Container>
        {cargando && <p className="text-center">Cargando productos...</p>}
        {errorCarga && (
          <p className="text-center text-danger">{errorCarga}</p>
        )}

        <Row className="justify-content-center">
          {productos.map((producto) => (
            <Col
              key={producto.idProducto ?? producto.id}
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
                  src={getImagenProducto(producto.nombre)}
                  alt={producto.nombre}
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
                    ${producto.precio?.toLocaleString() ?? "0"}
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
