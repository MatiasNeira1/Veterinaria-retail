// src/pages/DetallesPlan.jsx
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useParams, useLocation, Link } from "react-router-dom";
import planes from "../data/plans.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CLP = new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP" });

export default function DetailPlan() {
  const { id } = useParams();
  const { state } = useLocation();
  const clickedId = state?.planId;

  if (clickedId && String(clickedId) !== String(id)) {
    console.warn("ID mismatch: clickedId", clickedId, "urlId", id);
  }

  const plan = planes.find((p) => String(p.id) === String(id));
  if (!plan) {
    return (
      <Container className="py-5" style={{ maxWidth: 1100 }}>
        <h3>Plan no encontrado</h3>
        <Button as={Link} to="/plan" variant="secondary">
          Volver a planes
        </Button>
      </Container>
    );
  }

  const precio = plan.precioOferta ?? plan.precio ?? 0;

  // 🔹 NUEVO: función para añadir este plan al carrito
  const añadirAlCarrito = () => {
    // leer carrito actual
    const carritoGuardado =
      JSON.parse(localStorage.getItem("carrito")) || [];

    // armar el item con la misma estructura que en Productos.jsx
    const itemCarrito = {
      id: plan.id,           // mismo campo 'id'
      nombre: plan.titulo,   // nombre del producto/plan
      precio: precio,        // precio calculado
      src: plan.img,         // imagen del plan
    };

    const nuevoCarrito = [...carritoGuardado, itemCarrito];

    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));

    // opcional: alert o toast
    alert(`✅ ${plan.titulo} agregado al carrito`);
  };

  return (
    <>
      <Navbar />

      <Container fluid className="p-0 pt-5">
        <Row className="g-0 min-vh-100 align-items-center">
          <Col xs={12} lg={6} className="order-1 order-lg-1 d-flex">
            <img
              src={plan.img}
              alt={plan.titulo}
              className="w-100 h-100 object-fit-cover"
              style={{
                maxHeight: "calc(100vh - 80px)",
                objectPosition: "left center",
              }}
            />
          </Col>

          <Col lg={6} className="order-2 order-lg-2 d-flex">
            <Card className="border-0 rounded-0 w-100">
              <Card.Body
                className="my-auto px-3 px-md-5"
                style={{ maxWidth: 560, margin: "0 auto" }}
              >
                <Card.Title className="fs-1">{plan.titulo}</Card.Title>

                {plan["texto-detalle"] && (
                  <Card.Text className="mb-3">
                    {plan["texto-detalle"]}
                  </Card.Text>
                )}

                <h3 className="text-success fw-bold">
                  {CLP.format(precio)}
                </h3>
                <h4 className="mt-3 text-success">Incluye:</h4>
                <div>
                  {(plan.caracteristicas ?? []).map((c, i) => (
                    <p key={i} className="mb-1">
                      • {c}
                    </p>
                  ))}
                </div>

                <div className="d-flex gap-2 mt-3 flex-wrap">
                  <Button as={Link} to="/plan" variant="secondary">
                    Volver
                  </Button>

                  {/* 🔹 usar la función aquí */}
                  <Button variant="success" onClick={añadirAlCarrito}>
                    Añadir al carrito
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}
