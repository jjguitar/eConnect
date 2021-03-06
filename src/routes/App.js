import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import Home from '../containers/Home';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        {/* <Route exact path='/register' component={Register} />
        <Route exact path='/player/:id' component={isLogged ? Player : Login} />
        <Route component={NotFound} /> */}
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
