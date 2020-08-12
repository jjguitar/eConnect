/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { sendInfo } from '../actions/index';
import '../assets/styles/components/user.scss';

const User = (props) => {
  // console.log(props);
  const { cover, first_name, last_name, rol, tags, id } = props;
  const handleSendInfo = () => {
    props.sendInfo(
      {
        cover,
        first_name,
        last_name,
        rol,
        tags,
        id,
      },
    );
  };
  return (
    <div className='user__container'>
      <div className='user__profile'>
        <img src={cover} width='50' height='50' />
        <div>
          <h2>{first_name}</h2>
          <h4>{last_name}</h4>
        </div>
      </div>
      <Link to={`/profile/${id}`}>
        <FontAwesomeIcon icon={faAngleRight} className='header__back' onClick={handleSendInfo} />
      </Link>
    </div>
  );
};

const mapDispatchToProps = {
  sendInfo,
};

export default connect(null, mapDispatchToProps)(User);

