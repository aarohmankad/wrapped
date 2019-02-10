import { AUTH_STATE_CHANGED } from '../actions/Auth';

const initialState = {
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_STATE_CHANGED:
      return {
        ...state,
        user: action.user,
      };
      break;
    default:
      return state;
  }
};
