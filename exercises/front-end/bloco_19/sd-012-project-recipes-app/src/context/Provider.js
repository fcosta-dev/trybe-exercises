import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipeContext from './RecipeContext';

function Provider({ children }) {
  const [searchType, setSearchType] = useState('ingrediente');
  const [searchInputValue, setSearchInputValue] = useState('');

  const searchBarRequest = async (type, inputvalue) => {
    let response = '';
    if (type === 'ingrediente') {
      response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputvalue}`);
    }
    if (type === 'nome') {
      response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputvalue}`);
    }
    if (type === 'primeira letra') {
      if (inputvalue.length !== 1) {
        return alert('Sua busca deve conter somente 1 (um) caracter');
      }
      response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${inputvalue}`);
    }
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson;
  };

  const context = {
    setSearchType,
    searchType,
    setSearchInputValue,
    searchInputValue,
    searchBarRequest,
  };

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
