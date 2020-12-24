import React from 'react';
import PropTypes from 'prop-types';

const ReviewsListItem = ({ review }) => (
  <li>
    <h3>Author: {review?.author}</h3>
    <p>{review?.content}</p>
  </li>
);

export default ReviewsListItem;

ReviewsListItem.propTypes = {
  review: PropTypes.object.isRequired,
};
