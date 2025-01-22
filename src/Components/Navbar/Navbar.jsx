import React, { useState } from 'react'
import'./Navbar.css'
import logo from '../Assets/logo.jpg'
import cart_icon from '../Assets/cart-icon.png'
const Navbar = () => {
    const[menu,setMenu] = useState("shop");
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} width="50" alt="" />
        <p>SHOES</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}>Shop{menu === "shop" ? <h/>:<></> }</li>
        <li onClick={()=>{setMenu("style")}}>Style {menu === "style" ? <h/>:<></> }</li>
        <li onClick={()=>{setMenu("sandals")}}>Sandals {menu === "sandals" ? <h/>:<></> }</li>
        <li onClick={()=>{setMenu("casual")}}>Casual {menu === "casual" ? <h/>:<></> }</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button> 
        <img src={cart_icon} width="30" alt="" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
