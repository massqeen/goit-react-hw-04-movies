import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesListItem = ({ id, title }) => (
  <li>
    <Link to={`/movies/${id}`}>{title}</Link>
  </li>
);

export default MoviesListItem;
