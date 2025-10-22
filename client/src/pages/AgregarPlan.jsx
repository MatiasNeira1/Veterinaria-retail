import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AgregarPlan = () => {
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState('');
  const [texto, setTexto] = useState('');
  const [precio, setPrecio] = useState('');
  const [duracion, setDuracion] = useState('');
  const [img, setImg] = useState('');

  const agregarPlan = (e) => {
    e.preventDefault();

    // Crear el nuevo plan
    const nuevoPlan = { 
      id: Date.now(),  // Genera un ID único
      titulo,
      texto,
      precio: parseFloat(precio),
      duracion,
      img
    };

    // Obtener los planes guardados en localStorage
    const planesGuardados = JSON.parse(localStorage.getItem('planes')) || [];

    // Agregar el nuevo plan
    planesGuardados.push(nuevoPlan);

    // Guardar los planes actualizados en localStorage
    localStorage.setItem('planes', JSON.stringify(planesGuardados));

    // Limpiar los campos
    setTitulo('');
    setTexto('');
    setPrecio('');
    setDuracion('');
    setImg('');

    // Redirigir al panel de administración
    navigate('/admin');
  };

  return (
    <Container className="my-5">
      <h2>Agregar Plan</h2>
      <Form onSubmit={agregarPlan}>
        <Form.Group as={Row} className="mb-3" controlId="formPlanTitulo">
          <Form.Label column sm="3">Título</Form.Label>
          <Col sm="9">
            <Form.Control 
              type="text" 
              placeholder="Título del Plan" 
              value={titulo} 
              onChange={(e) => setTitulo(e.target.value)} 
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlanTexto">
          <Form.Label column sm="3">Texto</Form.Label>
          <Col sm="9">
            <Form.Control 
              type="text" 
              placeholder="Descripción del Plan" 
              value={texto} 
              onChange={(e) => setTexto(e.target.value)} 
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlanPrecio">
          <Form.Label column sm="3">Precio</Form.Label>
          <Col sm="9">
            <Form.Control 
              type="number" 
              placeholder="Precio" 
              value={precio} 
              onChange={(e) => setPrecio(e.target.value)} 
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlanDuracion">
          <Form.Label column sm="3">Duración</Form.Label>
          <Col sm="9">
            <Form.Control 
              type="text" 
              placeholder="Duración del Plan" 
              value={duracion} 
              onChange={(e) => setDuracion(e.target.value)} 
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlanImg">
          <Form.Label column sm="3">Imagen URL</Form.Label>
          <Col sm="9">
            <Form.Control 
              type="text" 
              placeholder="URL de la imagen" 
              value={img} 
              onChange={(e) => setImg(e.target.value)} 
              required
            />
          </Col>
        </Form.Group>

        <Button variant="primary" type="submit">Agregar Plan</Button>
      </Form>
    </Container>
  );
};

export default AgregarPlan;
