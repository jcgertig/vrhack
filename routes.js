/** @flow */
import React from 'react';
import { Router, IndexRoute, Route } from 'react-router';

import Base from './handlers/Base';
import Home from'./handlers/Home';
import About from'./handlers/About';
import Overview from'./handlers/Overview';
import SanFran from './handlers/SanFran';
import OverviewSanFran from './handlers/OverviewSanFran';
import NotFound from './handlers/NotFound';

var routes = (
  <Router>
    <Route path="/" component={Base}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="overview" component={Overview} />
      <Route path="san_francisco" component={SanFran} />
      <Route path="san_francisco/overview" component={OverviewSanFran} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default routes;
