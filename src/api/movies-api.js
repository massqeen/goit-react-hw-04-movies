import PropTypes from 'prop-types';
const API_KEY = '64c4c68f9f9e1f4bbe0812714f8538a7';
const url = 'https://api.themoviedb.org/3/';
const startingURL = `${url}/trending/movie/day`;
const searchURL = `${url}/search/movie?language=en-US&include_adult=true`;

const options = {
  method: 'GET',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGM0YzY4ZjlmOWUxZjRiYmUwODEyNzE0Zjg1MzhhNyIsInN1YiI6IjVmN2UxZjVhMDQ5OWYyMDAzODYzOTIzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NVF9jw7bWSsQXAjQJ2UgN6_jQjpCsUSz2RvKd7x4S34',
    'Content-Type': 'application/json',
    'Accept-Charset': 'utf-8',
  },
};

const fetchMovies = ({ searchQuery = '', page = 1, initial = true }) => {
  if (initial) {
    return fetch(`${startingURL}`, options)
      .then((res) => res.json())
      .then(({ results, total_results: total }) => {
        if (!results.length) {
          throw new Error('Unfortunately, your request not found.');
        }
        return { total, results };
      });
  }
  return fetch(`${searchURL}&query=${searchQuery}&page=${page}`, options)
    .then((res) => res.json())
    .then(({ results, total_results: total }) => {
      if (!results.length) {
        throw new Error('Unfortunately, your request not found.');
      }
      return { total, results };
    });
};

fetchMovies.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  initial: PropTypes.bool.isRequired,
};

export default { fetchMovies };
