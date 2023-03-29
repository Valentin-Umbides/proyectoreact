import React from 'react'
import { Header } from '../components/Header';
import '../css/raquetas.css';
import { Link } from 'react-router-dom';

export const Raquetas = () => {
    return (
        <>
            <Header />
            <main className="classMain">

                <h1 className="page">Últimos lanzamientos de raquetas</h1>
                <h3 className="page">Tenemos lo más avanzado en tecnología de grafito</h3>

                <section className="classsection">
                    <div className="card">
                        <img src={require('../img/raqueta1.jpeg')} alt="" className="card-img-top" />
                        <h4 className="descripcion" id="name"> BLADE 98 V8.0 </h4>
                        <h5 className="descripcion" id="price">$35000</h5>
                        <Link to="/raquetas/producto/_1.">Comprar</Link>
                    </div>
                    <div className="card ">
                        <img src={require('../img/descarga.jpg')} alt="" className="card-img-top" />
                        <h4 className="descripcion" id="name">BURN 100 CV </h4>
                        <h5 className="descripcion" id="price">$37000</h5>
                        <Link to="/raquetas/producto/_2.">Comprar</Link>
                    </div>
                    <div className="card ">
                        <img src={require('../img/raqueta3.jpeg')} alt="" className="card-img-top" />
                        <h4 className="descripcion" id="name"> CLASH 98 V2</h4>
                        <h5 className="descripcion" id="price">$38000</h5>
                        <Link to="/raquetas/producto/_3.">Comprar</Link>
                    </div>
                    <div className="card ">
                        <img src={require('../img/raqueta4.jpg')} alt="" className="card-img-top" />
                        <h4 className="descripcion" id="name">Raqueta Pure Aero</h4>
                        <h5 className="descripcion" id="price">$40000</h5>
                        <Link to="/raquetas/producto/_4.">Comprar</Link>
                    </div>
                    <div className="card " >
                        <img src={require('../img/raqueta5.png')} alt="" className="card-img-top" />
                        <h4 className="descripcion" id="name">Raqueta Pure Drive</h4>
                        <h5 className="descripcion" id="price">$40000</h5>
                        <Link to="/raquetas/producto/_5.">Comprar</Link>
                    </div>
                    <div className="card ">
                        <img src={require('../img/raqueta6.png')} alt="" className="card-img-top" />
                        <h4 className="descripcion" id="name">Raqueta Pure Aero Nadal</h4>
                        <h5 className="descripcion" id="price">$40000</h5>
                        <Link to="/raquetas/producto/_6.">Comprar</Link>
                    </div>
                    <div className="card ">
                        <img src={require('../img/raqueta7.png')} alt="" className="card-img-top" />
                        <h4 className="descripcion" id="name">Raqueta Pure Strike 100</h4>
                        <h5 className="descripcion" id="price">$40000</h5>
                        <Link to="/raquetas/producto/_7.">Comprar</Link>
                    </div>
                </section>
            </main>
        </>
    )
}
