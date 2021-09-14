import React, { useContext } from 'react';
import RecipeContext from '../context/RecipeContext';

function SearchBar() {
  const { setSearchType,
    setSearchInputValue,
    searchInputValue,
    searchType,
    searchBarRequest } = useContext(RecipeContext);
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
        onClick={ () => searchBarRequest(searchType, searchInputValue) }
      >
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;
