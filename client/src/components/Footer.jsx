import React from 'react';
import { Container, Row, Col, Form, Button, Nav } from 'react-bootstrap'; // Importamos react-bootstrap

const Footer = () => {
  return (
    <footer className="bg-light text-dark pt-4" style={{ borderTop: "1px solid #ddd" }}>
      <Container>

        {/* Sección de suscripción al boletín */}
        <Row className="mb-3 justify-content-center">
          <Col xs={12} md={6} className="d-flex">
            <Form.Control
              type="email"
              placeholder="Ingresa tu correo electrónico"
              aria-label="Correo electrónico para suscripción"
            />
            <Button variant="success" className="ms-2" aria-label="Suscribirse al boletín">
              SUSCRIBIRSE
            </Button>
          </Col>
        </Row>

        {/* Sección de enlaces */}
        <Row className="mb-3">
          <Col xs={12} sm={6} md={3}>
            <h5>NOSOTROS</h5>
            <Nav className="flex-column">
              <Nav.Link href="terminos.html">Términos y Condiciones</Nav.Link>
            </Nav>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <h5>SOPORTE</h5>
            <Nav className="flex-column">
              <Nav.Link href="">Preguntas Frecuentes</Nav.Link>
              <Nav.Link href="">Solicitud Post Venta</Nav.Link>
              <Nav.Link href="">Contáctanos</Nav.Link>
            </Nav>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <h5>MI CUENTA</h5>
            <Nav className="flex-column">
              <Nav.Link href="">Entrar a Mi Cuenta</Nav.Link>
              <Nav.Link href="">Quiero Registrarme</Nav.Link>
              <Nav.Link href="">Ya soy cliente y quiero ingresar</Nav.Link>
            </Nav>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <h5>CONTACTO</h5>
            <p>Ubicación: Bodega chiringuito chatarra, Bodega 29, isla 1</p>
            <p>+56 9 1234 5678</p>
            <p>+56 9 5678 1234</p>
            <p>+56 9 5612 7834</p>
            <p>
              <a href="mailto:contacto.web@diprovet.cl">contacto.web@duoc.cl</a>
            </p>
          </Col>
        </Row>

        {/* Redes sociales */}
        <Row className="justify-content-center my-3">
          <Col xs="auto" className="d-flex gap-3 justify-content-center">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <img
                src="https://storage.googleapis.com/home.ripley.cl/rdex/footercomponent/social_network/twitter_dark.svg"
                alt="Twitter"
                width={25}
                height={25}
              />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img
                src="https://storage.googleapis.com/home.ripley.cl/rdex/footercomponent/social_network/facebook_dark.svg"
                alt="Facebook"
                width={25}
                height={25}
              />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <img
                src="https://storage.googleapis.com/home.ripley.cl/rdex/footercomponent/social_network/youtube_dark.svg"
                alt="YouTube"
                width={25}
                height={25}
              />
            </a>
          </Col>
        </Row>

        {/* Derechos de autor */}
        <Row>
          <Col className="text-center">
            <p>&copy; 2025 Cachupin, todos los derechos reservados</p>
          </Col>
        </Row>

      </Container>
    </footer>
  );
};

export default Footer;
