import * as React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { GlobalStyle } from "components";
import { createBrowserHistory } from "history";

import { Landing, Programming, Hiphop, Fashion } from "pages";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const history = createBrowserHistory();

const pageTrans = "trans";
const classNames = {
  appear: `${pageTrans} appear`,
  appearActive: `${pageTrans} appear active`,
  appearDone: `${pageTrans} appear done`,
  enter: `${pageTrans} enter`,
  enterActive: `${pageTrans} enter active`,
  enterDone: `${pageTrans} enter done`,
  exit: `${pageTrans} exit`,
  exitActive: `${pageTrans} exit active`,
  exitDone: `${pageTrans} exit done`,
};

function Root() {
  return (
    <Router history={history}>
      <GlobalStyle />
      <Route
        render={({ location }) => (
          <TransitionGroup className="transitionGroup">
            <CSSTransition
              key={location.pathname}
              classNames={classNames}
              timeout={200}
            >
              <Switch location={location}>
                <Route path="/" exact>
                  <Landing />
                </Route>
                <Route path="/programming">
                  <Programming />
                </Route>
                <Route path="/hiphop">
                  <Hiphop />
                </Route>
                <Route path="/Fashion">
                  <Fashion />
                </Route>

                <Redirect path="*" to="/" />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </Router>
  );
}

export default Root;
