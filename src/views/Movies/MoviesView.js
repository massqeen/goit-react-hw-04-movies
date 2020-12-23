import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router';
import { searchURL, options } from '../../api/moviesAPI';
import Searchbar from '../../components/Searchbar/Searchbar';
import Spinner from '../../components/Spinner';
import MoviesList from '../../components/MoviesList/MoviesList';
import useFetch from '../../hooks/useFetch';

const MoviesView = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { url } = useRouteMatch();

  const { response, err, fetchLoading } = useFetch(
    `${searchURL}&query=${searchQuery}&page=${page}`,
    options
  );
  console.log(response, err, fetchLoading, setPage);
  useEffect(() => {
    if (response) {
      setMovies(response.results);
    }
    setLoading(fetchLoading);
    setError(err);
  }, [err, fetchLoading, response]);

  const handleSearchFormSubmit = (query) => {
    setSearchQuery((prevState) => (prevState !== query ? query : prevState));
    if (response) {
      setMovies(response.results);
    }
    setError(error);
    setLoading(loading);
  };

  return (
    <>
      <Searchbar onSubmit={handleSearchFormSubmit} />
      {error && <p>{`Oops, something went wrong. ${error.message}`}</p>}
      {movies && <MoviesList movies={movies} url={url} />}
      {loading && <Spinner />}
    </>
  );
};

export default MoviesView;
