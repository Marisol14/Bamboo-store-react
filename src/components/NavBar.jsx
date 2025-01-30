import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../assets/Bamboo.png"; 

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Bamboo Closet" className="logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/Ropa">Ropa</Link></li>
        <li><Link to="/category/Calzados">Calzados</Link></li>
        <li><Link to="/category/Accesorios">Accesorios</Link></li>
        <li><Link to="/category/Electronica">Electronica</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
      <div className="search-cart">
        <input type="text" placeholder="Buscar en la tienda..." />
        <button className="search-btn">Buscar</button>
        <div className="cart-icon">
          <span>🛒</span>
          <span className="cart-count">0</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;














