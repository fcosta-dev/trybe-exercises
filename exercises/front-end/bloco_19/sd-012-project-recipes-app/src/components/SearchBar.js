import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import RecipeContext from '../context/RecipeContext';

import '../styles/SearchBar.css';

function SearchBar(props) {
  const { title } = props;
  const { setSearchType,
    setSearchInputValue,
    searchInputValue,
    searchType,
    searchBarRequestDrink,
    searchBarRequestFood,
  } = useContext(RecipeContext);

  const requestAPI = (value) => {
    if (value === 'Comidas') {
      searchBarRequestFood(searchType, searchInputValue);
    }
    if (value === 'Bebidas') {
      searchBarRequestDrink(searchType, searchInputValue);
    }
  };

  return (
    <div>
      <input
        type="text"
        data-testid="search-input"
        value={ searchInputValue }
        onChange={ ({ target }) => setSearchInputValue(target.value) }
      />
      <label htmlFor="ingrediente">
        <input
          type="radio"
          name="searchRadio"
          id="ingrediente"
          data-testid="ingredient-search-radio"
          value="ingrediente"
          checked
          onChange={ ({ target }) => setSearchType(target.value) }
        />
        ingrediente
      </label>
      <label htmlFor="nome">
        <input
          type="radio"
          name="searchRadio"
          id="nome"
          data-testid="name-search-radio"
          value="nome"
          onChange={ ({ target }) => setSearchType(target.value) }
        />
        nome
      </label>
      <label htmlFor="primeira-letra">
        <input
          type="radio"
          name="searchRadio"
          id="primeira-letra"
          data-testid="first-letter-search-radio"
          value="primeira letra"
          onChange={ ({ target }) => setSearchType(target.value) }
        />
        primeira letra
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ () => requestAPI(title) }
      >
        Buscar
      </button>
      {console.log(props)}
      ;
    </div>
  );
}

SearchBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SearchBar;
