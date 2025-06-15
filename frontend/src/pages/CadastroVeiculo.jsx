import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import './styles/CadastroVeiculo.css';

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
    <div>
      <h2>Cadastrar Novo Veículo</h2>
      <form onSubmit={handleSubmit}>
        <div><label>Modelo:</label><br /><input name="modelo" value={form.modelo} onChange={handleChange} required /></div>
        <div><label>Marca:</label><br /><input name="marca" value={form.marca} onChange={handleChange} required /></div>
        <div><label>Ano:</label><br /><input type="number" name="ano" value={form.ano} onChange={handleChange} required /></div>
        <div><label>Cor:</label><br /><input name="cor" value={form.cor} onChange={handleChange} required /></div>
        <br /><button type="submit">Salvar</button>
      </form>
    </div>
  );
}
