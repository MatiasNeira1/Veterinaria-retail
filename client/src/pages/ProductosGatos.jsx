import React, { useState, useEffect } from "react";
import { Container, Row, Col, Toast, ToastContainer } from "react-bootstrap";
import api from "../api/api";
import Navbar from "../components/Navbar";
import CardProduct from "../components/CardProduct";

//imagenes de productos de gatos
import alimentosecogatoadulto from "/img/prod-gato/alimentosecogatoadulto.png";
import alimentohúmedogatoadulto from "/img/prod-gato/alimentohúmedogatoadulto.jpg";
import alimentosecogatoesterilizado from "/img/prod-gato/alimentosecogatoesterilizado.webp";
import arenasanitariaaglomerante from "/img/prod-gato/arenasanitariaaglomerante.webp";

import rascadorparagato from "/img/prod-gato/rascadorparagato.webp";
import jugueteratónconcatnip from "/img/prod-gato/jugueteratónconcatnip.webp";
import jugueteplumainteractiva from "/img/prod-gato/jugueteplumainteractiva.webp";
import correaextensibleparagato from "/img/prod-gato/correaextensibleparagato.jpg";
import transportadoraplastica from "/img/prod-gato/transportadoraplastica.webp";
import platodoble from "/img/prod-gato/platodoble.webp";

const imagenesGatoPorNombre = {
  "alimento seco gato adulto 3kg": alimentosecogatoadulto,
  "alimento húmedo gato adulto sobre 85g": alimentohúmedogatoadulto,
  "alimento seco gato esterilizado 1,5kg": alimentosecogatoesterilizado,
  "arena sanitaria aglomerante 10kg": arenasanitariaaglomerante,

  "rascador para gato tamaño mediano": rascadorparagato,
  "juguete ratón con catnip": jugueteratónconcatnip,
  "juguete pluma interactiva para gato": jugueteplumainteractiva,
  "correa extensible para gato 3m": correaextensibleparagato,
  "transportadora plástica para gato": transportadoraplastica,
  "plato doble para comida y agua": platodoble,
};
const getImagenProducto = (producto) => {
  const categoria = producto.categoria?.toLowerCase();
  const nombreKey = producto.nombre?.trim().toLowerCase();

  if (categoria === "gato") {
    return imagenesGatoPorNombre[nombreKey] ?? alimentosecogatoadulto;
  }

  return alimentosecogatoadulto;
};

export default function ProductosGatos() {
  const [carrito, setCarrito] = useState([]);
  const [mostrarToast, setMostrarToast] = useState(false);
  const [productoAgregado, setProductoAgregado] = useState("");
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [errorCarga, setErrorCarga] = useState("");

  useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(carritoGuardado);
  }, []);

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

  const añadirAlCarrito = (idProducto) => {
    const producto = productos.find(
      (p) => (p.idProducto ?? p.id) === idProducto
    );
    if (!producto) return;

    const itemCarrito = {
      id: idProducto,
      nombre: producto.nombre,
      precio: producto.precio,
      src: getImagenProducto(producto),
    };

    const nuevoCarrito = [...carrito, itemCarrito];
    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));

    setProductoAgregado(producto.nombre);
    setMostrarToast(true);
  };

  const productosGato = productos.filter(
    (p) => p.categoria?.toLowerCase() === "gato"
  );

  return (
    <>
      <Navbar />
      <Container className="py-4">
        <h2 className="fw-bold mb-4 text-center">Productos para Gatos</h2>

        {cargando && <p className="text-center">Cargando productos...</p>}
        {errorCarga && <p className="text-center text-danger">{errorCarga}</p>}

        <Row xs={1} md={2} lg={4} className="g-4">
          {productosGato.map((producto) => (
            <Col key={producto.idProducto ?? producto.id}>
              <CardProduct
                img={getImagenProducto(producto)}
                titulo={producto.nombre}
                texto={producto.marca}        
                precio={producto.precio}
                id={producto.idProducto ?? producto.id}
                onAdd={añadirAlCarrito}
              />
            </Col>
          ))}
        </Row>
      </Container>

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
}
