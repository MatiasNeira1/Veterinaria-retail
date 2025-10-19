import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Usamos useNavigate para redirigir al usuario

const Register = () => {
  const navigate = useNavigate(); // Hook para la navegación
  const [name, setName] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userRegister = (e) => {
    e.preventDefault();

    const newUser = { name, telefono, email, password };

    // Obtener los usuarios ya guardados en localStorage (si existen)
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Agregar el nuevo usuario
    storedUsers.push(newUser);

    // Guardar los usuarios actualizados en localStorage
    localStorage.setItem("users", JSON.stringify(storedUsers));

    setName("");
    setTelefono("");
    setEmail("");
    setPassword("");

    console.log("Usuario registrado: " + email);

    // Notificación de navegador
    if (Notification.permission === "granted") {
      new Notification("Se ha creado el usuario");
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification("Se ha creado el usuario");
        }
      });
    }

    // Redirigir al login después de mostrar la notificación
    setTimeout(() => {
      navigate("/login"); // Redirige automáticamente al login
    },0); // 
  };

  return (
    <Container className="mt-5">
      <form onSubmit={userRegister}>
        {/* Campo de nombre */}
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
          <Form.Label column sm="3">
            Nombre
          </Form.Label>
          <Col sm="9">
            <Form.Control
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Col>
        </Form.Group>

        {/* Campo de telefono */}
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextLastName">
          <Form.Label column sm="3">
            Telefono
          </Form.Label>
          <Col sm="9">
            <Form.Control
              type="text"
              placeholder="Telefono"
              value={telefono}
              onChange={(e) => setTelefono(Number(e.target.value))}
            />
          </Col>
        </Form.Group>

        {/* Campo de email */}
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="3">
            Correo electronico
          </Form.Label>
          <Col sm="9">
            <Form.Control
              type="email"
              placeholder="correo@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Col>
        </Form.Group>

        {/* Campo de contraseña */}
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="3">
            Contraseña
          </Form.Label>
          <Col sm="9">
            <Form.Control
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Button type="submit" variant="success">
          Registrar
        </Button>
      </form>

      <Button variant="link" onClick={() => navigate("/login")}>
        Ir a inicio de sesión
      </Button>
    </Container>
  );
};

export default Register;
