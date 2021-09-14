import React from 'react';
import PropTypes from 'prop-types';
import RecipeContext from './RecipeContext';

function Provider({ children }) {
  const context = {};

  return (
    <RecipeContext.Provider value={ context }>
      {children}
    </RecipeContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Provider;
