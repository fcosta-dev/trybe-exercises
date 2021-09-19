import React, { useContext } from 'react';
import Card from './Card';
import RecipeContext from '../context/RecipeContext';

function RecipesListArea() {
  const MAX_ITEMS = 12;
  const { meals, filterByArea } = useContext(RecipeContext);

  const render = () => {
    let result;
    if (filterByArea !== 'All') {
      result = meals.filter((elem) => elem.strArea === filterByArea);
    } else {
      result = meals;
    }
    result.map((elem, index) => {
      if (index < MAX_ITEMS) {
        return <Card key={ index } card={ elem } index={ index } />;
      }
      return '';
    });
    return result;
  };

  return (
    <div>
      { render() }
    </div>
  );
}

export default RecipesListArea;
