import React, { Component } from 'react';
import Container from './components/Container/Container';
import moviesApi from './api/movies-api';
import Searchbar from './components/Searchbar/Searchbar';
import Spinner from './components/Spinner';

class App extends Component {
  state = {
    movies: [],
    loading: false,
    error: null,
    searchQuery: 'nature',
    page: 1,
  };

  componentDidMount() {
    this.fetchMovies();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if (prevQuery !== nextQuery) {
      this.fetchMovies();
    }
  }

  fetchMovies = () => {
    const { searchQuery, page } = this.state;

    this.setState({ loading: true });

    moviesApi
      .fetchMovies({ searchQuery, page })
      .then(({ total, results }) => {
        this.setState((prevState) => ({
          movies: [...prevState.movies, ...results],
          page: prevState.page + 1,
          totalMovies: total,
        }));
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchFormSubmit = (query) => {
    this.setState({
      searchQuery: query,
      page: 1,
      images: [],
    });
  };

  render() {
    const { loading, error } = this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        {error && <p>{`Whoops, something went wrong. ${error.message}`}</p>}
        {loading && <Spinner />}
      </Container>
    );
  }
}

export default App;
