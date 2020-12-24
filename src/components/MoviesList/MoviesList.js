import React from 'react';
import PropTypes from 'prop-types';
import MoviesListItem from './ListItem/MoviesListItem';

const MoviesList = ({ url, movies, from }) => (
  <ul>
    {movies.map((movie) => (
      <MoviesListItem
        key={movie.id}
        id={movie.id}
        title={movie.title}
        url={url}
        from={from}
      />
    ))}
  </ul>
);

export default MoviesList;

MoviesList.propTypes = {
  url: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired,
  from: PropTypes.string.isRequired,
};
