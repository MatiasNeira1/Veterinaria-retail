//import { useState,useEffect } from "react";
import { Form, Button, Card, Container, Row, Col, Image } from "react-bootstrap";
//import perroCachupin from "../assets/img/foto-planes.png";
import "../css/plan.css";
import planes from "../data/plans.json";
import { useNavigate } from "react-router-dom";

const CLP = new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP" });

export default function Plan() {
  const navigate = useNavigate();

  const irADetallesPlan = (id) => {
    navigate(`/DetallesPlan/${id}`, { state: { planId: id } });
  }
  return (
    <Container className="my-5 mx-auto" style={{ maxWidth: 1100 }} >
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 gap-4 justify-content-center">
        {planes.map((plan) => (
        <Col key={plan.id} className="d-flex">
        <Card style={{ width: '18rem'} }className="mi-card" >
          <Card.Img variant="top" src={plan.img} />
          <Card.Body>
            <Card.Title>{plan.titulo}</Card.Title>
            <Card.Text>
              {plan.texto}
            </Card.Text>
            <Card.Text className="fw-bold fs-5">
                  {CLP.format(plan.precio)}
                </Card.Text>  


            <Button variant="success"  onClick={() => irADetallesPlan(plan.id)} >Ver detalles</Button>
          </Card.Body>
      </Card> 
      </Col>
        ))}
       </Row>
    </Container>

  );

}