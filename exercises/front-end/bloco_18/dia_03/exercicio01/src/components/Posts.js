import React, { useContext } from 'react';

import { Context } from '../context/RedditContext';

const Posts = () => {
  const { posts } = useContext(Context);

  return (
    <ul>
      {posts.map(({ id, title }) => <li key={id}>{title}</li>)}
    </ul>
  );
};

export default Posts;

