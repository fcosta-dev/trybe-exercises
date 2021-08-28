import currenciesAPI from '../services';

// Importa as action types do User e do Wallet
import {
  ACTION_EMAIL,
  ACTION_REQUEST_START,
  ACTION_REQUEST_SUCCESS,
  ACTION_REQUEST_FAIL,
  ACTION_SAVE_EXPENSE,
  ACTION_DELETE_EXPENSE,
  ACTION_EDIT_EXPENSE_START,
  ACTION_EDIT_EXPENSE_END,
} from './actionTypes';

export const actionEmailChange = (payload) => ({
  type: ACTION_EMAIL,
  payload,
});

// Action para gerar a conexao com a API de Moedas
const actionRequestCurrenciesTry = () => ({
  type: ACTION_REQUEST_START,
});

const actionRequestCurrenciesSuccess = (currencies) => ({
  type: ACTION_REQUEST_SUCCESS,
  currencies,
});

const actionRequestCurrenciesFail = (error) => ({
  type: ACTION_REQUEST_FAIL,
  error,
});

export const fetchCurrencies = () => async (dispatch) => {
  try {
    dispatch(requestCurrenciesTry());

    const currencies = await currenciesAPI();

    dispatch(requestCurrenciesSuccess(currencies));
  } catch (error) {
    dispatch(requestCurrenciesFail(error));
  }
};

export const saveExpense = (expenses) => ({
  type: SAVE_EXPENSE,
  expenses,
});

export const deleteExpense = (expense) => ({
  type: DELETE_EXPENSE,
  expense,
});

export const editExpense = (expense) => ({
  type: EDIT_EXPENSE_START,
  expense,
});

export const endExpenseEdit = (expense) => ({
  type: EDIT_EXPENSE_END,
  expense,
});
