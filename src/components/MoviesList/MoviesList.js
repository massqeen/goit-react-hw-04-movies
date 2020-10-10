import React from 'react';
import PropTypes from 'prop-types';
import MoviesListItem from '../MoviesListItem/MoviesListItem';

const MoviesList = ({ match: { url }, movies }) => (
  <ul>
    {movies.map((movie) => (
      <MoviesListItem
        key={movie.id}
        id={movie.id}
        title={movie.title}
        url={url}
      />
    ))}
  </ul>
);

export default MoviesList;
