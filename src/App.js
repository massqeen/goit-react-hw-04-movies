import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from './routes';
import Container from './components/Container/Container';
import Navigation from './components/Navigation/Navigation';
import Spinner from './components/Spinner';

const HomeView = lazy(
  () => import('./views/Home/HomeView') /* webpackChunkName: "homeView" */
);
const MoviesView = lazy(
  () => import('./views/Movies/MoviesView') /* webpackChunkName: "moviesView" */
);
const MovieDetailsView = lazy(
  () =>
    import(
      './views/MovieDetails/MovieDetailsView'
    ) /* webpackChunkName: "movieDetailsView" */
);

const App = () => (
  <Container>
    <Navigation />
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route path={routes.home} exact component={HomeView} />
        <Route path={routes.movies} exact component={MoviesView} />
        <Route path={routes.movieDetails} component={MovieDetailsView} />
        <Redirect to={routes.home} />
      </Switch>
    </Suspense>
  </Container>
);

export default App;
