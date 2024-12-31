import React from "react";
import { Link } from "react-router-dom";
import '../css/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        Maglia Sports Ec
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/p_settings">Pagos</Link>
        </li>
        <li>
          <Link to="/register">Registro</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
