import React from 'react';
import PropTypes from 'prop-types';
import ReviewsListItem from './ListItem/ReviewsListItem';

const ReviewsList = ({ reviews }) => (
  <ul>
    {reviews.map((review, i) => (
      <ReviewsListItem key={i} review={review} />
    ))}
  </ul>
);

export default ReviewsList;

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
};
