import React from "react";
import { Card, Button } from "react-bootstrap";

export default function CardProduct({ img, titulo,texto, precio,id, onAdd }) {
    return (
    <Card style={{ width: '18rem' }} border="success">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title >{titulo}</Card.Title>
        <Card.Text>
          {texto}
        </Card.Text>
        <Card.Text>
          {`$${precio} CLP`}
        </Card.Text>
        <Button variant="success"  onClick={() => onAdd(id)}>Ver Detalles</Button>
           
      </Card.Body>
    </Card>
  );
 
}







