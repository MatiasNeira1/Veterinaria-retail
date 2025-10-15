//import { useState,useEffect } from "react";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";
import perroCachupin from "../assets/img/perro-cachupin.png";

export default function Showplans(){



    return(
/* Quede en editar la card en css, ya que se pueden editar elementos de bootstrap en css*/
    <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src={perroCachupin}/>
      <Card.Body>
        <Card.Title>Plan Anual de Salud Perro Adulto - Básico</Card.Title>
        <Card.Text>
            Consulta veterinaria válida para solo una mascota.
        </Card.Text>
        <Button variant="success">ver detalles</Button>
      </Card.Body>
    </Card>
  );
}

