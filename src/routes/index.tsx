import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () =>(
  <Switch>
    <Route path='/' exact component={SignIn} ></Route>
    <Route path='/register' component={SignUp} ></Route>
    <Route path='/dashboard' component={Dashboard} ></Route>
    <Route path='/repository' component={Repository} ></Route>
  </Switch>
);
export default Routes;
