//importe o método applyMiddleware 
import { createStore } from 'redux';
//importe o redux-thunk
import reducer from '../reducers';

//aplique o middleware
const store = createStore(reducer);

export default store;
