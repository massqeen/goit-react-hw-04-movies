import PropTypes from 'prop-types';
import React from 'react';
import noPoster from '../../assets/images/noPoster.jpg';

const MovieDetails = ({ movie }) => {
  return (
    <>
      <img
        src={
          movie?.poster_path
            ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
            : noPoster
        }
        alt={movie?.title}
      />
      <h2>
        {movie?.title} ({movie?.release_date.slice(0, 4)})
      </h2>
      <h3>Overview</h3>
      <p>{movie?.overview}</p>
      <h3>Genres</h3>
      {movie?.genres.map((g) => (
        <span key={g?.id}>{g?.name} </span>
      ))}
    </>
  );
};

export default MovieDetails;

MovieDetails.propTypes = {
  movie: PropTypes.object.isRequired,
};
