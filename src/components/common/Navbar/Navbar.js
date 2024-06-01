import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="navbar-brand">
      <img src="/logo192.png" alt="Logo" />
    </Link>
    <ul className="navbar-nav">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/contacts">Contacts</Link></li>
    </ul>
  </nav>
);

export default Navbar;