import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/service'; // Capital "S"
import Courses from './pages/Courses'; // ✅ Added Courses page

import './styles/theme.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/courses" element={<Courses />} /> {/* ✅ New Route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
