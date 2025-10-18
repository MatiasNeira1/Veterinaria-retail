import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

export default function AgendarCita() {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mascota, setMascota] = useState('');
  const [servicio, setServicio] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [comentarios, setComentarios] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Cita confirmada:', { nombre, telefono, mascota, servicio, fecha, hora, comentarios });
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} md={8} className="mx-auto">
          <h1 className="text-center mb-4">Agendar Cita - Cachupin</h1>
          <h2 className="text-center mb-4">Formulario de Agenda</h2>

          <Form onSubmit={handleSubmit}>
            {/* Nombre completo */}
            <Form.Group className="mb-3" controlId="formNombre">
              <Form.Label>Nombre completo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre completo"
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

            {/* Fecha deseada */}
            <Form.Group className="mb-3" controlId="formFecha">
              <Form.Label>Fecha deseada</Form.Label>
              <Form.Control
                type="date"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                required
              />
            </Form.Group>

            {/* Hora deseada */}
            <Form.Group className="mb-3" controlId="formHora">
              <Form.Label>Hora deseada</Form.Label>
              <Form.Control
                type="time"
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

            {/* Botón para confirmar cita */}
            <Button variant="success" type="submit" className="w-100">
              Confirmar cita
            </Button>
          </Form>

          {/* Volver */}
          <div className="text-center mt-3">
            <Button variant="link" onClick={() => window.history.back()}>
              ← Volver
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
