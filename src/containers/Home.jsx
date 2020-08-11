/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Users from '../components/Users';
import User from '../components/User';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/pages/Home.scss';
// import '../assets/styles/templates/Header.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
// import logo from '../assets/images/logowhite.png';
const API = 'http://localhost:3000/initialState';

const Home = () => {
  const initialState = useInitialState(API);

  return (
    <div className='home'>
      <h1>Miembros</h1>
      <Users>
        {initialState.users.map((item) => (
          <User key={item.id} {...item} />
        ))}
      </Users>
    </div>
  );
};

export default Home;
