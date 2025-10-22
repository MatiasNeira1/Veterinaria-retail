import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from './pages/Register'
import Login from './pages/Login'
import Showplans from './pages/Plan'
import Menu from './pages/Menu'
import VerCarrito from './pages/VerCarrito'
import Productos from './pages/Productos'
import FinalizarCompra from './pages/FinalizarCompra'
import AgendarCita from './pages/Agendar'
import DetailPlan from './pages/DetallesPlan'
import AdminPanel from './pages/Adminpanel';
import AgregarPlan from './pages/AgregarPlan';
import AgregarProducto from './pages/AgregarProducto';
import AgregarUsuario from './pages/AgregarUsuario';


function App() {
  return (
    <Router>
          <Routes>
            <Route path="/2" element={<Menu />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/Plan" element={<Showplans />} />
            <Route path="/VerCarrito" element={<VerCarrito />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/agregarplan" element={<AgregarPlan />} />
            <Route path="/agregarproducto" element={<AgregarProducto />} />
            <Route path="/agregarusuario" element={<AgregarUsuario />} />
            <Route path="/FinalizarCompra" element={<FinalizarCompra />} />
            <Route path="/agendar" element={<AgendarCita />} />
            <Route path="/DetallesPlan/:id" element={<DetailPlan />} />
            <Route path="/" element={<AdminPanel />} />
          </Routes>
    </Router>
  )
}
export default App;
