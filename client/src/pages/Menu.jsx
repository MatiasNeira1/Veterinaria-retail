import React, { useState, useEffect } from "react";
import Plan from "./Plan";
import Navbar from "../components/Navbar";
import {
  Container,
  Offcanvas,
  Nav,
  Form,
  Button,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import Footer from "../components/Footer";

import CorreaGato from '/img/CorreaGato.jpg';
import ComidaGato from '/img/ComidaGato.webp';
import JugueteGato from '/img/JugueteGato.webp';

export default function Menu() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Índice de la imagen actual
  const images = [
    { src: CorreaGato, alt: "Correa Gato" },
    { src: ComidaGato, alt: "Comida Gato" },
    { src: JugueteGato, alt: "Juguete Gato" },
  ];

  const handleClose = () => setShowSidebar(false);
  const handleShow = () => setShowSidebar(true);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <>
      <Navbar />



      {/* Carrusel de imágenes */}
      <Container className="my-4">
        <Row className="justify-content-center" style={{ gap: "1rem" }}>
          <Col xs="auto">
            <Card style={{ maxWidth: "350px", textAlign: "center" }}>
              <Card.Img
                variant="top"
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                style={{ width: "100%", borderRadius: "40px" }}
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "1rem" }}>
                  {images[currentImageIndex].alt}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}
