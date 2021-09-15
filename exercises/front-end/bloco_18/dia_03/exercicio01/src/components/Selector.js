import React, { useContext } from 'react';

import { Context } from '../context/RedditContext';

const renderOptions = (options) => (
  options.map((option) => (
    <option
      value={option}
      key={option}
    >
      {option}
    </option>
  ))
);

const Selector = () => {
  const {
    selectedSubreddit,
    availableSubreddits,
    selectSubreddit,
  } = useContext(Context);

  return (
    <span>
      <h1>{`Selected: ${selectedSubreddit}`}</h1>
      <select
        onChange={(e) => selectSubreddit(e.target.value)}
        value={selectedSubreddit}
      >
        {renderOptions(availableSubreddits)}
      </select>
    </span>
  );
};

export default Selector;
