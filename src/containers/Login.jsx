import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/images/logo.png';
import '../assets/styles/templates/Login.scss';
import { loginRequest } from '../actions/index';

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
    console.log(form);
  };
  return (
    <div className='login'>
      <section className='login__container'>
        <img src={logo} alt='logo' width='70' />
        <h2>Iniciar sesión</h2>
        <form className='login__form' onSubmit={handleSubmit}>
          {/* <button type='submit' className='login__form-button'>
            <p>Facebook</p>
            <FontAwesomeIcon icon={faFacebookSquare} />
          </button>
          <button type='submit' className='login__form-button'>
            <p>Twitter</p>
            <FontAwesomeIcon icon={faTwitter} />
          </button> */}
          <input
            name='email'
            type='text'
            className='login--form__input'
            placeholder='Correo'
            onChange={handleInput}
          />
          <input
            name='password'
            type='password'
            className='login--form__input'
            placeholder='Contraseña'
            onChange={handleInput}
          />
          <button type='submit' className='login__form-button'>
            <p>Google</p>
            <FontAwesomeIcon icon={faGoogle} />
          </button>
        </form>
      </section>
    </div>
  );
};

const MapDispatchToProps = {
  loginRequest,
};

export default connect(null, MapDispatchToProps)(Login);
