const url = 'https://api.themoviedb.org/3';
const trendingURL = `${url}/trending/movie/day`;
const detailsURL = `${url}/movie`;
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

export { trendingURL, detailsURL, searchURL, options };
