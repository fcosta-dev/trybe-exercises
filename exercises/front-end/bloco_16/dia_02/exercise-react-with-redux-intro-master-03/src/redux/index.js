import { createStore, combineReducers } from 'redux';
import carReducer from './carReducer';
import trafficReducer from './trafficReducer';

// Combinando os dois reducers
const reducer = combineReducers({
  carReducer,
  trafficReducer});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
