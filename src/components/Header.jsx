import React from 'react';
import { Link } from 'react-router-dom';
import "../css/header.css";

export const Header = () => {
    return (
        <nav className="navBarTop">
            <Link id='logo' to="/" >
                <img id="logoImg" src={require('../img/logo.png')} />
            </Link>

            <div className="divUl">
                <ul className="ul">

                    <li className="navItem">
                        <Link to="/">Inicio</Link>
                    </li>
                    <li className="navItem">
                        <Link to="/raquetas">Raquetas</Link>
                    </li>
                    <li className="navItem">Ropa</li>
                    <li className="navItem">Contacto</li>
                    <li className="navItem">Ubicación</li>
                </ul>

            </div>
        </nav>
    )
}
