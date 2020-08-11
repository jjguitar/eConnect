/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/templates/Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <Link to='/terms' className='footer__description'>
        © 2020 Iglesia Cristiana Ekklesia Viva. Todos los derechos reservados.
      </Link>
    </div>
  );
};

export default Footer;
