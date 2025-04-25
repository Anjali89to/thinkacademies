import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="logo">Think Academies</div>

      <div className={`menu-toggle ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <div className={`links ${menuActive ? 'active' : ''}`}>
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
        <NavLink to="/service" className={({ isActive }) => isActive ? 'active' : ''}>Services</NavLink>
        <NavLink to="/courses" className={({ isActive }) => isActive ? 'active' : ''}>Courses</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
