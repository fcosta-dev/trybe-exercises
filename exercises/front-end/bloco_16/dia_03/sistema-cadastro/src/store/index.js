import { createStore } from 'redux';
import rootReducer from '../reducers';

// Criando a store com o rootReducer
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
