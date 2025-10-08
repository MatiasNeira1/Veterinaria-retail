import { useState } from "react";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";

export default function Register(){
    const[users, SetUsers]=useState([]);
    const[name, setName] = useState("");
    const[telefono,setTelefono]= useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    //const [mensaje, setMensaje] = useState("");

    const userRegister = (e) => {
        e.preventDefault();

      const newUser= {name,telefono,email,password};

      SetUsers([users,newUser])
      setName("");
      setTelefono("");
      setEmail("");
      setPassword("");
      
      console.log("Email logueado:"+ {email})
    }

  return (
    <Container className="mt-5">
      <form onSubmit={userRegister}>
        {/*Campo de nombre*/}
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextName"> 
        <Form.Label column sm="3">
        Nombre
        </Form.Label>  
        <Col sm="9">
        <Form.Control type="text" 
        placeholder="Nombre"
        value={name} 
        onChange={(e) => setName(e.target.value)}/>

        </Col> 
    </Form.Group>

    <Form.Group as={Row} className="mb-3" controlId="formPlaintextLastName">
        <Form.Label column sm="3">
            Telefono
        </Form.Label>
        <Col sm="9">
            <Form.Control type="text" 
            placeholder="Telefono" 
            value={telefono}
            onChange={(e) => setTelefono(Number(e.target.value))}
            />
        </Col>
    </Form.Group>

    {/*Campo de email*/}
 
    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="3">
        Correo electronico
      </Form.Label>
      <Col sm="9">
        <Form.Control type="email"
         placeholder="correo@ejemplo.com"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         />

      </Col>
    </Form.Group>

    {/*Campo de contraseña*/}
    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
      <Form.Label column sm="3">
        Contraseña
      </Form.Label>
      <Col sm="9">
        <Form.Control type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
      </Col>
    </Form.Group>

    <Button type="submit"variant="success">Registrar</Button>

    </form>
  

</Container>

  );
}




