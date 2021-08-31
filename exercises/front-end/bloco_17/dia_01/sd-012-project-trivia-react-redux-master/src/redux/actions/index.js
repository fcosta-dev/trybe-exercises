// Actions do reducer Gravatar
export const getGravatar = (payload) => ({
  type: ACTION_FETCH_SUCCESS,
  payload,
});



export const timeoutFalse = () => ({
  type: ACTION_TIMEOUT_FALSE,
});

export const timeoutTrue = () => ({
  type: ACTION_TIMEOUT_TRUE,
});

export const saveImgUrl = (payload) => ({
  type: ACTION_SAVE_IMG_URL,
  payload,
});

export const getQuiz = (payload) => ({
  type: ACTION_GET_QUIZ,
  payload,
});

export const fetchingQuiz = () => ({
  type: ACTION_FETCHING_QUIZ,
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
