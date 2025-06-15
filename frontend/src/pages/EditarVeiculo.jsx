import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../services/api';
import './styles/EditarVeiculo.css';

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
  // useEffect(() => {
  //   api.get(`/veiculos/editar/${id}`)
  //     .then((res) => setForm(res.data))
  //     .catch((err) => {
  //       alert("Erro ao buscar veículo");
  //       console.log(id)
  //       console.error(err);

  //     });
  // }, [id]);

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
    <div>
      <h2>Editar Veículo</h2>
      <form onSubmit={handleSubmit}>
        <div><label>Modelo:</label><br /><input name="modelo" value={form.modelo} onChange={handleChange} required /></div>
        <div><label>Marca:</label><br /><input name="marca" value={form.marca} onChange={handleChange} required /></div>
        <div><label>Ano:</label><br /><input type="number" name="ano" value={form.ano} onChange={handleChange} required /></div>
        <div><label>Cor:</label><br /><input name="cor" value={form.cor} onChange={handleChange} required /></div>
        <br /><button type="submit">Salvar Alterações</button>
      </form>
    </div>
  );
}
