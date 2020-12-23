import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { detailsURL, options } from '../../api/moviesAPI';
import Spinner from '../../components/Spinner';
import useFetch from '../../hooks/useFetch';

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
      {movie && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w300${movie?.poster_path}`}
            alt={movie?.title}
          />
          <h2>
            {movie?.title} ({movie?.release_date.slice(0, 4)})
          </h2>
          <h3>Overview</h3>
          <p>{movie?.overview}</p>
          <h3>Genres</h3>
          {movie?.genres.map((g) => (
            <span key={g?.id}>{g?.name} </span>
          ))}
        </>
      )}
      {loading && <Spinner />}
    </>
  );
};

export default MovieDetailsView;
