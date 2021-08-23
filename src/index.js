import React from "react";
import ReactDOM from "react-dom";
import Root from "routes";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import theme from "assets/theme/default";
import { Route, BrowserRouter } from "react-router-dom";
import { configureStore } from "state";

const store = configureStore();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter>
          <Route component={Root} />
        </BrowserRouter>
      </React.StrictMode>
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);

reportWebVitals();
