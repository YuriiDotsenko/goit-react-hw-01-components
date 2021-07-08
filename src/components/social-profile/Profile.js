import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../img-default/image-1.jpeg';
import '../social-profile/Profile.css';

const Profile = ({ avatar, name, tag, location, followers, views, likes }) => (
  <div className="Profile__container">
    <img className="Profile__photo" src={avatar} alt={name} width="180px" />
    <p className="Profile__name__title">{name}</p>
    <p className="Profile__title">{tag}</p>
    <p className="Profile__title">{location}</p>

    <ul className="Profile__state">
      <li>
        <span>Followers</span>
        <br />
        <span className="Profile__color">{followers}</span>
      </li>
      <li>
        <span>Views</span>
        <br />
        <span className="Profile__color">{views}</span>
      </li>
      <li>
        <span>Likes</span>
        <br />
        <span className="Profile__color">{likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  avatar: defaultImage,
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;
