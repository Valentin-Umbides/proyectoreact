import React from 'react'
import '../css/home.css';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <nav className="navBar">

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
    </>
  )
}

