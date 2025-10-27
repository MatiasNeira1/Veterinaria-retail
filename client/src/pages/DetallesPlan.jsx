// src/pages/DetallesPlan.jsx
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useParams, useLocation, Link } from "react-router-dom";
import planes from "../data/plans.json";
import  Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CLP = new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP" });

export default function DetailPlan() {
  const { id } = useParams();               
  const { state } = useLocation();            
  const clickedId = state?.planId;

  
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
    <>
    <Navbar/>
    <Container fluid className="p-0">
      <Row className="g-0">
        <Col xs={12}>
          <Card className="border-0 rounded-0 min-vh-100">
            <Row className="g-0 min-vh-100">
              {/* Imagen a la IZQUIERDA */}
              <Col xs={12} lg={6} className="order-2">
                <img
                  src={plan.img}
                  alt={plan.titulo}
                  className="img-fluid"/>
              </Col>
  
              {/* Contenido a la DERECHA */}
              <Col xs={12} lg={6} className="order-2">
                <Card.Body className="px-3 px-md-5 my-auto w-100">

                  <Card.Title className="fs-1">{plan.titulo}</Card.Title>
                  
                  {<Card.Text>{plan["texto-detalle"]}</Card.Text>}
                  
                  
                  <div style={{ paddingRight: "210px", paddingLeft: "20px" }}>
                    <h3 className="text-success fw-bold" >{CLP.format(precio)}</h3>
                    <h4 className="mt-3 text-success" style={{ paddingRight: "10px"}}>Plan incluye:</h4>

                  <div style={{ paddingRight: "20px", paddingLeft: "20px" }}>
                      {(plan.caracteristicas ?? []).map((c, i) => (
                        <p key={i} >{`• ${c}`}</p>  
                      ))}
                  </div>
                  

                </div>

                  <Button variant="success" size="lg" as={Link} to="/plan">
                  Volver
                </Button>
                <Button variant="success" size="lg" as={Link} to="/plan">
                  Añadir al carrito
                </Button>
                </Card.Body>
              </Col>

            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
    <Footer/>  
    </>
     
  );
  
}

