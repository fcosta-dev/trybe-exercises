// Faço a importação das actions criadas
import { SET_PROFESSIONAL_VALUE, SET_PERSONAL_VALUE } from '../action/action';

// State Inicial
const initialState = {
  // Composição do primeiro State de informações pessoais
  personalInputs: {
    nome: '',
    email: '',
    cpf: '',
    endereco: '',
    cidade: '',
    estado: '',
  },
  // Composição do segundo State de informações profissionais
  professionalInputs: {
    curriculo: '',
    cargo: '',
    descricao: '',
  },
};

// Criação do reducer com o state inicial e a action
const reducer = (state = initialState, action) => {
  // Faz um switch para verificar qual action está sendo chamada pelo reducer
  switch (action.type) {
  // Se for a action SET_PERSONAL_VALUE então retorna abaixo
  case SET_PERSONAL_VALUE:
    return { ...state, personalInputs: action.payload };
  // Se for a action SET_PROFESSIONAL_VALUE então retorna abaixo
  case SET_PROFESSIONAL_VALUE:
    return { ...state, professionalInputs: action.payload };
  // Se não for nenhuma, apenas retorna o state
  default:
    return state;
  }
};

export default reducer;
