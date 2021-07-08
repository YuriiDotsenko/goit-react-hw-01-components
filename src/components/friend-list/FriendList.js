import React from 'react';
import Friend from './Friend';
import PropTypes from 'prop-types';
import '../friend-list/FriendsList.css';

const FriendsList = ({ friends }) => (
  <ul className="friend_list">
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li key={id} className="friend_item">
        <Friend avatar={avatar} name={name} isOnline={isOnline} />
      </li>
    ))}
  </ul>
);

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }),
  ),
};

export default FriendsList;
