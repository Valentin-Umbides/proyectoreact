import React from 'react'
import '../css/home.css';

export const Home = () => {
  return (
    <>
      <nav className="navBar">
        <img src={require('../img/logo.png')} alt="Logo" />
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

