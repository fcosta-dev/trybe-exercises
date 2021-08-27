// O combineReducers irá ajudar a centralizar em uma variável(rootReducer) todos os reducers a serem utilizados no app
import { combineReducers } from 'redux';
// Importando os reducers que serão utilizados no app para dar start nas actions 
import user from './user';
import wallet from './wallet';

// Configurando o root reducer para receber os reducers abaixo
// Reducer user: responsável por tratar as informações da pessoa usuária
// Reducer wallet: responsável por tratar as informações relacionadas as despesas
const rootReducer = combineReducers({
  user,
  wallet,
});

export default rootReducer;
