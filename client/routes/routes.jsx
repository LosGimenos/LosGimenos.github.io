import React, { Component } from 'react';
import { Router, IndexRoute, Route, hashHistory } from 'react-router';
import App from '../components/app.jsx';
import HeroPage from '../components/heroPage.jsx';

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HeroPage} />
      </Route>
    </Router>
  );
};

export default Routes;
