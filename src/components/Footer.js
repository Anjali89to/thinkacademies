import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Think Academies. All rights reserved.</p>

      {/* Footer Navigation Links */}
      <div className="footer-nav">
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/service">Service</a></li>
          <li><a href="/solution">Solution</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/consulting">Consulting</a></li>
          <li><a href="/development">Development</a></li>
          <li><a href="/support">Support</a></li>
        </ul>
      </div>

      {/* Social Media Icons */}
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
