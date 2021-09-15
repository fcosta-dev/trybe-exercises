import React, { useContext } from 'react';
import RecipeContext from '../context/RecipeContext';

function CategoriasFood() {
  const { drinkCategory } = useContext(RecipeContext);
  const MIN_ELEMN = 5;

  return (
    <div>
      <button type="button">All</button>
      {drinkCategory.map((elem, index) => {
        if (index < MIN_ELEMN) {
          return (
            <button
              type="button"
              data-testid={ `${elem.strCategory}-category-filter` }
            >
              {elem.strCategory}
            </button>);
        }
        return '';
      })}
      <p>Olá</p>
    </div>
  );
}

export default CategoriasFood;
