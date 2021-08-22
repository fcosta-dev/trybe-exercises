export const CHANGE_SIGNAL = 'CHANGE_SIGNAL';

// Cria uma action que recebe como parametro um valor
// Os valores serão: red, yellow, green
// Conforme valor recebido de parametro, passa o type e a cor
export const changeSignal = (payload) => ({
  type: CHANGE_SIGNAL,
  payload,
});
