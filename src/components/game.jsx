import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/home';
import Create from './pages/create';
import Select from './pages/select';
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
          <Route path="/select-profile">
            <Select />
          </Route>
          <Route
            path="/create-profile"
            component={(props) => <Create {...props} />}
          />
          <Route path="/notFound">
            <NotFound />
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
