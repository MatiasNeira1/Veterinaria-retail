import { useState } from "react";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";

export default function register(){

    const[name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mensaje, setMensaje] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();


        
    }



}