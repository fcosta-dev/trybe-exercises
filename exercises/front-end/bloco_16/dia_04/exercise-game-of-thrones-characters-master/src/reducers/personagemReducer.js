// src/reducers/characterReducer.js
import { SEARCH_BEGIN, SEARCH_SUCCESS, SEARCH_ERROR } from '../actions/personagemActions';

const initialState = {
  isLoading: false,
  personagem: '',
}

function personagemReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_BEGIN:
      return {
        ...state,
        isLoading: true,
      }
    case SEARCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        personagem: action.personagem[0],
      }
    case SEARCH_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    default:
      return state
  }
}

export default personagemReducer;
