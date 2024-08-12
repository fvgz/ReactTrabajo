import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Componentes/Navbar/Navbar';
import Home from './Componentes/Navbar/home';
import Nosotros from './Componentes/Navbar/Productos';
import Contactos from './Componentes/Navbar/contactos';
import Footer from './Componentes/Footer/footer';

function App() {
  return (
    <>
    <div className="app-container">
      <Router>
        <Navbar />
        <main className="content">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Nosotros />} />
            <Route path="/contact" element={<Contactos />} />
        </Routes>
        </main>
      <Footer />
    </Router > 
    </div>      
  </>
  
  );
}

export default App;
