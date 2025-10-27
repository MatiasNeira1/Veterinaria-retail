import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userRegister = (e) => {
    e.preventDefault();

    const newUser = { name, telefono, email, password };
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    storedUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(storedUsers));

    setName("");
    setTelefono("");
    setEmail("");
    setPassword("");

    if (Notification.permission === "granted") {
      new Notification("Se ha creado el usuario");
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification("Se ha creado el usuario");
        }
      });
    }

    setTimeout(() => {
      navigate("/login");
    }, 0);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow-lg" style={{ maxWidth: "500px", width: "100%", borderRadius: "15px" }}>
        <Card.Body>
          <h2 className="text-center mb-4 fw-bold text-success">Crear Cuenta</h2>

          <Form onSubmit={userRegister}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="rounded-pill"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formTelefono">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Número de teléfono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                required
                className="rounded-pill"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="correo@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-pill"
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="rounded-pill"
              />
            </Form.Group>

            <Button type="submit" variant="success" className="w-100 rounded-pill py-2 fw-bold">
              Registrarse
            </Button>
          </Form>

          <div className="text-center mt-3">
            <Button variant="link" onClick={() => navigate("/login")} className="text-decoration-none">
              ¿Ya tienes cuenta? Inicia sesión
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Register;
