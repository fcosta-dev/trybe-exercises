import { SET_PROFESSIONAL_VALUE, SET_PERSONAL_VALUE } from '../action/action';

// State Inicial
const initialState = {
  personalInputs: {
    nome: '',
    email: '',
    cpf: '',
    endereco: '',
    cidade: '',
    estado: '',
  },
  professionalInputs: {
    curriculo: '',
    cargo: '',
    descricao: '',
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_PERSONAL_VALUE:
    return { ...state, personalInputs: action.payload };
  case SET_PROFESSIONAL_VALUE:
    return { ...state, professionalInputs: action.payload };
  default:
    return state;
  }
};

export default reducer;
