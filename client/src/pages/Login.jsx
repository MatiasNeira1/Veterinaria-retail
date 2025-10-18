import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; 

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Por favor, ingresa el correo y la contraseña.");
      return; 
    }

   
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find((user) => user.email === email);

    if (user) {
      if (user.password === password) {
        console.log("Sesión iniciada con el email " + email);
        setError(""); 
        navigate("/Menu"); 
      } else {
        setError("Contraseña incorrecta");
      }
    } else {
      setError("Usuario no encontrado");
    }
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Iniciar sesión</h1>
      <Form onSubmit={handleLogin}>
        {/* Campo de email */}
        <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
          <Form.Label column sm="3">Correo electrónico</Form.Label>
          <Col sm="9">
            <Form.Control
              type="email"
              placeholder="Ingresar correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Col>
        </Form.Group>

        {/* Campo de contraseña */}
        <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
          <Form.Label column sm="3">Contraseña</Form.Label>
          <Col sm="9">
            <Form.Control
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Col>
        </Form.Group>

        {/* Error de login */}
        {error && <p className="text-danger">{error}</p>}

        <Button variant="primary" type="submit" className="w-100">
          Ingresar
        </Button>
      </Form>

      {/* Enlace para registrarse */}
      <div className="text-center mt-3">
        <Button variant="link" onClick={() => navigate("/register")}>
          ¿No tienes cuenta? Regístrate aquí
        </Button>
      </div>
    </Container>
  );
};

export default Login;
