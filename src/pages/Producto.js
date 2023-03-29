import React from 'react';
import Raquetas from '../json/raquetas.json';
import '../css/producto.css';
import { Header } from '../components/Header';

export const Producto = () => {
  return (
    <>
      <Header />
      <main id="productoMain">
        {
          Raquetas.map(item => {
            if (window.location.pathname.includes(`raquetas/producto/_${item.id}.`)) {
              return (
                <div id="item" key={item.id}>
                  <img src={require(`../img/${item.img}`)}></img>
                  <div id='info'>
                    <h1 id="titulo">{item.nombre}</h1>
                    <h2 id="precio">{item.precio}</h2>
                    <button>Comprar</button>
                  </div>
                </div>
              )
            }
          })
        }
      </main>
    </>
  )
}
