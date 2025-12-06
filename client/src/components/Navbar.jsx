import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Container,
  Row,
  Col,
  Form,
  Button,
  Nav,  
  Badge,
} from "react-bootstrap";

export default function CustomNavbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <header  className="fixed-top w-100" style={{ zIndex: 1030 }}>
      
      <div
        style={{
          background: "#0c3b0e", 
          color: "#fff",
          width: "100vw",
          marginLeft: "calc(50% - 50vw)",
          marginRight: "calc(50% - 50vw)",
        }}
        className="py-3"
      >
        <Container fluid="lg" className="px-3">
          <Navbar expand="lg" bg="transparent" variant="dark" expanded={expanded}>
            <Navbar.Brand as={Link} to="/Menu" className="me-3">
              <div className="fw-bold" style={{ fontSize: "1.8rem", lineHeight: 1 }}>
                Cachupin
              </div>
              <small style={{ opacity: 0.85 }}>todo por tu mascota</small>
            </Navbar.Brand>

            <Navbar.Toggle
              aria-controls="nav-top"
              onClick={() => setExpanded((e) => !e)}
            />
            <Navbar.Collapse id="nav-top">
              <Form
                role="search"
                onSubmit={(e) => e.preventDefault()}
                className="d-lg-flex flex-grow-1 mx-lg-4 my-3 my-lg-0"
                style={{ maxWidth: 840, marginLeft: "auto", marginRight: "auto" }}
              >
                <Form.Control
                  type="search"
                  placeholder="Buscar producto..."
                  className="me-2"
                />
                <Button variant="success">🔎 Buscar</Button>
              </Form>

              <Nav className="ms-lg-3 align-items-center">
                <Nav.Link as={Link} to="/login" className="text-white">
                  <span style={{ fontSize: 20, marginRight: 6 }}>👤</span>
                  Mi Cuenta
                </Nav.Link>
                <Nav.Link as={Link} to="/VerCarrito" className="text-white position-relative">
                  <span style={{ fontSize: 20, marginRight: 6 }}>🛒</span>
                  Carrito
                  <Badge
                    bg="danger"
                    pill
                    className="position-absolute top-0 start-100 translate-middle"
                    style={{ fontSize: 10 }}
                  >
                    0
                  </Badge>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>

      
      <div
        className="bg-white border-bottom"
        style={{
          width: "100vw",
          marginLeft: "calc(50% - 50vw)",
          marginRight: "calc(50% - 50vw)",
        }}
      >
        <Container fluid="lg" className="px-3">
          <Nav className="gap-4 py-2 flex-wrap justify-content-center justify-content-lg-start">
            <Nav.Link as={Link} to="/productos" className="text-danger fw-bold">
              ¡IMPERDIBLES!
            </Nav.Link>
            <Nav.Link as={Link} to="/productos?cat=perro" className="text-dark fw-semibold">
              MUNDO PERRO ▾
            </Nav.Link>
            <Nav.Link as={Link} to="/ProductosGatos" className="text-dark fw-semibold">
              MUNDO GATO ▾
            </Nav.Link>
            <Nav.Link as={Link} to="/productos?cat=accesorios" className="text-dark fw-semibold">
              ACCESORIOS ▾
            </Nav.Link>
            <Nav.Link as={Link} to="/Productos-Farmacia" className="text-dark fw-semibold">
              FARMACIA ▾
            </Nav.Link>
            <Nav.Link as={Link} to="/Plan" className="text-dark fw-semibold">
              PLANES DE SALUD
            </Nav.Link>
            <Nav.Link as={Link} to="/Agendar" className="text-dark fw-semibold">
              🗓 AGENDA TU CITA
            </Nav.Link>
          </Nav>
        </Container>
      </div>
    </header>
    
  );
}
