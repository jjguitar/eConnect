import React from 'react';
import '../assets/styles/App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/images/logo.png';
import '../assets/styles/components/Login.scss';

const Login = () => {
  return (
    <>
      <section className='login'>
        <img src={logo} alt='logo' width='100' />
        <h2>Iniciar sesión</h2>
        <form className='login__form'>
          <button type='submit' className='login__form-button'>
            <p>Facebook</p>
            <FontAwesomeIcon icon={faFacebookSquare} />            {/* <i class="fab fa-facebook-f"></i> */}
          </button>
          <button type='submit' className='login__form-button'>
            <p>Twitter</p>
            <FontAwesomeIcon icon={faTwitter} />
          </button>
          <button type='submit' className='login__form-button'>
            <p>Gmail</p>
            <FontAwesomeIcon icon={faGoogle} />
          </button>
        </form>
      </section>
    </>
  );
};

export default Login;
