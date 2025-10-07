import { useState } from "react";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";

export default function Register(){

    const[name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mensaje, setMensaje] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();


        
    }

  return (
    <Container className="mt-5">
        {/*Campo de nombre*/}
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextName"> 
        <Form.Label column sm="3">
        Nombre
        </Form.Label>  
        <Col sm="9">
        <Form.Control type="text" placeholder="Nombre" />
        </Col> 
    </Form.Group>

    <Form.Group as={Row} className="mb-3" controlId="formPlaintextLastName">
        <Form.Label column sm="3">
            Telefono
        </Form.Label>
        <Col sm="9">
            <Form.Control type="text" placeholder="Telefono" />
        </Col>
    </Form.Group>

    {/*Campo de email*/}
  <Form>
    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="3">
        Correo electronico
      </Form.Label>
      <Col sm="9">
        <Form.Control type="email" placeholder="correo@ejemplo.com" />
      </Col>
    </Form.Group>

    {/*Campo de contraseña*/}
    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
      <Form.Label column sm="3">
        Contraseña
      </Form.Label>
      <Col sm="9">
        <Form.Control type="password" placeholder="Contraseña" />
      </Col>
    </Form.Group>


  </Form>

</Container>

  );
}




