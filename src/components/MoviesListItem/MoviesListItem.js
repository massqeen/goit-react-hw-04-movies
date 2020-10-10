import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesListItem = ({ url, id, title }) => (
  <li>
    <Link to={`/${url}/${id}`}>{title}</Link>
  </li>
);

export default MoviesListItem;
