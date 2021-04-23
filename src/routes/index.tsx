import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => (
  <Switch>
    <Route path='/' exact component={SignIn} ></Route>
    <Route path='/signup' component={SignUp} ></Route>
    <Route path='/dashboard' component={Dashboard} isPrivate></Route>
    <Route path='/repository' component={Repository} isPrivate></Route>
  </Switch>
);
export default Routes;
