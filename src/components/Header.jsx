import React from 'react'
import './Header.css';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';



function Header() {
    return (
        <div className='Header'>
            <Link to='/'><img src={logo} alt="Tesla logo" /></Link>
            <p>Autos</p>
        </div>
    )
}

export default Header