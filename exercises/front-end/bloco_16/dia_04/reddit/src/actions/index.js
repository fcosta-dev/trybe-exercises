// src/actions/index.js
import { getPostsBySubreddit } from '../services/redditAPI';

export const REFRESH_SUBREDDIT = 'REFRESH_SUBREDDIT';
export const RECEIVE_POSTS_FAILURE = 'RECEIVE_POSTS_FAILURE';
export const RECEIVE_POSTS_SUCCESS = 'RECEIVE_POSTS_SUCCESS';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';

export const selectSubreddit = (subreddit) => ({
  type: SELECT_SUBREDDIT,
  subreddit
});

export const refreshSubreddit = (subreddit) => ({
  type: REFRESH_SUBREDDIT,
  subreddit
});

export const requestPosts = (subreddit) => ({
  type: REQUEST_POSTS,
  subreddit
});

const receivePostsSuccess = (subreddit, json) => ({
  type: RECEIVE_POSTS_SUCCESS,
  posts: json.data.children.map((child) => child.data),
  receivedAt: Date.now(),
  subreddit
});

const receivePostsFailure = (subreddit, error) => ({
  type: RECEIVE_POSTS_FAILURE,
  error,
  subreddit
});

function fetchPosts(subreddit) {
  return (dispatch) => {
    dispatch(requestPosts(subreddit));

    return getPostsBySubreddit(subreddit)
      .then(
        (posts) => dispatch(receivePostsSuccess(subreddit, posts)),
        (error) => dispatch(receivePostsFailure(subreddit, error.message)),
      );
  };
}

const shouldFetchPosts = (state, subreddit) => {
  const posts = state.postsBySubreddit[subreddit];

  if (!posts.items) return true;
  if (posts.isFetching) return false;
  return posts.shouldRefreshSubreddit;
};

export function fetchPostsIfNeeded(subreddit) {
  return (dispatch, getState) => (
    shouldFetchPosts(getState(), subreddit) && dispatch(fetchPosts(subreddit))
  );
}
