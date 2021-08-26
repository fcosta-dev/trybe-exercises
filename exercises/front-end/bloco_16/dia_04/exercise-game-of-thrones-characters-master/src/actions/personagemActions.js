// src/actions/characterActions.js
import charAPI from '../services/charAPI';
export const SEARCH_BEGIN = 'SEARCH_BEGIN';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_ERROR= 'SEARCH_ERROR';

export const searchBegin = (personagemSearched) => (
  { type: SEARCH_BEGIN, loading: true, personagemSearched }
);

// Action referente ao retorno com sucesso
export const searchSuccess = (personagem) => (
  { type: SEARCH_SUCCESS, loading: false, personagem }
);

// Action referente ao retorno com falha
export const searchFailure = (error) => (
  { type: SEARCH_ERROR, loading: false, error }
);

export function thunkPersonagem(name) {
  return (dispatch) => {
    // Ativando o loading
    dispatch(searchBegin(name));
    return charAPI(name)
      .then(
        (personagem) => dispatch(searchSuccess(personagem)),
        (error) => dispatch(searchFailure(error.message)),
      );
  };
};
