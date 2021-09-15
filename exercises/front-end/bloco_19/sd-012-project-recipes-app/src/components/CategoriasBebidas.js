import React, { useContext } from 'react';
import RecipeContext from '../context/RecipeContext';

function CategoriasFood() {
  const { drinkCategory, setMeals,
    setIsDrinkLoading, directRequestDrink } = useContext(RecipeContext);
  console.log(setMeals);

  const MIN_ELEMN = 5;

  const fetchCategory = async (value) => {
    setIsDrinkLoading(true);
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${value}`);
    const result = await response.json();
    setMeals(result.drinks);
    setIsDrinkLoading(false);
  };

  return (
    <div>
      <button
        type="button"
        onClick={ () => directRequestDrink() }
      >
        All
      </button>
      {
        drinkCategory.map((elem, index) => {
          if (index < MIN_ELEMN) {
            return (
              <button
                type="button"
                data-testid={ `${elem.strCategory}-category-filter` }
                value={ elem.strCategory }
                onClick={ ({ target }) => fetchCategory(target.value) }
                key={ elem.strCategory }
              >
                {elem.strCategory}
              </button>);
          }
          return '';
        })
      }
    </div>
  );
}

export default CategoriasFood;
