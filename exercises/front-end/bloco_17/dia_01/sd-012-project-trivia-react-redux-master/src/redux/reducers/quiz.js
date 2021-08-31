import { FETCHING_QUIZ, GET_QUIZ, TIMEOUT_FALSE, TIMEOUT_TRUE } from '../actions/index';

const INITIAL_STATE = {
  questions: [],
  loading: true,
  timeout: false,
};

const quizReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCHING_QUIZ:
    return { ...state, loading: true };
  case GET_QUIZ:
    return { ...state, loading: false, questions: action.payload };
  case TIMEOUT_FALSE:
    return { ...state, timeout: false };
  case TIMEOUT_TRUE:
    return { ...state, timeout: true };
  default:
    return state;
  }
};

export default quizReducer;
