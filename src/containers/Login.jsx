import React from 'react';
import '../assets/styles/App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/images/logo.png';
import '../assets/styles/templates/Login.scss';

const Login = () => {
  return (
    <div className='login'>
      <section className='login__container'>
        <img src={logo} alt='logo' width='70' />
        <h2>Iniciar sesión</h2>
        <form className='login__form'>
          <button type='submit' className='login__form-button'>
            <p>Facebook</p>
            <FontAwesomeIcon icon={faFacebookSquare} />
          </button>
          <button type='submit' className='login__form-button'>
            <p>Twitter</p>
            <FontAwesomeIcon icon={faTwitter} />
          </button>
          <button type='submit' className='login__form-button'>
            <p>Google</p>
            <FontAwesomeIcon icon={faGoogle} />
          </button>
        </form>
      </section>
    </div>
  );
};

export default Login;
