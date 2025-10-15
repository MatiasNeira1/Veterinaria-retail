import './App.css'
import Register from './pages/Register'
import Login from './pages/Login'
import Showplans from './pages/Plan';

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  

  return (
    <Router>
      <div>
        <Link to="/Register">Registro</Link>
        <Link to="/Login">Inicio seion</Link>
        <Link to="/Plan">Planes</Link>

        <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Plan" element={<Showplans />} />
        </Routes>
      </div>

    </Router>
      
      

      
    
  )
}

export default App
