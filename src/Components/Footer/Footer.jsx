import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo.jpg';
import icon_instagram from '../Assets/instagram.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        
        <p className="footer-logo-text">HUSAIN.COM</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={icon_instagram} alt="Instagram" className="footer-social-img" />
        </a>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>&copy; 2025 HUSAIN.COM - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
