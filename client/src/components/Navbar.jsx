import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link para navegación interna
import { Navbar, Container, Button, Form, Offcanvas, Nav } from 'react-bootstrap';

const CustomNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShow = () => setShowMenu(!showMenu); // Alternar visibilidad del menú

  return (
    <Navbar bg="light" expand="lg" className="mb-3" sticky="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <h1 style={{ fontSize: '1.5rem', margin: 0 }}>Cachupin</h1>
        </Navbar.Brand>

        
        
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/Productos">Productos</Nav.Link>
            <Nav.Link as={Link} to="/Plan">Planes</Nav.Link>
            <Nav.Link as={Link} to="/VerCarrito">Ver Carrito</Nav.Link>
            <Nav.Link as={Link} to="/nosotros">Nosotros</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Form className="d-flex mx-auto" role="search" style={{ maxWidth: 400 }} onSubmit={(e) => e.preventDefault()}>
          <Form.Control
            type="search"
            placeholder="Buscar en cachupin.com"
            className="me-2"
            aria-label="Buscar"
          />
          <Button variant="outline-success" type="submit" aria-label="Buscar">
            🔍
          </Button>
        </Form>

        <Button
          as={Link} 
          to="/agendar"
          variant="success"
          className="ms-auto"
          style={{ whiteSpace: 'nowrap' }}
        >
          Agenda Online 🐾
        </Button>
      </Container>

      {/* Menú lateral (Offcanvas) */}
     
    </Navbar>
  );
};

export default CustomNavbar;
