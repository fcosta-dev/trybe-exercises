const Initial_State = {

};

// Se o state recebido como parametro for vazio, ele assume o Initial_State
function loginReducer(state = Initial_State, action) {
  switch (action.type) {
    // Apenas a action de Login
    case 'LOGIN':
      return action.value;
  
    default:
      return state;
  }
}

export default loginReducer;