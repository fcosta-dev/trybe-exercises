// src/actions/characterActions.js
import charAPI from '../services/charAPI';
export const SEARCH_BEGIN = 'SEARCH_BEGIN';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_ERROR= 'SEARCH_ERROR';

export const searchBegin = (characterSearched) => (
  { type: SEARCH_BEGIN, loading: true, characterSearched }
);

export const searchSuccess = (character) => (
  { type: SEARCH_SUCCESS, loading: false, character }
);

export const searchFailure = (error) => (
  { type: SEARCH_ERROR, loading: false, error }
);

export function thunkCharacter(name) {
  return (dispatch) => {
    // Ativando o loading
    dispatch(searchBegin(name));
    return charAPI(name)
      .then(
        (character) => dispatch(searchSuccess(character)),
        (error) => dispatch(searchFailure(error.message)),
      );
  };
};
