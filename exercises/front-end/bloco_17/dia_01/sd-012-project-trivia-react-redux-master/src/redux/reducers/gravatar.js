import { FETCH_SUCCESS } from '../actions';

const INITIAL_STATE = {
  gravatar: '',
};

const reducerGravatar = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_SUCCESS:
    return { ...state, ...action.payload };
  default: return state;
  }
};

export default reducerGravatar;
