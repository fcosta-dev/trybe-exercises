// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  REQUEST_START,
  REQUEST_SUCCESS,
  REQUEST_FAIL,
  SAVE_EXPENSE,
  DELETE_EXPENSE,
  EDIT_EXPENSE_START,
  EDIT_EXPENSE_END,
} from '../actions';

const INITIAL_STATE_WALLET = {
  currencies: [],
  expenses: [],
};

export default function wallet(state = INITIAL_STATE_WALLET, action) {
  switch (action.type) {
  case REQUEST_START:
    return {
      ...state,
      isFetching: true,
    };
  case REQUEST_SUCCESS:
    return {
      ...state,
      isFetching: false,
      currencies: [...Object.keys(action.currencies)],
    };
  case REQUEST_FAIL:
    return { ...state, isFetching: false, error: action.error };
  case SAVE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses.filter((expense) => expense.id !== action.expense.id),
      ],
      isEditing: false,
    };
  case EDIT_EXPENSE_START:
    return {
      ...state,
      isEditing: true,
      expenseId: action.expense.id,
    };
  case EDIT_EXPENSE_END:
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
