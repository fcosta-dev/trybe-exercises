import { combineReducers } from 'redux';
import reducer from './reducer';

// Crio a rootReducer com a combineReducers preparando para adicionar novas reducers
// Neste atual momento tem apenas um reducer
const rootReducer = combineReducers({ reducer });

export default rootReducer;
