import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import RecipeContext from '../context/RecipeContext';

function Detalhes() {
  const { meals } = useContext(RecipeContext);
  const history = useHistory();

  const renderDrink = () => (
    <h1>{meals[0].strDrink}</h1>
  );

  const renderFood = () => (
    <h1>{meals[0].strMeal}</h1>
  );

  const render = () => {
    const value = history.location.pathname;
    if (value.includes('comidas')) {
      return renderFood();
    }
    if (value.includes('bebidas')) {
      return renderDrink();
    }
  };

  return (
    render()
  );
}

export default Detalhes;
