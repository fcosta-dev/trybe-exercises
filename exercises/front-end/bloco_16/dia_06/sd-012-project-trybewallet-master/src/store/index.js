// Importa a applyMiddleware que é para o thunk
import { applyMiddleware, createStore } from 'redux';

// Importa o thunk para ser utilizado para interceptar a API
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

// Cria a store pegando o rootReducer, configurando as extensões e já aplicando o applyMiddleware com o thunk
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
