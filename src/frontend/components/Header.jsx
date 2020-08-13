import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import '../assets/styles/templates/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { logoutRequest } from '../actions/index';

const Header = (props) => {
  const { user, isLogin } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  const headerClass = classNames('header', {
    isLogin,
  });

  const handleBtnBack = () => window.history.back();
  return (
    <div className={headerClass}>
      <FontAwesomeIcon icon={faAngleLeft} className='header__back' onClick={handleBtnBack} />
      {/* onClick={handleBtnBack} */}
      <input type='text' className='header__search' placeholder='Buscar...' />
      <div className='header__profile'>
        <img src='https://www.ekklesiaviva.co/wp-content/uploads/2020/01/LOGO-PARA-WEB.png' alt='logo' width='70' />
        <ul>
          {
            hasUser ? (
              <li>
                <Link to='/'>
                  Name
                </Link>
              </li>
            ) :
              null
          }
          {
            hasUser ?
              <li><a href='#logout' onClick={handleLogout}>Cerrar sesión</a></li> :
              (
                <li>
                  <Link to='/login'>
                    Iniciar sesión
                  </Link>
                </li>
              )
          }
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
