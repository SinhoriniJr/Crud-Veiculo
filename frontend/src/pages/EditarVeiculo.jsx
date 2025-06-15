import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../services/api';
import './styles/EditarVeiculo.css';
import './styles/ButaoAcao.css';

export default function EditarVeiculo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ modelo: '', marca: '', ano: '', cor: '' });

  useEffect(() => {
    api.get(`/veiculos/${id}`)
      .then((res) => {
        console.log(res.data); // Ajuda no debug
        setForm(res.data);
      })
      .catch((err) => {
        alert("Erro ao buscar veículo");
        console.error(err);
      });
  }, [id]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    api.put(`veiculos/${id}`, form)
      .then(() => {
        alert("Veículo atualizado com sucesso!");
        navigate('/');
      })
      .catch((err) => {
        alert("Erro ao atualizar veículo");
        console.error(err);
      });
  };

  return (
    <div className="editar-container">
      <h2>Editar Veículo</h2>
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
          <button className="butaoAcao" type="submit">Salvar Alterações</button>
        </div>
      </form>
    </div>

  );
}
