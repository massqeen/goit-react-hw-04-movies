import React, { useEffect, useState } from 'react';
import { useParams, useRouteMatch } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { detailsURL, options } from '../../api/moviesAPI';
import Spinner from '../../components/Spinner';
import useFetch from '../../hooks/useFetch';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import CastContainer from '../../containers/CastContainer/CastContainer';

const MovieDetailsView = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  const { response, err, fetchLoading } = useFetch(
    `${detailsURL}/${movieId}`,
    options
  );
  const { url } = useRouteMatch();

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
      {movie && <MovieDetails movie={movie} url={url} />}
      {loading && <Spinner />}
      <Switch>
        <Route path="/movies/:movieId/cast" component={CastContainer} />
        {/*<Route path="/movies/:movieId/reviews" component={MovieDetailsView} />*/}
      </Switch>
    </>
  );
};

export default MovieDetailsView;
