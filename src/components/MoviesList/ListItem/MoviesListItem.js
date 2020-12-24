import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesListItem = ({ url, id, title, from }) => (
  <li>
    <Link to={{ pathname: `${url}/${id}`, state: { from } }}>{title}</Link>
  </li>
);

export default MoviesListItem;

MoviesListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
};
