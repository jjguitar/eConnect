import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import process from '../assets/images/lifetrack.png';

const ProcessCard = () => {
  return (
    <div className='process'>
      <div className='process__container-details'>
        <img src={process} alt='process' width='100' height='50' />
        <div className='process__subscribe'>
          <h2>LifeTrack</h2>
          <h4>Unsubscribe</h4>
        </div>
        <Link to='/process'>
          <FontAwesomeIcon icon={faAngleRight} className='header__back' />
        </Link>
      </div>
    </div>
  );
};

export default ProcessCard;
