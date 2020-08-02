import React from 'react';
import Logo from './../../assests/img/Logo.png';
import './Menu.css'
import Button from '../Button/Index.js';
import { Link } from 'react-router-dom';

function Menu (){
    return (
        <nav className="Menu">
            <Link to="/">
                <img src={Logo} alt="Logo Cintyflix" className="Logo"></img>
            </Link>
            <Button as = {Link}  className="ButtonLink" to="/cadastro/video"> 
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;