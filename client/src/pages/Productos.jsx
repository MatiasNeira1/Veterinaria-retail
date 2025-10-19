import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Usamos Link para navegación interna
import { Navbar, Container, Form, Button, Card, Row, Col } from 'react-bootstrap'; // Importamos react-bootstrap
import CorreaGato from '/img/CorreaGato.jpg';
import ComidaGato from '/img/ComidaGato.webp';
import JugueteGato from '/img/JugueteGato.webp';
import CajaArenaGato from '/img/CajaArenaGato.webp';
// Añadir más imágenes si es necesari

const Productos = () => {
  const [carrito, setCarrito] = useState([]); // Estado para el carrito de compras

  // Datos de productos
  const productos = [
    { src: CorreaGato, alt: 'Correa Gato', nombre: 'Correa para gato', precio: 5990 },
    { src: ComidaGato, alt: 'Comida Gato', nombre: 'Comida húmeda', precio: 10990 },
    { src: CajaArenaGato, alt: 'Caja Arena Gato', nombre: 'Caja de arena para gato', precio: 20990 },
    { src: JugueteGato, alt: 'Juguete Gato', nombre: 'Juguete interactivo', precio: 12990 },
  ];

  // Función para agregar productos al carrito
  const añadirAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);

    // Guardamos el carrito en localStorage
    localStorage.setItem('carrito', JSON.stringify([...carrito, producto]));
  };

  return (
    <div>
      {/* Barra de navegación */}
      <Navbar bg="light" expand="lg" sticky="top" className="mb-3">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <h1>Cachupin</h1>
          </Navbar.Brand>

          {/* Barra de búsqueda */}
          <Form className="d-flex mx-auto" role="search" style={{ maxWidth: 400 }} onSubmit={(e) => e.preventDefault()}>
            <Form.Control type="text" name="q" placeholder="Buscar en cachupin.com" className="me-2" />
            <Button variant="outline-success" type="submit" aria-label="Buscar">🔍</Button>
          </Form>

          {/* Carrito */}
          <Link to="/vercarrito">
            <Button variant="outline-primary" className="ms-auto">
              🛒
            </Button>
          </Link>
        </Container>
      </Navbar>

      {/* Título de productos */}
      <Container className="text-center mb-4">
        <h1>Productos</h1>
      </Container>

      {/* Mapeamos los productos para mostrar cada uno */}
      <Container>
        <Row className="justify-content-center">
          {productos.map((producto, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} xl={3} className="mb-4">
              <Card>
                <Card.Img variant="top" src={producto.src} alt={producto.alt} />
                <Card.Body>
                  <Card.Title>{producto.nombre}</Card.Title>
                  <Card.Text>${producto.precio}</Card.Text>
                  <Button variant="primary" onClick={() => añadirAlCarrito(producto)}>
                    Añadir al carrito
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Productos;
