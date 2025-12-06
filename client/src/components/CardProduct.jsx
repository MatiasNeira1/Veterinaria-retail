import React from "react";
import { Card, Button } from "react-bootstrap";

export default function CardProduct({ img, titulo,texto, precio,id, onAdd }) {
    return (
    <Card 
      className="h-100 d-flex flex-column"
      style={{
                  
                  width: "100%",
                  border: "none",
                  borderRadius: "15px",
                  overflow: "hidden",
                  backgroundColor: "#f8f9fa",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
                  transition: "all 0.3s ease",
                }} border="success" 
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(0, 0, 0, 0.35)";
                  e.currentTarget.style.backgroundColor = "#e4e2e2ad";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 15px rgba(0,0,0,0.15)";
                  e.currentTarget.style.backgroundColor = "#f8f9fa";
                }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title >{titulo}</Card.Title>
        <Card.Text>
          {texto}
        </Card.Text>
        <Card.Text>
          {`$${precio} CLP`}
        </Card.Text>
        <Button variant="success"  onClick={() => onAdd(id)}>Comprar</Button>
           
      </Card.Body>
    </Card>
  );
 
}







