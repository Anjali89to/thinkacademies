import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"; // Importing Icons
import '../styles/Footer.css'; // ✅ CORRECT (capital 'F')
 

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Think Academies. All rights reserved.</p>
      <div className="social-icons">
        <a href="https://www.instagram.com/thinkacademies" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon instagram" />
        </a>
        <a href="https://www.instagram.com/thinkacademies" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="icon twitter" />
        </a>
        <a href="https://linkedin.com/in/yourpage" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon linkedin" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
