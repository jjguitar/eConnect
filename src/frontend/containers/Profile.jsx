/* eslint-disable camelcase */
import React from 'react';
import { connect } from 'react-redux';
import profile from '../assets/images/perfil.jpg';
import ProcessCard from '../components/ProcessCard';
import '../assets/styles/pages/Profile.scss';
import Header from '../components/Header';

const Profile = (props) => {
  const { userInfo } = props;
  const { cover, first_name, last_name, rol } = userInfo;
  // console.log(tags);
  return (
    <>
      <Header />
      <div className='process__container'>
        <div className='profile'>
          <img src={cover} alt='profile' width='100' height='100' />
          <div className='profile__info'>
            <p>{`${first_name} ${last_name}`}</p>
            <button type='submit'>
              <p>Perfil</p>
            </button>
          </div>
          <h4>{rol}</h4>
        </div>
        <div className='leader'>
          <div className='leader__name'>
            <h3>Líder</h3>
          </div>
          <div className='leader__profile'>
            <img src={profile} alt='leader' width='50' height='50' />
            <p>Jhon Trillos</p>
          </div>
        </div>
        <div className='leader__name'>
          <h3>Procesos</h3>
        </div>
        <ProcessCard />
        <ProcessCard />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo,
  };
};

export default connect(mapStateToProps, null)(Profile);
