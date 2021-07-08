import React from 'react';
import '../friend-list/FriendsList.css';

import PropTypes from 'prop-types';

const Friend = ({ avatar, name, isOnline }) => (
  <>
    <span
      className="friend_status"
      style={{ backgroundColor: isOnline ? '#008000' : '#ff0000' }}
    >
      {isOnline}
    </span>
    <img src={avatar} alt={name} width="48" />
    <p className="friends_name">{name}</p>
  </>
);

Friend.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default Friend;
