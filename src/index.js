import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Home } from './pages/Home';
import { ItemDetail } from './pages/ItemDetail';
import { ItemList } from './pages/ItemList';
import { Error404 } from './pages/Error404';

import { BrowserRouter as Router, Routes as Pages, Route as Page } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Pages>
      <Page path="*" element={<Error404 />} />
      <Page exact path="/" element={<Home />} />
      <Page exact path="/:section/producto/:id" element={<ItemDetail />} />
      <Page exact path="/:section/" element={<ItemList />} />
    </Pages>
  </Router>
);
