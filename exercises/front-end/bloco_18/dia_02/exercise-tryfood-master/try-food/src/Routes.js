import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Order from './pages/Order';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/order" component={ Order } />
    </Switch>
  );
}

export default Routes;
