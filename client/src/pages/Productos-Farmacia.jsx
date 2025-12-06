import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {Container,Form,Button,Card,Row,Col,Badge, Toast, ToastContainer,} from "react-bootstrap";
import api from "../api/api"; 
import Navbar from "../components/Navbar";
import CardProduct from "../components/CardProduct";
import remedio_gato1 from "/img/prod-farmacia/Remedio-gato1.webp";
import remedio_gato2 from "/img/prod-farmacia/Remedio-gato2.jpg";
import remedio_gato3 from "/img/prod-farmacia/Remedio-gato3.png";

import remedio_perro1 from "/img/prod-farmacia/Remedio-perro1.jpg";
import remedio_perro2 from "/img/prod-farmacia/Remedio-perro2.jpeg";
import remedio_perro3 from "/img/prod-farmacia/Remedio-perro3.png";

const getImagenRemedio = (nombre = "") => {
  const n = nombre.toLowerCase();

 // productos para gatos
  if (n.includes("gato")) {
    if (n.includes("antiparasitario") || n.includes("pulga") || n.includes("pipeta")) {
      return remedio_gato1;
    }
    if (n.includes("gel") || n.includes("dental") || n.includes("vitam")) {
      return remedio_gato2;
    }
    return remedio_gato3;
  }

    if (n.includes("perro")) {
    if (n.includes("antiparasitario") || n.includes("pulga") || n.includes("suplemento")) {
      return remedio_perro1;
    }
    if (n.includes("antiinflamatorio") || n.includes("antibiótico") || n.includes("antidiarreico")) {
      return remedio_perro2;
    }
    return remedio_perro3; 
  }


  return remedio_perro1;
};

const Productos = () => {
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
        console.log("Productos desde el back:", res.data); 
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
  // buscar el producto en el estado por su id
  const producto = productos.find(
    (p) => (p.idProducto ?? p.id) === idProducto
  );

  if (!producto) {
    console.warn("Producto no encontrado para id:", idProducto);
    return;
  }

  const itemCarrito = {
    id: idProducto,
    nombre: producto.nombre,
    precio: producto.precio,
    src: getImagenRemedio(producto.nombre),
  };

  const nuevoCarrito = [...carrito, itemCarrito];
  setCarrito(nuevoCarrito);
  localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));

  setProductoAgregado(producto.nombre);
  setMostrarToast(true);
};

  return (
    <>
      <Navbar />
      <Container className="py-4">
        <h2 className="fw-bold mb-4 text-center">Productos Veterinarios</h2>

        {cargando && <p className="text-center">Cargando productos...</p>}
        {errorCarga && <p className="text-center text-danger">{errorCarga}</p>}

        <Row xs={1} md={2} lg={4} className="g-4">
          {productos.map((producto) => (
            <Col key={producto.idProducto ?? producto.id}>
              <CardProduct
                img={getImagenRemedio(producto.nombre)}
                titulo={producto.nombre}
                texto={producto.descripcion}
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
};

export default Productos;   