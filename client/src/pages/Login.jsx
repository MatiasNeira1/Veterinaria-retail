import { useState } from "react";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";
import users from "./Register";

export default function login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    
    const handleLogin = (e) => {
    e.preventDefault();
    console.log("Iniciando...")
    console.log("Sesiona iniciada con email " + email)
    

    const user=users.find((user)=>user.email===email)

    if(user){
        if(user.password===password){
          console.log("Sesion iniciada con el email " +email)    
          setError("")
        }else{
            setError("Contraseña incorrecta")
        }

    }
}

    
    
return (
    <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>
        Email address
         </Form.Label>
        <Form.Control type="email" placeholder="Ingresar correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Contraseña"
        value={password} 
        onChange={(e) => setPassword(e.target.value)}/>

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      {error && <p className="text-danger">{error}</p>}
      <Button variant="primary" type="submit">
        Ingresar
      </Button>
    </Form>
  );

}