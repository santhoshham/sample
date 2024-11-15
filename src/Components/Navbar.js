import React, { useState } from 'react'
import './Navbar.css'
import images from '../Assets/Images';
import '@flaticon/flaticon-uicons/css/all/all.css';

export default function Navbar() {
  const [menu, setMenu] = useState("Home");
  return (
    <div className='Logo'>
      <img src={images.logo} alt='Screen' className='Logo' />
      <ul className='navbar-menu'>
        <li onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</li>
        <li onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</li>
        <li onClick={() => setMenu("Mobile-App")} className={menu === "Mobile-App" ? "active" : ""}>Mobile-APP</li>
        <li onClick={() => setMenu("Contact-Us")} className={menu === "Contact-Us" ? "active" : ""}>Contact-Us </li>
      </ul>
      <div className='navbar-right'>
        <i className="fi fi-rr-search" style={{ fontSize: '23px' }} />
        <div className='navbar-search-icon'>
          <i className="fi fi-rr-shopping-bag" style={{ fontSize: '22px' }} />
          <div className='dot'></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  );
}

