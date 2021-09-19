import { SEARCH_BY_INGREDIENT } from '../action';

const INITIAL_STATE = {
  result: [],
};

export const search = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SEARCH_BY_INGREDIENT:
    return { ...state, result: action.payload.ingredient };
  default:
    return state;
  }
};

export const TEST = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SEARCH_BY_INGREDIENT':
    return { ...state, result: action.payload.ingredient };
  default:
    return state;
  }
};
