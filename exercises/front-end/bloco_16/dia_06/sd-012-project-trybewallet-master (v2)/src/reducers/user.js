// Esse reducer será responsável por tratar as informações da pessoa usuária
import { ACTION_EMAIL } from '../actions/actionTypes';

const INITIAL_STATE_USER = {
  email: '',
};

export default function user(state = INITIAL_STATE_USER, action) {
  switch (action.type) {
  case ACTION_EMAIL:
    return { ...state, email: action.payload };
  default:
    return state;
  }
}
