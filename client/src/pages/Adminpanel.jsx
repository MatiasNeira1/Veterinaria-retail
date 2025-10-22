import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Table, Card, Form, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const navigate = useNavigate();

  // Cargar los productos, usuarios y planes desde localStorage
  const [productos, setProductos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [planes, setPlanes] = useState([]);

  useEffect(() => {
    // Cargar datos desde localStorage
    const productosGuardados = JSON.parse(localStorage.getItem('carrito')) || [];
    const usuariosGuardados = JSON.parse(localStorage.getItem('users')) || [];
    const planesGuardados = JSON.parse(localStorage.getItem('planes')) || [];

    setProductos(productosGuardados);
    setUsuarios(usuariosGuardados);
    setPlanes(planesGuardados);
  }, []);

  // Redirigir a las páginas de detalles (Producto, Usuario, etc.)
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div>
      {/* Header */}
      <header className="top-bar">
        <div className="left-section">
          <h1 className="text-white">Admin Cachupin</h1>
        </div>
        <div className="right-section">
          <span className="admin-user text-white">👤 Administrador</span>
          <Button variant="/login" onClick={() => alert('Cerrar sesión')} className="text-white">Cerrar sesión</Button>
        </div>
      </header>

      {/* Admin Container */}
      <Container className="admin-container my-5">
        <Row>
          {/* Sidebar */}
          <Col xs={3} className="admin-sidebar bg-dark text-white p-3 rounded">
            <Nav className="flex-column">
              <Nav.Link href="#dashboard" className="text-white">📊 Dashboard</Nav.Link>
              <Nav.Link href="#productos" className="text-white">📦 Gestión de Productos</Nav.Link>
              <Nav.Link href="#usuarios" className="text-white">👥 Gestión de Usuarios</Nav.Link>
              <Nav.Link href="#ordenes" className="text-white">🧾 Pedidos</Nav.Link>
              <Nav.Link href="#planes" className="text-white">📃 Planes</Nav.Link>
              <Nav.Link href="#configuracion" className="text-white">⚙️ Configuración</Nav.Link>
            </Nav>
          </Col>

          {/* Main Content */}
          <Col xs={9}>
            {/* Dashboard */}
            <section id="dashboard">
              <h2>📊 Dashboard</h2>
              <p>Bienvenido al panel de administración. Aquí puedes controlar el contenido del sitio.</p>
              <div className="dashboard-cards">
                <Card className="text-center p-3 mb-3">
                  <Card.Body>
                    <Card.Title>Productos</Card.Title>
                    <Card.Text><strong>{productos.length}</strong></Card.Text>
                  </Card.Body>
                </Card>
                <Card className="text-center p-3 mb-3">
                  <Card.Body>
                    <Card.Title>Usuarios</Card.Title>
                    <Card.Text><strong>{usuarios.length}</strong></Card.Text>
                  </Card.Body>
                </Card>
                <Card className="text-center p-3 mb-3">
                  <Card.Body>
                    <Card.Title>Pedidos</Card.Title>
                    <Card.Text><strong>0</strong></Card.Text>
                  </Card.Body>
                </Card>
                <Card className="text-center p-3 mb-3">
                  <Card.Body>
                    <Card.Title>Planes activos</Card.Title>
                    <Card.Text><strong>{planes.length}</strong></Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </section>

            {/* Gestión de Productos */}
            <section id="productos">
              <h2>📦 Gestión de Productos</h2>
              <Button variant="primary" className="mb-3" onClick={() => handleNavigate('/agregarproducto')}>➕ Agregar Producto</Button>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Categoría</th>
                    <th>Precio</th>
                    <th>Stock</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {productos.map((producto, index) => (
                    <tr key={index}>
                      <td>{producto.id}</td>
                      <td>{producto.nombre}</td>
                      <td>{producto.categoria}</td>
                      <td>${producto.precio}</td>
                      <td>{producto.stock}</td>
                      <td>
                        <Button variant="warning" onClick={() => handleNavigate(`/editar-producto/${producto.id}`)}>Editar</Button>
                        <Button variant="danger" onClick={() => handleNavigate(`/eliminar-producto/${producto.id}`)}>Eliminar</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </section>

            {/* Gestión de Usuarios */}
            <section id="usuarios">
              <h2>👥 Gestión de Usuarios</h2>
              <Button variant="primary" className="mb-3" onClick={() => handleNavigate('/agregarusuario')}>➕ Agregar Usuario</Button>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Rol</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {usuarios.map((usuario, index) => (
                    <tr key={index}>
                      <td>{usuario.id}</td>
                      <td>{usuario.name}</td>
                      <td>{usuario.email}</td>
                      <td>{usuario.rol}</td>
                      <td>
                        <Button variant="warning" onClick={() => handleNavigate(`/editar-usuario/${usuario.id}`)}>Editar</Button>
                        <Button variant="danger" onClick={() => handleNavigate(`/eliminar-usuario/${usuario.id}`)}>Eliminar</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </section>

            {/* Planes */}
            <section id="planes">
              <h2>📃 Planes</h2>
              <Button variant="primary" className="mb-3" onClick={() => handleNavigate('/agregarplan')}>➕ Agregar Plan</Button>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>ID Plan</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Duración</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {planes.map((plan, index) => (
                    <tr key={index}>
                      <td>{plan.id}</td>
                      <td>{plan.nombre}</td>
                      <td>${plan.precio}</td>
                      <td>{plan.duracion}</td>
                      <td>
                        <Button variant="warning" onClick={() => handleNavigate(`/editar-plan/${plan.id}`)}>Editar</Button>
                        <Button variant="danger" onClick={() => handleNavigate(`/eliminar-plan/${plan.id}`)}>Eliminar</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </section>

          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="footer text-center mt-5 bg-dark text-white py-3">
        <p>&copy; 2025 Cachupin Admin. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default AdminPanel;
