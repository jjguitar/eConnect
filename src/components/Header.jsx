import React from 'react';
import '../assets/styles/templates/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/images/logowhite.png';

const Header = () => {
  return (
    <div className='header'>
      <FontAwesomeIcon icon={faAngleLeft} className='header__back' />
      <input type='text' className='header__search' placeholder='Buscar...' />
      <div className='header__profile'>
        <img src={logo} alt='logo' width='70' />
        <ul>
          <li><a href='/'>Cuenta</a></li>
          <li><a href='/'>Cerrar sesión</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
