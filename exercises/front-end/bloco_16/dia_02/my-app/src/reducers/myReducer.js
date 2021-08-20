// Primeiro, definimos um estado inicial para nosso reducer;
const INITIAL_STATE = {
  state: '',
};

// Um reducer deve receber como parâmetro um estado e uma ação;
function myReducer(state = INITIAL_STATE, action) {
  // A ação, por convenção, deve ser um objeto e possuir a key type . É essa key que define como o reducer vai manipular o estado.  
  switch (action.type) {
    case 'NEW_ACTION':
      return { state: action.state };
    default:
      return state;
  }
}

export default myReducer;
