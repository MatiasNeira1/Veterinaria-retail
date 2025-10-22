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
      <Navbar/>



      {/* ¿banner */}
      <Banner image={BannerImg} height={520}>
        {/* Texto y botón opcional como en Dr.Pet */}
        <h2 className="fw-bold mb-2">¡Imperdibles!</h2>
        <p className="mb-3">En alimentos seleccionados, despacho rápido.</p>
        {/* Puedes meter un botón aquí si quieres */}
      </Banner>

      <Footer />  
    </>
  );
}
