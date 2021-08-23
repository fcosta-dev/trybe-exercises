// src/redux/trafficReducer.jsx

import { CHANGE_SIGNAL } from './actionCreators';

const initialState = {
  signal: { color: 'red' },
}

function trafficReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SIGNAL:
      return {
        // Retorna o state inicial ou state passado como parametro, com o spread operator
        ...state,
        // Pego todos os sinais que estavam anteriormente, e faço a alteração
        // Como está sendo colocado uma chave igual, essa chave vai ter valor alterado
        signal: { ...state.signal, color: action.payload }
      };
    default:
      return state;
  }
}

export default trafficReducer;
