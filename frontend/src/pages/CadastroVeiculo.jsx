import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import './styles/CadastroVeiculo.css';
import './styles/ButaoAcao.css';

export default function CadastroVeiculo() {
  const [form, setForm] = useState({ modelo: '', marca: '', ano: '', cor: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('/veiculos', form)
      .then(() => {
        alert('Veículo cadastrado com sucesso!');
        navigate('/');
      })
      .catch((err) => {
        alert('Erro ao cadastrar veículo');
        console.error(err);
      });
  };

  return (
    <div className="form-container">
      <h2>Cadastrar Novo Veículo</h2>
      <form onSubmit={handleSubmit} className="formulario">
        <div className="form-group">
          <label>Modelo:</label><br />
          <input name="modelo" value={form.modelo} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Marca:</label><br />
          <input name="marca" value={form.marca} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Ano:</label><br />
          <input type="number" name="ano" value={form.ano} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Cor:</label><br />
          <input name="cor" value={form.cor} onChange={handleChange} required />
        </div>
        <div className="botoes">
          <button className="butaoAcao" type="submit">Salvar</button>
        </div>
      </form>
    </div>

  );
}
