import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MoviesListItem.module.css';

const MoviesListItem = ({ url, id, title, from }) => (
  <li className={styles.item}>
    <Link
      to={{ pathname: `${url}/${id}`, state: { from } }}
      className={styles.link}
    >
      {title}
    </Link>
  </li>
);

export default MoviesListItem;

MoviesListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
};
