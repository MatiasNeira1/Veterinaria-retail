// src/pages/DetallesPlan.jsx
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import { useParams, useLocation, Link } from "react-router-dom";
import planes from "../data/plans.json";

const CLP = new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP" });

export default function DetailPlan() {
  const { id } = useParams();                 // <- necesitas este import
  const { state } = useLocation();            // <- para leer planId opcional
  const clickedId = state?.planId;

  // Verificación opcional (no rompe la app)
  if (clickedId && String(clickedId) !== String(id)) {
    console.warn("ID mismatch: clickedId", clickedId, "urlId", id);
  }

  const plan = planes.find(p => String(p.id) === String(id));

  if (!plan) {
    return (
      <Container className="py-5" style={{ maxWidth: 1100 }}>
        <h3>Plan no encontrado</h3>
        <Button as={Link} to="/plan" variant="secondary">Volver a planes</Button>
      </Container>
    );
  }

  const precio = plan.precioOferta ?? plan.precio ?? 0;

  return (
    <Container   className="container-sm" style={{ maxWidth: 1200 }}> 
      <Row className="justify-content-center g-4">
        <Col md={6}>
          <Card className="mi-card">
            <Card.Img variant="top" src={plan.img} alt={plan.titulo} />
            <Card.Body>
              <Card.Title>{plan.titulo}</Card.Title>
              {plan.texto && <Card.Text>{plan.texto}</Card.Text>}
              <div className="fw-bold fs-5 text-success">{CLP.format(precio)}</div>
              <h6 className="mt-3">Características</h6>
              <ListGroup className="mb-3">
                {(plan.caracteristicas ?? []).map((c, i) => (
                  <ListGroup.Item key={i}>{c}</ListGroup.Item>
                ))}
              </ListGroup>
              

            </Card.Body>
             <Button as={Link} to="/plan" variant="outline-secondary">Volver</Button> 
          </Card>
        </Col>
      </Row>
   </Container>
  );
}
