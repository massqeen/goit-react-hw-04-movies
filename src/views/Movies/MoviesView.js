import React, { useEffect, useState } from 'react';
import { useRouteMatch, useHistory, useLocation } from 'react-router';
import { searchURL, options } from '../../assets/api/moviesAPI';
import Searchbar from '../../components/Searchbar/Searchbar';
import Spinner from '../../components/Spinner';
import MoviesList from '../../components/MoviesList/MoviesList';
import useFetch from '../../hooks/useFetch';

const MoviesView = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { url } = useRouteMatch();

  const history = useHistory();
  const location = useLocation();
  const urlQuery = new URLSearchParams(location.search).get('query') ?? '';

  const { response, err, fetchLoading } = useFetch(
    `${searchURL}&query=${urlQuery}&page=1`,
    options
  );

  useEffect(() => {
    if (response) {
      setMovies(response.results);
    }
    setLoading(fetchLoading);
    setError(err);
  }, [err, fetchLoading, response]);

  useEffect(() => {
    if (response) {
      setMovies(response.results);
    }
  }, [response, urlQuery]);

  const handleSearchFormSubmit = (query) => {
    if (!query) {
      return;
    }
    setLoading(loading);
    history.push({ ...location, search: `query=${query}` });
  };

  return (
    <>
      <Searchbar onSubmit={handleSearchFormSubmit} />
      {error && <p>{`Oops, something went wrong. ${error.message}`}</p>}
      {urlQuery && movies.length === 0 && !loading && <p>Nothing found :(</p>}
      {movies && (
        <MoviesList
          movies={movies}
          url={url}
          from={`${url}${location.search}`}
        />
      )}
      {loading && <Spinner />}
    </>
  );
};

export default MoviesView;
