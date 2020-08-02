import React from 'react';
import Logo from './../../assests/img/Logo.png';
import './Menu.css'
import Button from '../Button/Index.js';
//import ButtonLink from './componentes/ButtonLink/Index.js';

function Menu (){
    return (
        <nav className="Menu">
            <a href="/">
                <img src={Logo} alt="Logo Cintyflix" className="Logo"></img>
            </a>
            <Button as = 'a'  className="ButtonLink" href="/"> 
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;