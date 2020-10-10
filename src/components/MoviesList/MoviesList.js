import React from 'react';
import PropTypes from 'prop-types';
import MoviesListItem from '../MoviesListItem/MoviesListItem';

const MoviesList = ({ movies }) => (
  <ul>
    {movies.map((movie) => (
      <MoviesListItem key={movie.id} id={movie.id} title={movie.title} />
    ))}
  </ul>
);

export default MoviesList;
