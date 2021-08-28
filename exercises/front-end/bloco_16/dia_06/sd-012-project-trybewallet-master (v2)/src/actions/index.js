// Importa as action types do User e do Wallet
import {
  ACTION_AUTENTICACAO,
  ACTION_LOGIN,
  ACTION_REQUEST,
  ACTION_RECEIVE,
  ACTION_ADD_EXPENSE,
  ACTION_REMOVE_EXPENSE,
  ACTION_SELECT_EXPENSE,
  ACTION_EDIT_EXPENSE,
} from './actionTypes';

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

// ***********************************************************************
// ***********************************************************************
// ACTIONS QUE BUSCA INFORMAÇÕES DA MOEDA
// ***********************************************************************
// ***********************************************************************
// ACTIONS de Wallet, usadas no REDUCER Wallet
// Action para requerer informações da API de Moedas
export const actionRequest = () => ({
  type: ACTION_REQUEST,
});

// Action para receber informações da API de Moedas
export const actionReceive = (payload) => ({
  type: ACTION_RECEIVE,
  payload,
});

// Função para pegar as Moedas
export function getCurrencies() {
  const API_URL = 'https://economia.awesomeapi.com.br/json/all';
  return async (dispatch) => {
    dispatch(actionRequest());
    const currencies = await fetch(API_URL);
    const currenciesObj = await currencies.json();
    dispatch(actionReceive(currenciesObj));
  };
}

// ***********************************************************************
// ***********************************************************************
// ACTIONS DE MOVIMENTAÇÃO DAS DESPESAS
// ***********************************************************************
// ***********************************************************************
export const actionAddExpense = (expense, id) => ({
  type: ACTION_ADD_EXPENSE,
  payload: {
    expense, id,
  },
});

export const actionRemoveExpense = (payload) => ({
  type: ACTION_REMOVE_EXPENSE,
  payload,
});

export const actionSelectExpense = (payload) => ({
  type: ACTION_SELECT_EXPENSE,
  payload,
});

export const actionEditExpense = (expense, id) => ({
  type: ACTION_EDIT_EXPENSE,
  payload: {
    id,
    expense,
  },
});
