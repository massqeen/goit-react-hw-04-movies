import React, { useEffect, useState } from 'react';
import {
  useParams,
  useRouteMatch,
  useLocation,
  useHistory,
} from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { detailsURL, options } from '../../assets/api/moviesAPI';
import Spinner from '../../components/Spinner';
import useFetch from '../../hooks/useFetch';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import CastContainer from '../../containers/Cast/CastContainer';
import ReviewsContainer from '../../containers/Reviews/ReviewsContainer';

const MovieDetailsView = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  const { response, err, fetchLoading } = useFetch(
    `${detailsURL}/${movieId}`,
    options
  );
  const { url, path } = useRouteMatch();
  const { state } = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (response) {
      setMovie(response);
    }
    setLoading(fetchLoading);
    setError(err);
  }, [err, fetchLoading, response]);

  const goBackHandler = () => {
    if (!state) {
      history.push({ pathname: '/' });
      return;
    }
    history.push(state.from);
  };

  return (
    <>
      {error && <p>{`Oops, something went wrong. ${error.message}`}</p>}
      {movie && (
        <Button
          onClick={goBackHandler}
          variant="outlined"
          color="primary"
          style={{ backgroundColor: '#f0f0f0' }}
        >
          Go back
        </Button>
      )}
      {movie && <MovieDetails movie={movie} url={url} from={state.from} />}
      {loading && <Spinner />}
      <Switch>
        <Route path={`${path}/cast`} component={CastContainer} />
        <Route path={`${path}/reviews`} component={ReviewsContainer} />
      </Switch>
    </>
  );
};

export default MovieDetailsView;
