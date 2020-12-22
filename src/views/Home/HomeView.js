import React from 'react';
import { trendingURL, options } from '../../api/moviesAPI';
import MoviesList from '../../components/MoviesList/MoviesList';
import Spinner from '../../components/Spinner';
import useFetch from '../../hooks/useFetch';
import { useRouteMatch } from 'react-router';

const HomeView = () => {
  const { url } = useRouteMatch();
  const { response, error, loading } = useFetch(trendingURL, options);

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
