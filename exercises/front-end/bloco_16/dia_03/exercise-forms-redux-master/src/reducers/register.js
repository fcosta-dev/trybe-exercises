const initialState = [];

function registerReducer(state = initialState, action) {
  switch (action.type) {
  case 'ADD_REGISTER':
    return [...state, action.data];
  default:
    return state;
  }
}

export default registerReducer;
