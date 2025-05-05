import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
      </button>
      <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>O nama</Link></li>
        <li><Link to="/program" className="nav-link" onClick={() => setMenuOpen(false)}>Program</Link></li>
        <li><Link to="/vijece" className="nav-link" onClick={() => setMenuOpen(false)}>Gradsko vijeće</Link></li>
        <li><Link to="/vijesti" className="nav-link" onClick={() => setMenuOpen(false)}>Zašto Stjepan i Vedrana za Dugo selo</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;


