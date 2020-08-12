/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import Users from '../components/Users';
import User from '../components/User';
import '../assets/styles/pages/Home.scss';

const Home = (props) => {
  const { users } = props;
  return (
    <div className='home'>
      <h1>Miembros</h1>
      <Users>
        {users.map((item) => (
          <User key={item.id} {...item} />
        ))}
      </Users>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, null)(Home);
