import React, { Component } from 'react';
import { Router, IndexRoute, Route, hashHistory } from 'react-router';
import App from '../components/app.jsx';
import HeroPage from '../components/heroPage.jsx';
import About from '../components/about.jsx';
import Theatrical from '../components/theatrical.jsx';

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HeroPage} />
        <Route path="about" component={About} />
        <Route path="theatrical" component={Theatrical} />
      </Route>
    </Router>
  );
};

export default Routes;
