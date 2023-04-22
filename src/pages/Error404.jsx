import React from 'react';
import { Header } from '../components/NavBar';
import '../css/error.css';

export const Error404 = () => {
  return (
    <>
      <Header />
      <div id="error">
        <h1>Error 404</h1>
      </div>
    </>
  )
}
