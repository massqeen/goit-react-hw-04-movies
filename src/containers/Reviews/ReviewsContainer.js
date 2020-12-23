import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { detailsURL, options } from '../../api/moviesAPI';
import Spinner from '../../components/Spinner';
import useFetch from '../../hooks/useFetch';
import ReviewsList from '../../components/ReviewsList/ReviewsList';

const ReviewsContainer = () => {
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  const { response, err, fetchLoading } = useFetch(
    `${detailsURL}/${movieId}/reviews`,
    options
  );

  useEffect(() => {
    if (response) {
      setReviews(response?.results);
    }
    setLoading(fetchLoading);
    setError(err);
  }, [err, fetchLoading, response]);

  return (
    <>
      {error && <p>{`Oops, something went wrong. ${error.message}`}</p>}
      {reviews && reviews.length === 0 && <p>No reviews</p>}
      {reviews && <ReviewsList reviews={reviews} />}
      {loading && <Spinner />}
    </>
  );
};

export default ReviewsContainer;
