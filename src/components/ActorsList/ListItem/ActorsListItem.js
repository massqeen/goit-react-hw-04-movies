import React from 'react';
import PropTypes from 'prop-types';
import noPhoto from '../../../assets/images/noPhoto.jpg';

const ActorsListItem = ({ actor }) => (
  <li>
    <img
      src={
        actor?.profile_path
          ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
          : noPhoto
      }
      alt={actor?.name}
      height="150px"
      width="100px"
    />
    <p>{actor?.name}</p>
    <p>Character: {actor?.character || 'unknown'}</p>
  </li>
);

export default ActorsListItem;

ActorsListItem.propTypes = {
  actor: PropTypes.object.isRequired,
};
