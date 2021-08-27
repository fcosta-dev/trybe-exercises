// ACTIONS de Login, usadas no REDUCER User

// ACTION_AUTENTICACAO tem a finalizade de autenticar quando o login estiver correto
// Ela recebe o payload quando for chamada, e passa um objeto com a chave type e payload
export const ACTION_AUTENTICACAO = 'ACTION_AUTENTICACAO';
export const loginAutenticacao = (payload) => ({
  type: ACTION_AUTENTICACAO,
  payload,
});
