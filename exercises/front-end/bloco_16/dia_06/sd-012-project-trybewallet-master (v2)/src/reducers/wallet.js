// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  ACTION_REQUEST_START,
  ACTION_REQUEST_SUCCESS,
  ACTION_REQUEST_FAIL,
  ACTION_SAVE_EXPENSE,
  ACTION_DELETE_EXPENSE,
  ACTION_EDIT_EXPENSE_START,
  ACTION_EDIT_EXPENSE_END,
} from '../actions/actionTypes';

const INITIAL_STATE_WALLET = {
  currencies: [],
  expenses: [],
};

export default function wallet(state = INITIAL_STATE_WALLET, action) {
  switch (action.type) {
  case ACTION_REQUEST_START:
    return {
      ...state,
      isFetching: true,
    };
  case ACTION_REQUEST_SUCCESS:
    return {
      ...state,
      isFetching: false,
      currencies: [...Object.keys(action.currencies)],
    };
  case ACTION_REQUEST_FAIL:
    return { ...state, isFetching: false, error: action.error };
  case ACTION_SAVE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
    };
  case ACTION_DELETE_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses.filter((expense) => expense.id !== action.expense.id),
      ],
      isEditing: false,
    };
  case ACTION_EDIT_EXPENSE_START:
    return {
      ...state,
      isEditing: true,
      expenseId: action.expense.id,
    };
  case ACTION_EDIT_EXPENSE_END:
    return {
      ...state,
      expenses: state.expenses.map((item) => {
        if (item.id === action.expense.id) return { ...item, ...action.expense };
        return item;
      }),
      isEditing: false,
    };
  default:
    return state;
  }
}
