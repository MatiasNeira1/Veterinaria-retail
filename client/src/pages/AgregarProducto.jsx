import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AgregarProducto = () => {
  const navigate = useNavigate();
  
  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');
  const [src, setSrc] = useState('');

  const agregarProducto = (e) => {
    e.preventDefault();

    // Crear el nuevo producto
    const nuevoProducto = { 
      id: Date.now(),  // Genera un ID único basado en la fecha actual
      nombre,
      categoria,
      precio: parseFloat(precio),
      stock: parseInt(stock),
      src
    };

    // Obtener los productos guardados en localStorage
    const productosGuardados = JSON.parse(localStorage.getItem('carrito')) || [];

    // Agregar el nuevo producto
    productosGuardados.push(nuevoProducto);

    // Guardar los productos actualizados en localStorage
    localStorage.setItem('carrito', JSON.stringify(productosGuardados));

    // Limpiar los campos
    setNombre('');
    setCategoria('');
    setPrecio('');
    setStock('');
    setSrc('');

    // Redirigir al panel de administración
    navigate('/admin');
  };

  return (
    <Container className="my-5">
      <h2>Agregar Producto</h2>
      <Form onSubmit={agregarProducto}>
        <Form.Group as={Row} className="mb-3" controlId="formProductoNombre">
          <Form.Label column sm="3">Nombre</Form.Label>
          <Col sm="9">
            <Form.Control 
              type="text" 
              placeholder="Nombre del Producto" 
              value={nombre} 
              onChange={(e) => setNombre(e.target.value)} 
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formProductoCategoria">
          <Form.Label column sm="3">Categoría</Form.Label>
          <Col sm="9">
            <Form.Control 
              type="text" 
              placeholder="Categoría" 
              value={categoria} 
              onChange={(e) => setCategoria(e.target.value)} 
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formProductoPrecio">
          <Form.Label column sm="3">Precio</Form.Label>
          <Col sm="9">
            <Form.Control 
              type="number" 
              placeholder="Precio" 
              value={precio} 
              onChange={(e) => setPrecio(e.target.value)} 
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formProductoStock">
          <Form.Label column sm="3">Stock</Form.Label>
          <Col sm="9">
            <Form.Control 
              type="number" 
              placeholder="Cantidad en Stock" 
              value={stock} 
              onChange={(e) => setStock(e.target.value)} 
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formProductoImagen">
          <Form.Label column sm="3">Imagen URL</Form.Label>
          <Col sm="9">
            <Form.Control 
              type="text" 
              placeholder="URL de la imagen" 
              value={src} 
              onChange={(e) => setSrc(e.target.value)} 
              required
            />
          </Col>
        </Form.Group>

        <Button variant="primary" type="submit">Agregar Producto</Button>
      </Form>
    </Container>
  );
};

export default AgregarProducto;
