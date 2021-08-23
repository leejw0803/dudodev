import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import sharedReducer from "./shared/reducers";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    shared: sharedReducer,
  });

export default createRootReducer;
