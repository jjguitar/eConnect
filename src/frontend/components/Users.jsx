import React from 'react';
import '../assets/styles/templates/Users.scss';

const Users = ({ children }) => {
  return (
    <div className='users'>
      {children}
    </div>
  );
};

export default Users;
