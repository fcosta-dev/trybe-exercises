import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RecipeContext from './RecipeContext';

function Provider({ children }) {
  const [meals, setMeals] = useState([]);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [searchType, setSearchType] = useState('ingrediente');
  const [searchInputValue, setSearchInputValue] = useState('');

  const searchBarRequestFood = async (type, inputvalue) => {
    try {
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
      if (responseJson.meals === null) {
        throw new Error('Nao existem receitas');
      }
      setMeals(responseJson.meals);
    } catch (error) {
      console.log(error.message);
      alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
      return error;
    }
  };

  const searchBarRequestDrink = async (type, inputvalue) => {
    try {
      let response = '';
      if (type === 'ingrediente') {
        response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${inputvalue}`);
      }
      if (type === 'nome') {
        response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputvalue}`);
      }
      if (type === 'primeira letra') {
        if (inputvalue.length !== 1) {
          return alert('Sua busca deve conter somente 1 (um) caracter');
        }
        response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${inputvalue}`);
      }
      const responseJson = await response.json();
      if (responseJson.drinks === null) {
        throw new Error('Nao existem receitas');
      }
      setMeals(responseJson.drinks);
    } catch (error) {
      alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
      return error;
    }
  };

  useEffect(() => {
    setShouldRedirect(true);
  }, [meals]);

  const context = {
    setSearchType,
    searchType,
    setSearchInputValue,
    searchInputValue,
    searchBarRequestDrink,
    searchBarRequestFood,
    meals,
    shouldRedirect,
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
