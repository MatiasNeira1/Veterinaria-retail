import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import api from "../api/api";

export default function AgendarCita() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mascota, setMascota] = useState("");
  const [servicio, setServicio] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [comentarios, setComentarios] = useState("");

  const handleSubmit =async (e) => {
    e.preventDefault();

    const body = {
      nombre: nombre,
      telefono: telefono,
      mascota: mascota,
      servicio: servicio,
      fecha: fecha,
      hora: hora,
      comentarios: comentarios
    };

    try {
      const res = await api.post("/citas/agendar", body);
      console.log("Cita guardada:", res.data);
      alert("Cita agendada con éxito");

      setNombre("");
      setTelefono("");
      setMascota("");
      setServicio("");
      setFecha("");
      setHora("");
      setComentarios("");
    } catch (error) {
      console.error("Error al agendar cita", error);
      alert("Ocurrió un error al agendar la cita. Intenta nuevamente.");
    }
  };
  

  return (
    <>
      <Navbar />
    <main style={{ paddingTop: "3.5rem" }}>
    <Container className="d-flex justify-content-center align-items-center mt-5 mb-5">
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={11} md={10} lg={9} xl={8}>
          <Card
            className="shadow-lg border-0"
            style={{ borderRadius: "20px" }}
          >
            <Card.Body className="p-4 p-md-5">
              <h1 className="text-center mb-2 fw-bold" style={{ color: "#198754" }}>
                Agendar Cita - Cachupin
              </h1>
              <h2 className="text-center mb-4 fs-5 text-muted">
                Formulario de Agenda
              </h2>

              <Form onSubmit={handleSubmit}>
                {/* Nombre completo */}
                <Form.Group className="mb-3" controlId="formNombre">
                  <Form.Label>Nombre completo</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nombre completo"
                    className="rounded-pill"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                  />
                </Form.Group>

                {/* Teléfono de contacto */}
                <Form.Group className="mb-3" controlId="formTelefono">
                  <Form.Label>Teléfono de contacto</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Teléfono de contacto"
                    className="rounded-pill"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    required
                  />
                </Form.Group>

                {/* Nombre de la mascota */}
                <Form.Group className="mb-3" controlId="formMascota">
                  <Form.Label>Nombre de la mascota</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nombre de la mascota"
                    className="rounded-pill"
                    value={mascota}
                    onChange={(e) => setMascota(e.target.value)}
                    required
                  />
                </Form.Group>

                {/* Tipo de servicio */}
                <Form.Group className="mb-3" controlId="formServicio">
                  <Form.Label>Tipo de servicio</Form.Label>
                  <Form.Control
                    as="select"
                    className="rounded-pill"
                    value={servicio}
                    onChange={(e) => setServicio(e.target.value)}
                    required
                  >
                    <option value="">-- Selecciona un servicio --</option>
                    <option value="veterinaria">Consulta Veterinaria</option>
                    <option value="peluqueria">Peluquería</option>
                    <option value="vacunacion">Vacunación</option>
                    <option value="bano">Baño y Limpieza</option>
                  </Form.Control>
                </Form.Group>

                {/* Fecha */}
                <Form.Group className="mb-3" controlId="formFecha">
                  <Form.Label>Fecha deseada</Form.Label>
                  <Form.Control
                    type="date"
                    className="rounded-pill"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                    required
                  />
                </Form.Group>

                {/* Hora*/}
                <Form.Group className="mb-3" controlId="formHora">
                  <Form.Label>Hora deseada</Form.Label>
                  <Form.Control
                    type="time"
                    className="rounded-pill"
                    value={hora}
                    onChange={(e) => setHora(e.target.value)}
                    required
                  />
                </Form.Group>

                {/* Comentarios adicionales */}
                <Form.Group className="mb-3" controlId="formComentarios">
                  <Form.Label>Comentarios adicionales</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    value={comentarios}
                    onChange={(e) => setComentarios(e.target.value)}
                  />
                </Form.Group>

                {/* boton para confirmar cita */}
                <Button
                  variant="success"
                  type="submit"
                  className="w-100 rounded-pill py-2 fw-semibold"
                >
                  Confirmar cita
                </Button>
              </Form>
            </Card.Body>
            <div className="text-center mt-3">
            <Button variant="link" onClick={() => window.history.back()}>
              ← Volver
            </Button>
          </div>
          </Card>

          {/* Volver */}
          
        </Col>
      </Row>
    </Container>
    </main>
    <Footer />
      </>
      
  );
    
}
