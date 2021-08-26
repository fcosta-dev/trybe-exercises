// src/reducers/index.js

import { combineReducers } from 'redux';
import postsBySubreddit from './postsBySubreddit';
import selectedSubreddit from './selectedSubreddit';

const rootReducer = combineReducers({
  postsBySubreddit,
  selectedSubreddit
});

export default rootReducer;
