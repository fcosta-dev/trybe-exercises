// É um array pois o retorno do state é um array, pois usa-se map
const INITIAL_STATE = [
  // id,
  // name = '',
  // age = '',
  // email = '',
]

function registerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    // Action de adicionar registro
    case 'ADD_REGISTER':
      return [...state, action.data];
    // Action de deletar registro
    case 'DELETE_REGISTER':
      return state.filter(register => register !== action.value);

    default:
      return state;
  }
}

export default registerReducer;