import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Timeline from './pages/Timeline';
import Feedback from './pages/Feedback';
import NotFound from './pages/NotFound';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/timeline" exact component={Timeline} />
        <Route path="/feedback" exact component={Feedback} />
        <Route path="/*" exact component={NotFound} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);