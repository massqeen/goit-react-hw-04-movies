import React from 'react';
import { useRouteMatch } from 'react-router';
import { trendingURL, options } from '../../api/moviesAPI';
import MoviesList from '../../components/MoviesList/MoviesList';
import Spinner from '../../components/Spinner';
import useFetch from '../../hooks/useFetch';

const HomeView = () => {
  const { url } = useRouteMatch();
  const { response, err: error, fetchLoading: loading } = useFetch(
    trendingURL,
    options
  );

  return (
    <>
      {error && (
        <p>{`Sorry, no trending movies for today. ${error.message}`}</p>
      )}
      {response && <MoviesList movies={response} url={url} />}
      {loading && <Spinner />}
    </>
  );
};

export default HomeView;
