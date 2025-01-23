import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.jpg';
import cart_icon from '../Assets/cart-icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [isOpen, setIsOpen] = useState(false); // State untuk mengontrol menu hamburger

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} width="50" alt="" />
        <p>HUSAIN.COM</p>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
      </div>
      <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <li onClick={() => { setMenu("shop"); setIsOpen(false); }}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu === "shop" ? <hr /> : null}</li>
        <li onClick={() => { setMenu("style"); setIsOpen(false); }}><Link style={{ textDecoration: 'none' }} to='/style'>Style</Link>{menu === "style" ? <hr /> : null}</li>
        <li onClick={() => { setMenu("sandals"); setIsOpen(false); }}><Link style={{ textDecoration: 'none' }} to='/sandals'>Sandals</Link>{menu === "sandals" ? <hr /> : null}</li>
        <li onClick={() => { setMenu("casual"); setIsOpen(false); }}><Link style={{ textDecoration: 'none' }} to='/casual'>Casual</Link>{menu === "casual" ? <hr /> : null}</li>
        {/* Menu Login hanya muncul di hamburger menu pada layar kecil */}
        {isOpen && (
          <li onClick={() => { setIsOpen(false); }}><Link style={{ textDecoration: 'none' }} to='/login'>Login</Link></li>
        )}
      </ul>
      <div className="nav-login-cart">
        {/* Menu Login ditampilkan di luar hamburger menu pada layar lebar dan medium */}
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} width="30" alt="" /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;