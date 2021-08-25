const Initial_State = {

};

function loginReducer(state = Initial_State, action) {
  switch (action.type) {
    case 'LOGIN':
      return action.value;
  
    default:
      return state;
  }
}

export default loginReducer;