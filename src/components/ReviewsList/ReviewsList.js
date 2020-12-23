import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem/ListItem';

const ReviewsList = ({ reviews }) => (
  <ul>
    {reviews.map((review, i) => (
      <ListItem key={i} review={review} />
    ))}
  </ul>
);

export default ReviewsList;

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
};
