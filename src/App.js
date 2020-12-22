import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Container from './components/Container/Container';
import HomeView from './views/Home/HomeView';
import MoviesView from './views/Movies/MoviesView';
import Navigation from './components/Navigation/Navigation';

class App extends Component {
  state = {};

  render() {
    return (
      <Container>
        <Navigation />
        <Switch>
          <Route path="/" exact component={HomeView} />
          <Route path="/movies" exact component={MoviesView} />
          <Redirect to="/" />
        </Switch>
      </Container>
    );
  }
}

export default App;
