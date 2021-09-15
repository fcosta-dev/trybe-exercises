import React, { useContext } from 'react';
import RecipeContext from '../context/RecipeContext';

function CategoriasFood() {
  const { foodCategory } = useContext(RecipeContext);
  const MIN_ELEMN = 5;

  return (
    <div>
      <button type="button">All</button>
      {foodCategory.map((elem, index) => {
        if (index < MIN_ELEMN) {
          return (
            <button
              data-testid={ `${elem.strCategory}-category-filter` }
              type="button"
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
