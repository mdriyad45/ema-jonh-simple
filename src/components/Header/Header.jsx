//import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} />
            <div>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/invertory">Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;