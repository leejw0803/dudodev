import * as types from "./types";

const initialState = {
  scroll: "HERO",
};

function sharedReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_SCROLL:
      return {
        ...state,
        scroll: action.scroll,
      };
    default:
      return state;
  }
}

export default sharedReducer;
