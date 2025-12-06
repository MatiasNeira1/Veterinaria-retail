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

import CardProduct from "../components/CardProduct";
import comidas from "../data/comidaperros.json";
import Categorias from "../components/CategoriasHome.jsx";




export default function Menu() {
   return (
    <>
      <Navbar />
      {/*banner */}
      <Banner img={BannerImg} 
      position="center left">
        <h1 className="fw-bold mb-3">Menú de Comidas para Perros</h1>
      </Banner>

      
        {/*banner <Container className="py-5">
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
    
  </Container>*/}
  <Categorias />
    <Footer /> 
    </>
  );
}
