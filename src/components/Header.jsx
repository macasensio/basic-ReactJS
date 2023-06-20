import React from 'react'
import './Header.css';
import logo from '../assets/logo.png'



function Header() {
    return (
        <div className='Header'>
            <a href="https://www.tesla.com/" target='_blank'><img src={logo} alt="Tesla logo" /></a>
            <p>Autos</p>
        </div>
    )
}

export default Header