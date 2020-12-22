import React, { Component } from 'react';
import moviesAPI from '../../api/moviesAPI';
import Searchbar from '../../components/Searchbar/Searchbar';
import Spinner from '../../components/Spinner';
import MoviesList from '../../components/MoviesList/MoviesList';

class MoviesView extends Component {
  state = {
    movies: [],
    loading: false,
    error: null,
    searchQuery: '',
    page: 1,
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if (prevQuery !== nextQuery) {
      this.fetchMovies();
    }
  }

  scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  fetchMovies() {
    const { searchQuery, page } = this.state;
    this.setState({ loading: true });

    moviesAPI
      .fetchQueryMovies(searchQuery, page)
      .then(({ total, results }) => {
        this.setState((prevState) => ({
          movies: [...prevState.movies, ...results],
          page: prevState.page + 1,
          totalImages: total,
        }));
        if (page !== 1) {
          this.scrollToBottom();
        }
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  handleSearchFormSubmit = (query) => {
    this.setState({
      searchQuery: query,
      page: 1,
      movies: [],
      error: null,
    });
  };

  render() {
    const { loading, error, movies } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        {error && <p>{`Oops, something went wrong. ${error.message}`}</p>}
        {movies.length > 0 && (
          // eslint-disable-next-line react/prop-types
          <MoviesList movies={movies} match={this.props.match} />
        )}

        {loading && <Spinner />}
      </>
    );
  }
}

export default MoviesView;
