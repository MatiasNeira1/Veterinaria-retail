import React, { useState, useEffect } from "react";
import Plan from "./Plan";
import Navbar from "../components/Navbar";
import Banner from "./Banner";
import BannerImg from '/img/fotoBanner.png';
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
import CardProduct from "../components/CardProduct";
import comidas from "../data/comidaperros.json";





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
      {/*banner */}
      <Banner img={BannerImg} 
      position="center left">
        <h1 className="fw-bold mb-3">Menú de Comidas para Perros</h1>
      </Banner>

      
        <Container className="py-5">
          <h1 className="fw-bold mb-4 text-start">Ofertas exclusivas!</h1>
          <Row lg={4} className="g-5">
            {comidas.map((comida) => (
              <Col key={comida.id}>
                <CardProduct
                  img={comida.img}
                  titulo={comida.titulo}
                  texto={comida.texto}
                  precio={comida.precio}
                />
              </Col>
            ))}
    </Row>
  </Container>
    <Footer /> 
    </>
  );
}
