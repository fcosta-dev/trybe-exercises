import { ACTION_FETCH_SUCCESS } from '../actions/actionTypes';

const INITIAL_STATE = {
  gravatar: '',
};

const reducerGravatar = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ACTION_FETCH_SUCCESS:
    return { ...state, ...action.payload };
  default: return state;
  }
};

export default reducerGravatar;
