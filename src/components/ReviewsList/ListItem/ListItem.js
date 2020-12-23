import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ review }) => (
  <li>
    <h3>Author: {review?.author}</h3>
    <p>{review?.content}</p>
  </li>
);

export default ListItem;

ListItem.propTypes = {
  review: PropTypes.object.isRequired,
};
