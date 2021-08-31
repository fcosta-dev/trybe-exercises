import {
  ACTION_FETCHING_QUIZ,
  ACTION_GET_QUIZ,
  ACTION_TIMEOUT_FALSE,
  ACTION_TIMEOUT_TRUE,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  questions: [],
  loading: true,
  timeout: false,
};

const quizReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ACTION_FETCHING_QUIZ:
    return { ...state, loading: true };
  case ACTION_GET_QUIZ:
    return { ...state, loading: false, questions: action.payload };
  case ACTION_TIMEOUT_FALSE:
    return { ...state, timeout: false };
  case ACTION_TIMEOUT_TRUE:
    return { ...state, timeout: true };
  default:
    return state;
  }
};

export default quizReducer;
