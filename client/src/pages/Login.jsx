import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import api from "../api/api";
import { auth } from "../firebase/firebase.js"; 
import { signInWithEmailAndPassword } from "firebase/auth"; 

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Por favor, ingresa el correo y la contraseña.");
      return;
    }

    try {
      
      const cred = await signInWithEmailAndPassword(auth, email, password);
      const user = cred.user;
      console.log("Firebase login OK:", user.email);
      //aqui obtiene el token del user de firebase
      const idToken = await user.getIdToken();
      console.log("ID Token Firebase:", idToken);

      const res = await api.post("/auth/login",null,{
        headers: {
          Authorization: `Bearer ${idToken}`,
        }
      });

      const data = res.data;

    
      localStorage.setItem("auth", JSON.stringify(data));
      console.log("Sesión iniciada en backend con el correo", data.correo);

      
      if (data.rolId === 1) {
       navigate("/Adminpanel");     
    } else if (data.rolId === 4) {
      navigate("/Menu");       
    } else {
      
      navigate("/Menu");
    } 
      
    } catch (err) {
      console.error("Error en login:", err);

      let msg = "Error al iniciar sesión. Verifica tus datos.";

    
      if (err.code === "auth/user-not-found") {
        msg = "Usuario no registrado en Firebase.";
      } else if (err.code === "auth/wrong-password") {
        msg = "Contraseña incorrecta.";
      } else if (err.code === "auth/invalid-email") {
        msg = "Correo inválido.";
      }

      
      const backendMsg =
        err.response?.data?.message || err.response?.data || null;
      if (backendMsg) msg = backendMsg;

      setError(msg);
    }
  };

  return (
    <>
      <Navbar />

      <Container
        style={{
          padding: "1rem",
          marginLeft: "250px",
          marginRight: "200px",
          marginTop: "250px",
          maxWidth: 700,
        }}
      >
        <h1 className="text-center mb-4 display-4">Iniciar Sesión</h1>

        <Form onSubmit={handleLogin}>
          {/* Campo de email */}
          <Form.Group
            as={Row}
            className="mb-4 justify-content-center"
            controlId="formBasicEmail"
          >
            <Form.Label column sm="5">
              Correo electrónico
            </Form.Label>
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
          <Form.Group
            as={Row}
            className="mb-5 justify-content-center"
            controlId="formBasicPassword"
          >
            <Form.Label column sm="5">
              Contraseña
            </Form.Label>
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
          {error && <p className="text-danger text-center">{error}</p>}

          <div className="d-flex justify-content-center">
            <Button variant="success" type="submit" className="w-50">
              Ingresar
            </Button>
          </div>
        </Form>

        {/* Enlace para registrarse */}
        <div className="text-center mt-3">
          <Button variant="link" onClick={() => navigate("/register")}>
            ¿No tienes cuenta? Regístrate aquí
          </Button>
        </div>
      </Container>

      <Container className="text-center mt-4 mb-4"></Container>
      <Footer />
    </>
  );
};

export default Login;
