// Esse reducer será responsável por tratar as informações da pessoa usuária

// Importo as duas actions para serem estruturadas neste reducer
import { ACTION_AUTENTICACAO, ACTION_LOGIN } from '../actions/actionTypes';

// Estou dando início ao meu state com duas chaves:
// email que vai ter o email do usuário
// autenticado que vai guardar se o usuário foi autenticado ou não
const INITIAL_STATE = {
  email: '',
  autenticado: false,
};

// Esse abaixo é o reducer user, onde ele tem uma switch para verificar qual action a ser disparada, no caso abaixo serão duas opções.
const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  // Action para realizar a ação de autenticação, ou seja, depois do check realizado é feito a alteração do state para true e o botão Enviar é liberado
  case ACTION_AUTENTICACAO:
    return ({
      // Através do spread operator vai ser retornado todo o state, com a alteração da linha autenticado
      ...state,
      stateAutenticado: action.payload,
    });
    // Action para realizar a ação de login
  case ACTION_LOGIN:
    return ({
      ...state,
      email: action.payload,
    });
  default:
    return state;
  }
};

export default user;
