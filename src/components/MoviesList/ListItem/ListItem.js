import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ListItem = ({ url, id, title }) => (
  <li>
    <Link to={`${url}/${id}`}>{title}</Link>
  </li>
);

export default ListItem;

ListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
