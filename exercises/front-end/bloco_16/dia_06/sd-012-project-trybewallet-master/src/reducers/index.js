import { combineReducers } from 'redux';
// Importando os reducers que serão utilizados no app para dar start nas actions 
import user from './user';
import wallet from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
const rootReducer = combineReducers({ user, wallet });

export default rootReducer;
