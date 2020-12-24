import React from 'react';
import { trendingURL, options } from '../../assets/api/moviesAPI';
import MoviesList from '../../components/MoviesList/MoviesList';
import Spinner from '../../components/Spinner';
import useFetch from '../../hooks/useFetch';

const HomeView = () => {
  const { response, err: error, fetchLoading: loading } = useFetch(
    trendingURL,
    options
  );
  let movies = null;
  if (response) {
    movies = response.results;
  }

  return (
    <>
      {error && (
        <p>{`Sorry, no trending movies for today. ${error.message}`}</p>
      )}
      {movies && <h2>Trending today</h2>}
      {movies && <MoviesList movies={movies} url="/movies" from="/" />}
      {loading && <Spinner />}
    </>
  );
};

export default HomeView;
