import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.jpg';
import cart_icon from '../Assets/cart-icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} width="50" alt="" />
        <p>HUSAIN.COM</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu === "shop" ? <hr /> : null}</li>
        <li onClick={() => setMenu("style")}><Link style={{textDecoration: 'none'}} to='/style'>Style</Link>{menu === "style" ? <hr /> : null}</li>
        <li onClick={() => setMenu("sandals")}><Link style={{textDecoration: 'none'}} to='/sandals'>Sandals</Link>{menu === "sandals" ? <hr /> : null}</li>
        <li onClick={() => setMenu("casual")}><Link style={{textDecoration: 'none'}} to='/casual'>Casual</Link>{menu === "casual" ? <hr /> : null}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} width="30" alt="" /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar; // Pastikan ada ekspor default
