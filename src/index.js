import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Home } from './pages/Home';
import { Raquetas } from './pages/Raquetas';
import { Producto } from './pages/Producto';

import { BrowserRouter as Router, Routes as Pages, Route as Page } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Pages>
      <Page exact path="/" element={<Home />} />
      <Page exact path="/raquetas" element={<Raquetas />} />
      <Page exact path="/raquetas/producto/*" element={<Producto />} />
    </Pages>
  </Router>
);
