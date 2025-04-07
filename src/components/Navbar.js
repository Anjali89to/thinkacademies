import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">ThinkAcademies</div>

      <div className="links">
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
        <NavLink to="/achievements" className={({ isActive }) => isActive ? 'active' : ''}>Achievements</NavLink>
        <NavLink to="/digital-marketing" className={({ isActive }) => isActive ? 'active' : ''}>Digital marketing</NavLink> {/* ✅ New link added */}

        {/* External links */}
        <a href="https://courses.thinkacademies.com" target="_blank" rel="noopener noreferrer">Courses</a>
        <a href="https://hiring.thinkacademies.com" target="_blank" rel="noopener noreferrer">Hiring</a>
      </div>
    </nav>
  );
};

export default Navbar;
