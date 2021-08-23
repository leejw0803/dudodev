import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import { persistReducer } from "redux-persist";
import localforage from "localforage";

import createRootReducer from "./createRootReducer";

const persistConfig = {
  key: "moing",
  storage: localforage,
  blacklist: ["shared"],
};

export const history = createBrowserHistory();

const configureStore = (preloadedState) =>
  createStore(
    persistReducer(persistConfig, createRootReducer(history)),
    preloadedState,
    compose(applyMiddleware(routerMiddleware(history)))
  );

export default configureStore;
