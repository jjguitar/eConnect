import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';
import process from '../assets/images/lifetrack.png';
import Header from '../components/Header';
import '../assets/styles/pages/Process.scss';

const Process = () => {
  return (
    <>
      <Header />
      <div className='process__container-main'>
        <img src={process} alt='process' />
        <h1>Process</h1>
      </div>
      <div className='process__container-button'>
        <button type='submit'>Subscribe</button>
      </div>
      <div className='process__details'>
        <h3>Description</h3>
        <p>Lorem ipsu dolor Lorem ipsu dolor Lorem ipsu dolor Lorem ipsu dolor Lorem ipsu dolor Lorem ipsu dolor Lorem ipsu dolor Lorem ipsu dolor Lorem ipsu dolor</p>
        <h2>Time</h2>
        <div className='process__container-buttons'>
          <button type='submit'>View Students</button>
          <button type='submit'>Register Assign</button>
        </div>
      </div>
    </>
  );
};

export default Process;
