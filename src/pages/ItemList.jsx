import React from 'react';
import { Header } from '../components/NavBar';
import { Routes, Route } from 'react-router-dom';
import { Error404 } from './Error404';
import Items from '../json/items.json';
import '../css/itemList.css';
const itemClasses = ['raquetas', 'ropa'];
let itemClass;
let error = true;
itemClasses.forEach((item) => {
  if (window.location.pathname.includes(`_${item}.`)) {
    itemClass = item;
    error = false;
  }
});

export const ItemList = () => {
  if (error) {
    return (
      <Routes>
        <Route path='*' element={<Error404 />}></Route>
      </Routes>
    )
  } else {
    return (
      <>

        <Header />
        <main className="ItemListContainer">

          <h1 className="page">Últimos lanzamientos de raquetas</h1>
          <h3 className="page">Tenemos lo más avanzado en tecnología de grafito</h3>

          <section className="classsection">
            {
              Items.map(item => {
                if (item.tipo === itemClass) {
                  return (
                    <div className="card" key={`${item.tipo}_${item.id}`}>
                      <img src={require(`../img/${item.img}`)} alt={item.nombre} className="card-img-top" />
                      <h4 className="descripcion" id="name"> {item.nombre} </h4>
                      <h5 className="descripcion" id="price">{item.precio}</h5>
                      <a href={`/_${item.tipo}./producto/_${item.id}.`}>Comprar</a>
                    </div>
                  )
                }
              })
            }
          </section>
        </main>

      </>
    )
  }
}
