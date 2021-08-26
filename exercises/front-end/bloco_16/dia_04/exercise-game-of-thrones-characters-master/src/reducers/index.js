// src/reducers/index.js
import { combineReducers } from 'redux';
import personagemReducer from './personagemReducer';

const rootReducer = combineReducers({
  personagemReducer
});

export default rootReducer;
