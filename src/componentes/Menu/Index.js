import React from 'react';
import Logo from './../../assests/img/Logo.png';
import './Menu.css'

function Menu (){
    return (
        <nav className="Menu">
            <a href="/">
                <img src={Logo} alt="Logo Cintyflix" className="Logo"></img>
            </a>
        </nav>
    );
}

export default Menu;