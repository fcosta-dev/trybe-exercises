// Importa as action types
import { ACTION_AUTENTICACAO, ACTION_LOGIN } from './actionTypes';

// ACTIONS de Login, usadas no REDUCER User

// ACTION_AUTENTICACAO tem a finalizade de autenticar quando o login estiver correto
// Ela recebe o payload quando for chamada, e passa um objeto com a chave type e payload
export const actionAutenticacao = (payload) => ({
  type: ACTION_AUTENTICACAO,
  payload,
});

// ACTION_LOGIN tem a finalidade de fazer o login do usuário
export const actionLogin = (payload) => ({
  type: ACTION_LOGIN,
  payload,
});
