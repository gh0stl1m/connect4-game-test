// External libraries
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import PlayGame from '../PlayGame';
import Game from '../Game';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          path="/game"
          component={Game}
        />
        <Route
          path="/"
          component={PlayGame}
        />
      </Switch>
    </Router>
  );
}

export default App;
