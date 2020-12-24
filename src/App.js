import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
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
        <Route path="/" exact component={HomeView} />
        <Route path="/movies" exact component={MoviesView} />
        <Route path="/movies/:movieId" component={MovieDetailsView} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </Container>
);

export default App;
