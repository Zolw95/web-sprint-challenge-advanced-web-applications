import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Login from './components/Login';
import BubblePage from './components/BubblePage';
import PrivateRoute from './components/PrivateRoute';
import './styles.scss';

function App() {
  return (
    <Router>
      <Fragment>
        <ul>
          <li>
            <Link to='/'>Login</Link>
          </li>
          <li>
            <Link to='/protected'>Bubble Page</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path='/' component={Login} />
          {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
          <PrivateRoute exact path='/protected' component={BubblePage} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
