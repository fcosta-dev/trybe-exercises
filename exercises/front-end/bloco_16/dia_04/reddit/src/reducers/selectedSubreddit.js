// src/reducers/selectedSubreddit.js

import {
  SELECT_SUBREDDIT,
} from '../actions';

const selectedSubreddit = (state = 'reactjs', action) => {
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.subreddit;
    default:
      return state;
  }
};

export default selectedSubreddit;
