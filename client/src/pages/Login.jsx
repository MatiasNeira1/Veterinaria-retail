import React, { useState } from "react";
import { Form, Button, Container, Row, Col,Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; 
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
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
    <>
    <Navbar />
     
    <Container style={{padding: "1rem" , marginLeft:"250px", marginRight:"200px", marginTop: "250px",maxWidth: 700, }}>
     <h1 className="text-center mb-4 display-4">Iniciar Sesión</h1>
      <Form onSubmit={handleLogin}>
        
        {/* Campo de email */}
        <Form.Group as={Row} className="mb-4 justify-content-center " controlId="formBasicEmail" >
          <Form.Label column sm="5 " >Correo electrónico</Form.Label>
          <Col sm="9">
            <Form.Control
            className="text-center rounded-pill"
              type="email"
              placeholder="Ingresar correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ marginBottom: "10px" }}
            />
          </Col>
        </Form.Group>

        {/* Campo de contraseña */}
        <Form.Group as={Row} className="mb-5 justify-content-center " controlId="formBasicPassword">
          <Form.Label column sm="5 ">Contraseña</Form.Label>
          <Col sm="9">
            <Form.Control
            className="text-center rounded-pill"
              type="password"
              placeholder="Ingresar Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Col>
        </Form.Group>
        {/* Error de login */}
        {error && <p className="text-danger">{error}</p>}
        <Button variant="success" type="submit" className="w-50">
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

    <Container className="text-center mt-4 mb-4">

    </Container>
    <Footer />
    </>
    
  );
  
};

export default Login;
