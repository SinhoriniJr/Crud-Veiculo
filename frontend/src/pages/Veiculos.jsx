import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import './styles/Veiculos.css';

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
    <div>
      <h2>Lista de Veículos</h2>
      <ul>
        {veiculos.map(v => (
          <li key={v.id}>
            {v.modelo} - {v.marca} - {v.ano} - {v.cor}
            <button onClick={() => deletar(v.id)}>Excluir</button>
            <Link to={`/editar/${v.id}`}><button>Editar</button></Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
