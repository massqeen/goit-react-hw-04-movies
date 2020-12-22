import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem/ListItem';

const MoviesList = ({ url, movies }) => (
  <ul>
    {movies.map((movie) => (
      <ListItem key={movie.id} id={movie.id} title={movie.title} url={url} />
    ))}
  </ul>
);

export default MoviesList;

MoviesList.propTypes = {
  url: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired,
};
