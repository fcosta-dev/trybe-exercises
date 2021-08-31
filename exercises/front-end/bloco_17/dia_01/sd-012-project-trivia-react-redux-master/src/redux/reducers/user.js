import {
  ADD_SETTING,
  GET_TOKEN_ERROR,
  GET_TOKEN_SUCESS,
  SAVE_DATA_USER,
  SAVE_IMG_URL,
} from '../actions';

const INITIAL_STATE = {
  token: '',
  errorToken: '',
  playerName: '',
  email: '',
  amount: 5,
  id: 9,
  picture: '',
  difficulty: 'any difficulty',
  type: 'any type',
};

const reducerUser = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_TOKEN_SUCESS:
    return { ...state, ...action.state, errorToken: '' };

  case GET_TOKEN_ERROR:
    return { ...state, error: 'Ocorreu um erro com a requisição do token' };

  case ADD_SETTING:
    return { ...state, ...action.state };

  case SAVE_DATA_USER:
    return { ...state, ...action.state };

  case SAVE_IMG_URL:
    return { ...state, picture: action.payload };

  default: return state;
  }
};

export default reducerUser;
