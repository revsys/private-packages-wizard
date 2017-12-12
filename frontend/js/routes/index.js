import React from 'react';
import { Route, Redirect, Switch } from 'react-router';

import Home from '../pages/Home';

//import PrivateRoute from './containers/PrivateRoute';
import RouteNotFound from './components/RouteNotFound';

const routes = (
  <Switch>
    <Redirect exact from="/" to="/pip-private-packages/" />
    <Route exact path="/pip-private-packages/" component={Home} />
    <Route component={RouteNotFound} />
  </Switch>
);

export default routes;
