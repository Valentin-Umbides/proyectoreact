import React from 'react';
import Items from '../json/items.json';
import '../css/itemDetail.css';
import { Header } from '../components/NavBar';

export const ItemDetail = () => {
  return (
    <>
      <Header />
      <main id="ItemDetailContainer">
        {
          Items.map(item => {
            if (window.location.pathname.includes(`_${item.tipo}./producto/_${item.id}.`)) {
              return (
                <div id="item" key={item.id}>
                  <img src={require(`../img/${item.img}`)}></img>
                  <div id='description'>
                    <h1 id="titulo">{item.nombre}</h1>
                    <h2 id="precio">{item.precio}</h2>
                    <button id="addItemButton">Comprar</button>
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
