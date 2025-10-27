import React from "react";
import { Container, Row, Col, Form, Button, Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      className="bg-light text-dark mt-auto py-4 "
      style={{
        borderTop: "1px solid #ddd",
        width: "100vw",
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
      }}
    >
      {/* Contenido centrado con ancho limitado */}
      <Container>
        {/* Suscripción */}
        <Row className="mb-3 justify-content-center">
          <Col xs={12} md={8} lg={6} className="d-flex">
            <Form.Control
              type="email"
              placeholder="Ingresa tu correo electrónico"
              aria-label="Correo electrónico para suscripción"
            />
            <Button variant="success" className="ms-2">SUSCRIBIRSE</Button>
          </Col>
        </Row>

        {/* Enlaces */}
        <Row className="mb-3">
          <Col xs={12} sm={6} md={3} className="mb-3 mb-md-0">
            <h5 className="mb-2">NOSOTROS</h5>
            <Nav className="flex-column">
              <Nav.Link href="terminos.html">Términos y Condiciones</Nav.Link>
            </Nav>
          </Col>

          <Col xs={12} sm={6} md={3} className="mb-3 mb-md-0">
            <h5 className="mb-2">SOPORTE</h5>
            <Nav className="flex-column">
              <Nav.Link href="#">Preguntas Frecuentes</Nav.Link>
              <Nav.Link href="#">Solicitud Post Venta</Nav.Link>
              <Nav.Link href="#">Contáctanos</Nav.Link>
            </Nav>
          </Col>

          <Col xs={12} sm={6} md={3} className="mb-3 mb-md-0">
            <h5 className="mb-2">MI CUENTA</h5>
            <Nav className="flex-column">
              <Nav.Link href="#">Entrar a Mi Cuenta</Nav.Link>
              <Nav.Link href="#">Quiero Registrarme</Nav.Link>
              <Nav.Link href="#">Ya soy cliente y quiero ingresar</Nav.Link>
            </Nav>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <h5 className="mb-2">CONTACTO</h5>
            <p className="mb-1">Ubicación: Bodega chiringuito chatarra, Bodega 29, isla 1</p>
            <p className="mb-1">+56 9 1234 5678</p>
            <p className="mb-1">+56 9 5678 1234</p>
            <p className="mb-1">+56 9 5612 7834</p>
            <p className="mb-0">
              <a href="mailto:contacto.web@duoc.cl">contacto.web@duoc.cl</a>
            </p>
          </Col>
        </Row>

        {/* Redes */}
        <Row className="justify-content-center my-2">
          <Col xs="auto" className="d-flex gap-3">
            {/* …icons… */}
          </Col>
        </Row>

        {/* Copyright */}
        <Row>
          <Col className="text-center">
            <small>&copy; 2025 Cachupin, todos los derechos reservados</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
