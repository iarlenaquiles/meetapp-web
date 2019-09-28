import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Signin from '~/pages/Signin';
import Signup from '~/pages/Signup';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import Meetup from '~/pages/Meetup';
import Details from '~/pages/Details';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Signin} />
      <Route path="/register" component={Signup} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/meetup" component={Meetup} isPrivate />
      <Route path="/meetup/edit/:id" component={Meetup} isPrivate />
      <Route path="/details/:id" component={Details} isPrivate />
    </Switch>
  );
}
