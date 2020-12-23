import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem/ListItem';

const ActorsList = ({ actors }) => (
  <ul>
    {actors.map((actor, i) => (
      <ListItem key={i} actor={actor} />
    ))}
  </ul>
);

export default ActorsList;

ActorsList.propTypes = {
  actors: PropTypes.array.isRequired,
};
