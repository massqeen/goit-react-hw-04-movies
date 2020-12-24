import React from 'react';
import PropTypes from 'prop-types';
import ActorsListItem from './ListItem/ActorsListItem';

const ActorsList = ({ actors }) => (
  <ul>
    {actors.map((actor, i) => (
      <ActorsListItem key={i} actor={actor} />
    ))}
  </ul>
);

export default ActorsList;

ActorsList.propTypes = {
  actors: PropTypes.array.isRequired,
};
