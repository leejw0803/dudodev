import * as React from 'react';
import {BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { GlobalStyle } from 'components';

import { Landing } from 'pages';

function Root() {
  return(
  <BrowserRouter>
    <GlobalStyle />
    <Switch>
      <Route path='/' exact>
        <Landing />
      </Route>

      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
  );
}

export default Root;