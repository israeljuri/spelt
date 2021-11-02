import React, { Component, Fragment } from 'react';
import Home from './pages/home/index';
import Create from './pages/create/index';
import { Switch, Route, Redirect } from 'react-router-dom';
import NotFound from './pages/notFound';

class Game extends Component {
  state = {
    profile: {
      nickname: '',
      highScore: 0,
      gender: 0,
    },
  };
  render() {
    return (
      <Fragment>
        <Switch>
          <Route path="/notFound">
            <NotFound />
          </Route>
          <Route path="/create-profile">
            <Create />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Redirect to="/notFound" />
        </Switch>
      </Fragment>
    );
  }
}

export default Game;
