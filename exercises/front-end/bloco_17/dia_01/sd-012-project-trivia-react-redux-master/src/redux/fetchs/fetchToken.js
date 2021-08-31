import { actionGetTokenError, actionGetTokenSucess } from '../actions';

const fetchToken = () => async (dispatch) => {
  const resp = await fetch('https://opentdb.com/api_token.php?command=request');
  if (!resp.ok) return dispatch(actionGetTokenError);
  const respObject = await resp.json();
  const { token } = respObject;
  localStorage.setItem('token', JSON.stringify(token));
  if (!localStorage.ranking)localStorage.setItem('ranking', JSON.stringify([]));
  dispatch(actionGetTokenSucess({ token }));
};

export default fetchToken;
