// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

// Importa as actions
import {
  ACTION_REQUEST,
  ACTION_RECEIVE,
  ACTION_ADD_EXPENSE,
  ACTION_REMOVE_EXPENSE,
  ACTION_SELECT_EXPENSE,
  ACTION_EDIT_EXPENSE,
} from '../actions';

// Estado inicial
const INITIAL_STATE = {
  id: 0,
  currencies: [],
  currencieNames: [],
  expenses: [],
  currency: 'BRL',
  loading: false,
  selected: null,
  status: 'add',
};

// Esse abaixo é o reducer wallet, onde ele tem uma switch para verificar qual action a ser disparada, no caso abaixo serão duas opções.
const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ACTION_REQUEST:
    return ({
      ...state,
      loading: true,
    });
  case ACTION_RECEIVE:
    return ({
      ...state,
      currencieNames: Object.keys(action.payload),
      currencies: action.payload,
      loading: false,
    });
  case ACTION_ADD_EXPENSE: // Action de adicionar despesas
    return ({
      ...state,
      id: state.id + 1,
      expenses: [...state.expenses,
        { id: action.payload.id,
          ...action.payload.expense,
          exchangeRates: state.currencies,
        }],
    });
  case ACTION_REMOVE_EXPENSE: // Action de remover despesas
    return ({
      ...state,
      expenses: state.expenses.filter((exp) => exp.id !== action.payload),
    });
  case ACTION_SELECT_EXPENSE: // Action de selecionar despesas
    return ({
      ...state,
      selected: action.payload,
      status: 'edit',
    });
  case ACTION_EDIT_EXPENSE: { // Action de editar despesas
    return ({
      ...state,
      selected: null,
      status: 'add',
      expenses: [...state.expenses
        .filter((expense) => expense.id !== action.payload.id), { id: action.payload.id,
        ...action.payload.expense,
        exchangeRates: state.currencies }].sort((a, b) => a.id - b.id),
    });
  }
  default:
    return state;
  }
};

export default wallet;
