import React, { Component } from 'react';
import moviesAPI from '../../api/moviesAPI';
import MoviesList from '../MoviesList/MoviesList';
import Spinner from '../Spinner';

class Home extends Component {
  state = {
    movies: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.fetchTrendingMovies();
  }

  fetchTrendingMovies() {
    this.setState({ loading: true });

    moviesAPI
      .fetchTrendingMovies()
      .then(({ results }) => {
        this.setState((prevState) => ({
          movies: [...prevState.movies, ...results],
        }));
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { loading, error, movies } = this.state;

    return (
      <>
        {error && (
          <p>{`Sorry, no trending movies for today. ${error.message}`}</p>
        )}
        {movies.length > 0 && <MoviesList movies={movies} />}
        {loading && <Spinner />}
      </>
    );
  }
}

export default Home;
