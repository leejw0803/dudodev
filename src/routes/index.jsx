import * as React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { GlobalStyle } from "components";
import { createBrowserHistory } from "history";

import { Landing, Stack, Hiphop, Fashion } from "pages";

const history = createBrowserHistory();

function Root() {
  return (
    <Router history={history}>
      <GlobalStyle />
      <Route
        render={({ location }) => (
          <Switch location={location}>
            <Route path="/" exact>
              <Landing />
            </Route>
            <Route path="/stack">
              <Stack />
            </Route>
            <Route path="/hiphop">
              <Hiphop />
            </Route>
            <Route path="/Fashion">
              <Fashion />
            </Route>

            <Redirect path="*" to="/" />
          </Switch>
        )}
      />
    </Router>
  );
}

export default Root;
