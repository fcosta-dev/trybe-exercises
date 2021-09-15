import React, { useContext } from 'react';

import { Context } from '../context/RedditContext';

const LastUpdate = () => {
  const { selectedSubreddit, postsBySubreddit } = useContext(Context);
  const { lastUpdated } = postsBySubreddit[selectedSubreddit];

  if (!lastUpdated) return null;

  return (
    <span>
      {`Last updated at ${new Date(lastUpdated).toLocaleTimeString()}.`}
    </span>
  );
};

export default LastUpdate;
