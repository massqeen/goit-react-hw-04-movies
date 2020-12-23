import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import noPoster from '../../assets/images/noPoster.jpg';

const MovieDetails = ({ movie, url }) => {
  return (
    <>
      {' '}
      <div>
        <img
          src={
            movie?.poster_path
              ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
              : noPoster
          }
          alt={movie?.title}
          height="450px"
          width="300px"
        />
        <h2>
          {movie?.title}{' '}
          {movie?.release_date && (
            <span> ({movie?.release_date?.slice(0, 4)})</span>
          )}
        </h2>
        <h3>Overview</h3>
        <p>{movie?.overview}</p>
        <h3>Genres</h3>
        {movie?.genres.map((g) => (
          <span key={g?.id}>{g?.name} </span>
        ))}
      </div>
      <div>
        <ul>
          <li>
            <NavLink to={`${url}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`${url}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MovieDetails;

MovieDetails.propTypes = {
  movie: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
};
