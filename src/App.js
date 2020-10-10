import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Container from './components/Container/Container';
import Home from './components/Home/Home';
import Movies from './components/Movies/Movies';
import Navigation from './components/Navigation/Navigation';

class App extends Component {
  state = {};

  render() {
    return (
      <Container>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies" exact component={Movies} />
          <Redirect to="/" />
        </Switch>
      </Container>
    );
  }
}

export default App;
