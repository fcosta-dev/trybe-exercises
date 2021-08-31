export const GET_TOKEN_SUCESS = 'GET_TOKEN_SUCESS';
export const GET_TOKEN_ERROR = 'GET_TOKEN_ERROR';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const GET_QUIZ = 'GET_QUIZ';
export const FETCHING_QUIZ = 'FETCHING_QUIZ';
export const FETCH_QUIZ_FAIL = 'FETCH_QUIZ_FAIL';
export const TIMEOUT_FALSE = 'TIMEOUT_FALSE';
export const TIMEOUT_TRUE = 'TIMEOUT_TRUE';
export const SAVE_DATA_USER = 'SAVE_DATA_USER';
export const SAVE_IMG_URL = 'SAVE_IMG_URL';

export const timeoutFalse = () => ({ type: TIMEOUT_FALSE });
export const timeoutTrue = () => ({ type: TIMEOUT_TRUE });
export const ADD_SETTING = 'ADD_SETTING';

export const saveImgUrl = (payload) => ({ type: SAVE_IMG_URL, payload });

export const getQuiz = (payload) => ({ type: GET_QUIZ, payload });
export const fetchingQuiz = () => ({ type: FETCHING_QUIZ });

export const getGravatar = (payload) => ({ type: FETCH_SUCCESS, payload });

export const actionGetTokenSucess = (state) => ({ type: GET_TOKEN_SUCESS, state });

export const actionGetTokenError = { type: GET_TOKEN_ERROR };

export const actionAddSetting = (state) => ({ type: ADD_SETTING, state });

export const actionSaveDataUser = (state) => ({ type: SAVE_DATA_USER, state });
