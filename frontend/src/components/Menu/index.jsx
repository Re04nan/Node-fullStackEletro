import React from 'react';
import {Link} from 'react-router-dom';  


import './styles.css';
import logo from '../imagens/logo.png';   

const Menu = () => {
    return (
        <nav>
                <ul className="nav nav-justified align-items-sm-center pb-2">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">
                            <img id="logo" src={logo} alt="Full Stack Eletro"
                                title="logo full stack eletro"/>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link flex-fill" to="/Produtos">Produtos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link flex-fill" to="/NossasLojas">Nossas lojas</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link flex-fill" to="/Contatos">Contato</Link>
                    </li>
                </ul>
        </nav>
    );
}

export default Menu;