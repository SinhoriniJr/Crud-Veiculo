import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import './styles/Veiculos.css';
import './styles/ButaoAcao.css';

export default function Veiculos() {
  const [veiculos, setVeiculos] = useState([]);

  useEffect(() => {
    api.get('/veiculos')
      .then((res) => setVeiculos(res.data))
      .catch((err) => console.error(err));
  }, []);

  const deletar = (id) => {
    if (window.confirm('Deseja realmente excluir?')) {
      api.delete(`/veiculos/${id}`)
        .then(() => setVeiculos(veiculos.filter(v => v.id !== id)))
        .catch(err => console.error(err));
    }
  };

  return (
    <div className='veiculos-container'>
      <h2>Lista de Veículos</h2>
      <table>
        <thead>
          <tr>
            <th>Modelo</th>
            <th>Marca</th>
            <th>Ano</th>
            <th>Cor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {veiculos.map(v => (
            <tr key={v.id}>
              <td>{v.modelo}</td>
              <td>{v.marca}</td>
              <td>{v.ano}</td>
              <td>{v.cor}</td>
              <td className='botoes'>
                <Link to={`/editar/${v.id}`}>
                  <button className='butaoAcao'>Editar</button>
                </Link>
                <button className='butaoAcao' onClick={() => deletar(v.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}