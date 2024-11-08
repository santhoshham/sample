import React from 'react'
import './Navbar.css'
import images from '../Assets/Images';

 export default function Navbar(){
       return(
        <div className='Logo'>
        <img src={images.logo} alt='Screen' className='Logo' />
        <ul className='navbar-menu'>
            <li>Home</li>
            <li>Menu</li>
            <li>Mobile-APP</li>
            <li>Contact-US</li>
         </ul> 
         <div className='navbar-right'>
            <img src={images.icon} alt='Search icon' />
            <div className='navbar-search icon'>
            <img src={images.basicon} alt='Basket icon'/>
            </div>
         </div>
    </div>
    );
}

