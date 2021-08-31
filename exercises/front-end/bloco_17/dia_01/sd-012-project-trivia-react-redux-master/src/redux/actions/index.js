import {
  // Actions do reducer Gravatar
  ACTION_FETCH_SUCCESS,
  // Actions do reducer Quiz
  ACTION_FETCHING_QUIZ,
  ACTION_GET_QUIZ,
  ACTION_TIMEOUT_FALSE,
  ACTION_TIMEOUT_TRUE,
  // Actions do reducer User
  ACTION_ADD_SETTING,
  ACTION_GET_TOKEN_ERROR,
  ACTION_GET_TOKEN_SUCESS,
  ACTION_SAVE_DATA_USER,
  ACTION_SAVE_IMG_URL,
} from './actionTypes';

// Actions do reducer Gravatar
export const getGravatar = (payload) => ({
  type: ACTION_FETCH_SUCCESS,
  payload,
});

// Actions do reducer Quiz
export const fetchingQuiz = () => ({
  type: ACTION_FETCHING_QUIZ,
});

export const getQuiz = (payload) => ({
  type: ACTION_GET_QUIZ,
  payload,
});

export const timeoutFalse = () => ({
  type: ACTION_TIMEOUT_FALSE,
});

export const timeoutTrue = () => ({
  type: ACTION_TIMEOUT_TRUE,
});

// Actions do reducer User
export const saveImgUrl = (payload) => ({
  type: ACTION_SAVE_IMG_URL,
  payload,
});

export const actionGetTokenSucess = (state) => ({
  type: ACTION_GET_TOKEN_SUCESS,
  state,
});

export const actionGetTokenError = () => ({
  type: ACTION_GET_TOKEN_ERROR,
});

export const actionAddSetting = (state) => ({
  type: ACTION_ADD_SETTING,
  state,
});

export const actionSaveDataUser = (state) => ({
  type: ACTION_SAVE_DATA_USER,
  state,
});
