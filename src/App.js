import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // ✅ Import Footer
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Achievements from './pages/Achievements';
import './styles/theme.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/achievements" element={<Achievements />} />
      </Routes>
      <Footer /> {/* ✅ Footer added below Routes */}
    </Router>
  );
}

export default App;
