import { createStore } from 'redux';
import rootReducer from '../reducers';

// Criando a store com o rootReducer
const store = createStore(rootReducer);

export default store;
