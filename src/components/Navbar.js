import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  // State to toggle the mobile menu
  const [menuActive, setMenuActive] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="logo">Think Academies</div>

      {/* Hamburger menu icon */}
      <div className={`menu-toggle ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Links container */}
      <div className={`links ${menuActive ? 'active' : ''}`}>
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
        <NavLink to="/service" className={({ isActive }) => isActive ? 'active' : ''}>Services</NavLink>
        <a href="https://courses.thinkacademies.com" target="_blank" rel="noopener noreferrer">Courses</a>
      </div>
    </nav>
  );
};

export default Navbar;
