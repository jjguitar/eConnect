import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';
import Terms from '../containers/Terms';
import Profile from '../containers/Profile';
import Process from '../containers/Process';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/terms' component={Terms} />
        <Route exact path='/process' component={Process} />
        <Route exact path='/profile/:id' component={Profile} />
        {/* <Route exact path='/register' component={Register} />
        <Route exact path='/player/:id' component={isLogged ? Player : Login} /> */}
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
