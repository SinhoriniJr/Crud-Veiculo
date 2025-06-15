// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Veiculos from './pages/Veiculos';
import CadastroVeiculo from './pages/CadastroVeiculo';
import EditarVeiculo from './pages/EditarVeiculo';


function App() {
  return (
    <Router>
      <div style={{ padding: 20 }}>
              
        <nav>
          <Link to="/" style={{ marginRight: 10 }}>Lista de Veículos</Link>
          <Link to="/cadastrar">Cadastrar Veículo</Link>
        </nav>

        <hr/>
        <Routes>
          <Route path="/" element={<Veiculos />} />
          <Route path="/cadastrar" element={<CadastroVeiculo />} />
          <Route path="/editar/:id" element={<EditarVeiculo/>} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
