import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AgregarUsuario = () => {
  const navigate = useNavigate();
  
  const [name, setName] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const agregarUsuario = (e) => {
    e.preventDefault();

    // Crear el nuevo usuario
    const nuevoUsuario = { 
      id: Date.now(),  // Genera un ID único
      name,
      telefono,
      email,
      password
    };

    // Obtener los usuarios guardados en localStorage
    const usuariosGuardados = JSON.parse(localStorage.getItem('users')) || [];

    // Agregar el nuevo usuario
    usuariosGuardados.push(nuevoUsuario);

    // Guardar los usuarios actualizados en localStorage
    localStorage.setItem('users', JSON.stringify(usuariosGuardados));

    // Limpiar los campos
    setName('');
    setTelefono('');
    setEmail('');
    setPassword('');

    // Redirigir al panel de administración
    navigate('/admin');
  };

  return (
    <Container className="my-5">
      <h2>Agregar Usuario</h2>
      <Form onSubmit={agregarUsuario}>
        <Form.Group as={Row} className="mb-3" controlId="formUsuarioNombre">
          <Form.Label column sm="3">Nombre</Form.Label>
          <Col sm="9">
            <Form.Control 
              type="text" 
              placeholder="Nombre del Usuario" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formUsuarioTelefono">
          <Form.Label column sm="3">Teléfono</Form.Label>
          <Col sm="9">
            <Form.Control 
              type="text" 
              placeholder="Teléfono" 
              value={telefono} 
              onChange={(e) => setTelefono(e.target.value)} 
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formUsuarioEmail">
          <Form.Label column sm="3">Correo electrónico</Form.Label>
          <Col sm="9">
            <Form.Control 
              type="email" 
              placeholder="Correo electrónico" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formUsuarioPassword">
          <Form.Label column sm="3">Contraseña</Form.Label>
          <Col sm="9">
            <Form.Control 
              type="password" 
              placeholder="Contraseña" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
          </Col>
        </Form.Group>

        <Button variant="primary" type="submit">Registrar Usuario</Button>
      </Form>
    </Container>
  );
};

export default AgregarUsuario;
