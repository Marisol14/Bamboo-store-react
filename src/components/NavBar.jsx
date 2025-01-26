import React, { useState } from 'react';
import CartWidget from './CartWidget';
import logo from '../assets/Bamboo.png'; 
import './NavBar.css';

const NavBar = () => {
  const [search, setSearch] = useState('');

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo Tienda de Ropa" className="logo" />
      </div>

      <ul className="nav-links">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#remeras">Remeras</a></li>
        <li><a href="#jeans">Jeans</a></li>
        <li><a href="#vestidos">Vestidos</a></li>
        <li><a href="#accesorios">Accesorios</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>

      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar en la tienda..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => console.log(`Buscando: ${search}`)}>Buscar</button>
      </div>
      
      <div className="cart-container">
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;











