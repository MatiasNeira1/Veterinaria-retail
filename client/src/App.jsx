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
import Footer from './components/Footer'
import  Navbar  from './components/Navbar'

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar/>
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/Plan" element={<Showplans />} />
            <Route path="/VerCarrito" element={<VerCarrito />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/FinalizarCompra" element={<FinalizarCompra />} />
            <Route path="/agendar" element={<AgendarCita />} />
            <Route path="/DetallesPlan/:id" element={<DetailPlan />} />
          </Routes>
        </main>
        <Footer />  {/* fuera de cualquier .container, ya que esto podria ser el error, cualquier cosa borrar  */}
      </div>
    </Router>
  )
}
export default App;
