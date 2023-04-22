import React from 'react';
import "../css/navBar.css";

export const Header = () => {

    return (
        <>
            <nav className="navBarTop">
                <a id='logo' href="/" >
                    <img id="logoImg" src={require('../img/logo.png')} />
                </a>

                <div className="divUl">
                    <ul className="ul">

                        <li className="navItem">
                            <a href="/">Inicio</a>
                        </li>
                        <li className="navItem">
                            <a href="/_raquetas.">Raquetas</a>
                        </li>
                        <li className="navItem">Ropa</li>
                        <li className="navItem">Contacto</li>
                        <li className="navItem">Ubicación</li>
                    </ul>

                </div>
            </nav>
        </>
    )
}
