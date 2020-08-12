import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/styles/templates/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/images/logowhite.png';

const Header = (props) => {
  const handleBtnBack = () => window.history.back();
  return (
    <div className='header'>
      <FontAwesomeIcon icon={faAngleLeft} className='header__back' onClick={handleBtnBack} />
      {/* onClick={handleBtnBack} */}
      <input type='text' className='header__search' placeholder='Buscar...' />
      <div className='header__profile'>
        <img src={logo} alt='logo' width='70' />
        <ul>
          <li>
            <Link to='/'>
              Cuenta
            </Link>
          </li>
          <li>
            <Link to='/login'>
              Cerrar sesión
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, null)(Header);
