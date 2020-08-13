import React from 'react';
import '../assets/styles/pages/NotFound.scss';
import Header from '../components/Header';

const NotFound = () => (
  <>
    <Header />
    <div className='notfound'>
      <p>Página no encontada</p>
      <p>Error 404</p>
    </div>
  </>
);

export default NotFound;
