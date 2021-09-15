import React, { useContext, useEffect } from 'react';

import LastUpdate from './components/LastUpdate';
import Posts from './components/Posts';
import RefreshButton from './components/RefreshButton';
import Selector from './components/Selector';
import { Context } from './context/RedditContext';

const App = () => {
  const {
    fetchPosts,
    selectedSubreddit,
    postsBySubreddit,
    isFetching,
  } = useContext(Context);

  useEffect(() => {
    fetchPosts();
  }, []);

  const { items: posts = [] } = postsBySubreddit[selectedSubreddit];
  const isEmpty = posts.length === 0;

  return (
    <div>
      <Selector />
      <div>
        <LastUpdate />
        <RefreshButton />
      </div>
      {isFetching && <h2>Loading...</h2>}
      {!isFetching && isEmpty && <h2>Empty.</h2>}
      {!isFetching && !isEmpty && <Posts />}
    </div>
  );
};

export default App;

