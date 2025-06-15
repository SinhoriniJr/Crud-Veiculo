import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <nav className='nav'>
              <Link className='listV'to="/"> Lista de Veículos</Link>
              <Link className='cadastrarV'to="/cadastrar">Cadastrar Veículo</Link>
            </nav>
    
      
    </div>
  )
}

export default Navbar
