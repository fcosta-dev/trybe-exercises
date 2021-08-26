//importe o método applyMiddleware 
import { createStore, applyMiddleware } from 'redux';
//importe o redux-thunk
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

//aplique o middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
