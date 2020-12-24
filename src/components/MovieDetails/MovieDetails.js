import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import styles from './MovieDetails.module.css';
import noPoster from '../../assets/images/noPoster.jpg';

const MovieDetails = ({ movie, url, from }) => {
  return (
    <>
      <div className={styles.wrapper}>
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
        <div className={styles.contentInfoWrapper}>
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
      </div>
      <Divider style={{ margin: '16px' }} />
      <div>
        <ul className={styles.additionLinks}>
          <li style={{ marginRight: '20px' }}>
            <NavLink
              to={{ pathname: `${url}/cast`, state: { from } }}
              activeStyle={{ color: 'red' }}
            >
              Credits
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{ pathname: `${url}/reviews`, state: { from } }}
              activeStyle={{ color: 'red' }}
            >
              Reviews
            </NavLink>
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
  from: PropTypes.string.isRequired,
};
