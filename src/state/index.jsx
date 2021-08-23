import configureStore, { history } from "./configureStore";
import * as sharedActions from "./shared/actions";
import createRootReducer from "./createRootReducer";

const actions = {
  ...sharedActions,
};

export { createRootReducer, configureStore, history, actions };
