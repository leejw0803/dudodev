import { ModeType } from './mode';

export const SET_MODE = 'mode/SET_MODE';

export const setMode = (payload: ModeType) => {
  return {
    type: SET_MODE,
    payload,
  };
};

export const counterActions = { setMode };

interface ModeReduxState {
  mode: ModeType;
}

const initialState: ModeReduxState = {
  mode: {
    mode: 'dev',
    isDark: true,
  },
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_MODE:
      return { ...state, num: action.payload };
    default:
      return state;
  }
}
