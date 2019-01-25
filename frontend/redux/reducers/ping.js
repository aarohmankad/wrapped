import { PING } from '../actions/ping';

const initialState = {
  ping: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PING:
      return {
        ...state,
        ping: true,
      };
    default:
      return state;
  }
};
