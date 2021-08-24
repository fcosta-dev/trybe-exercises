import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Faz o importe do rootReducer
import rootReducer from '../reducer';

// Cria a store com o rootReducer e a configuração do devtools
const store = createStore(rootReducer, composeWithDevTools());

export default store;
