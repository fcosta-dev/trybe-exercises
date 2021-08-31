export const timeoutFalse = () => ({
  type: TIMEOUT_FALSE,
});

export const timeoutTrue = () => ({
  type: TIMEOUT_TRUE,
});

export const saveImgUrl = (payload) => ({
  type: SAVE_IMG_URL,
  payload,
});

export const getQuiz = (payload) => ({
  type: GET_QUIZ, payload,
});

export const fetchingQuiz = () => ({
  type: FETCHING_QUIZ,
});

export const getGravatar = (payload) => ({
  type: FETCH_SUCCESS,
  payload,
});

export const actionGetTokenSucess = (state) => ({
  type: GET_TOKEN_SUCESS,
  state,
});

export const actionGetTokenError = {
  type: GET_TOKEN_ERROR,
};

export const actionAddSetting = (state) => ({
  type: ADD_SETTING,
  state,
});

export const actionSaveDataUser = (state) => ({
  type: SAVE_DATA_USER,
  state,
});
