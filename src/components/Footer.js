import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* Company Services */}
        <div className="footer-section">
          <h3 className="footer-title">IT Infrastructure Services</h3>
          <ul className="footer-list">
            <li>IT Infrastructure Services</li>
            <li>Help Desk Support</li>
            <li>Cloud Solutions</li>
            <li>Custom IT Solutions</li>
          </ul>
        </div>

        {/* Web & Marketing Services */}
        <div className="footer-section">
          <h3 className="footer-title">Web Development & Design</h3>
          <ul className="footer-list">
            <li>Digital Marketing Services</li>
            <li>Search Engine Optimization</li>
            <li>Pay-Per-Click Advertising</li>
            <li>Social Media Management</li>
            <li>Content Marketing</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section">
          <h3 className="footer-title">Contact Us</h3>
          <ul className="footer-list">
            <li>Email: <a href="mailto:info@codeology.in">info@thinkacademies.in</a></li>
            <li>Phone: <a href="tel:+918383989274">+91-8383989274</a></li>
            <li>
              Address: <br />
               6th Floor, Sector-142,<br />
              Noida, Uttar Pradesh - 201301
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="footer-section social-icons">
          <h3 className="footer-title">Follow Us</h3>
          <div className="icon-links">
            <a href="https://www.instagram.com/thinkacademies/#" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon instagram" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="icon twitter" />
            </a>
            <a href="https://www.linkedin.com/company/think-academies" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon linkedin" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="footer-bottom">
        <p>© 2025 IT Infrastructure Services. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
