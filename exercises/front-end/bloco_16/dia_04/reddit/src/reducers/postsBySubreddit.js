// src/reducers/postsBySubreddit.js

import {
  REFRESH_SUBREDDIT,
  RECEIVE_POSTS_FAILURE,
  RECEIVE_POSTS_SUCCESS,
  REQUEST_POSTS,
} from '../actions';

const INITIAL_POSTS_STATE = {
  shouldRefreshSubreddit: false,
  isFetching: false,
};

const INITIAL_POSTS_BY_SUBREDDIT_STATE = {
  frontend: { ...INITIAL_POSTS_STATE },
  reactjs: { ...INITIAL_POSTS_STATE },
};

const posts = (state = INITIAL_POSTS_STATE, action) => {
  switch (action.type) {
    case REFRESH_SUBREDDIT:
      return {
        ...state,
        shouldRefreshSubreddit: true,
      };
    case REQUEST_POSTS:
      return {
        ...state,
        shouldRefreshSubreddit: false,
        isFetching: true,
      };
    case RECEIVE_POSTS_SUCCESS:
      return {
        ...state,
        shouldRefreshSubreddit: false,
        items: action.posts,
        isFetching: false,
        lastUpdated: action.receivedAt,
      };
    case RECEIVE_POSTS_FAILURE:
      return {
        ...state,
        shouldRefreshSubreddit: false,
        error: action.error,
        items: [],
        isFetching: false,
      };
    default:
      return state;
  }
};

const postsBySubreddit = (state = INITIAL_POSTS_BY_SUBREDDIT_STATE, action) => {
  switch (action.type) {
    case REFRESH_SUBREDDIT:
    case RECEIVE_POSTS_SUCCESS:
    case RECEIVE_POSTS_FAILURE:
    case REQUEST_POSTS:
      return {
        ...state,
        [action.subreddit]: posts(state[action.subreddit], action),
      };
    default:
      return state;
  }
};

export default postsBySubreddit;
