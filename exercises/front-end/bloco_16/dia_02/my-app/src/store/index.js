import { createStore, combineReducers } from 'redux';
import rootReducer from '../reducers';

// A função createStore sempre receberá como parâmetro um rootReducer. Portanto, deve-se criar um rootReducer no arquivo src/reducers/index.js.
// Para facilitar a utilização do Redux, configuro a extensão Dev Tools.
const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

export default store;
