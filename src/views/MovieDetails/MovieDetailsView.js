import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { detailsURL, options } from '../../api/moviesAPI';
import Spinner from '../../components/Spinner';
import useFetch from '../../hooks/useFetch';
import MovieDetails from '../../components/MovieDetails/MovieDetails';

const MovieDetailsView = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  const { response, err, fetchLoading } = useFetch(
    `${detailsURL}/${movieId}`,
    options
  );

  useEffect(() => {
    if (response) {
      setMovie(response);
    }
    setLoading(fetchLoading);
    setError(err);
  }, [err, fetchLoading, response]);

  return (
    <>
      {error && <p>{`Oops, something went wrong. ${error.message}`}</p>}
      {movie && <MovieDetails movie={movie} />}
      {loading && <Spinner />}
    </>
  );
};

export default MovieDetailsView;
