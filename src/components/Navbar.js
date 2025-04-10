import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Think Academies</div>

      <div className="links">
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
        <NavLink to="/service" className={({ isActive }) => isActive ? 'active' : ''}>Services</NavLink> {/* ✅ Keep this one */}

        {/* External links */}
        <a href="https://courses.thinkacademies.com" target="_blank" rel="noopener noreferrer">Courses</a>
      </div>
    </nav>
  );
};

export default Navbar;  
