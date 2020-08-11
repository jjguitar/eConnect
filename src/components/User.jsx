/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/components/user.scss';

const User = ({ cover, first_name, last_name, tags }) => {
  console.log(tags);
  return (
    <div className='user__container'>
      <div className='user__profile'>
        <img src={cover} width='50' height='50' />
        <div>
          <h2>{first_name}</h2>
          <h4>{last_name}</h4>
        </div>
      </div>
      <a href='/'>
        <FontAwesomeIcon icon={faAngleRight} className='header__back' />
      </a>
    </div>
  );
};

export default User;
