//import { useState,useEffect } from "react";
import { Form, Button, Card, Container, Row, Col, Image } from "react-bootstrap";
//import perroCachupin from "../assets/img/foto-planes.png";
import "../css/plan.css";
import planes from "../data/plans.json";
import { useNavigate } from "react-router-dom";
import CardProduct from "../components/CardProduct.jsx";

const CLP = new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP" });

export default function Plan() {
  const navigate = useNavigate();

  const irADetallesPlan = (id) => {
    navigate(`/DetallesPlan/${id}`, { state: { planId: id } });
  }
  return (
    <Container className="py-4">
          <h2 className="fw-bold mb-4 text-center">Planes Veterinarios</h2>
          <Row xs={1} md={2} lg={4} className="g-4">
            {planes.map((planes) => (
              <Col key={planes.id}>
                <CardProduct
                  img={planes.img}
                  titulo={planes.titulo}
                  texto={planes.texto}
                  precio={planes.precio}
                  id={planes.id}
                  onAdd={irADetallesPlan}
                />
              </Col>
             
            ))}
            
    </Row>
  </Container>

  );

}