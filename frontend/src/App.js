// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Veiculos from './pages/Veiculos';
import CadastroVeiculo from './pages/CadastroVeiculo';
import EditarVeiculo from './pages/EditarVeiculo';
import './App.css';
import Navbar from './navbar/Navbar';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Veiculos />} />
          <Route path="/cadastrar" element={<CadastroVeiculo />} />
          <Route path="/editar/:id" element={<EditarVeiculo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
