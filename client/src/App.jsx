import './App.css'
import Register from './pages/Register'
import Login from './pages/Login'
import Showplans from './pages/Plan';
import Menu from './pages/Menu';
import VerCarrito from './pages/VerCarrito';
import Productos from './pages/Productos';
import FinalizarCompra from './pages/FinalizarCompra';
import AgendarCita from './pages/Agendar';

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {

  return (
    <Router>
      <div>
        <Routes>
            <Route path="/" element={<Login />} /> 
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Plan" element={<Showplans />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/VerCarrito" element={<VerCarrito />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/FinalizarCompra" element={<FinalizarCompra />} />
            <Route path="/agendar" element={<AgendarCita />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
