import React from 'react';
import { string, shape, number } from 'prop-types';
import { useHistory } from 'react-router-dom';
import '../styles/Card.css';

function Card({ index, card }) {
  const history = useHistory();

  const renderDrink = () => {
    const { strDrink, strDrinkThumb } = card;

    return (
      <div>
        <h1 className="food-title" data-testid={ `${index}-card-name` }>{strDrink}</h1>
        <img
          className="food-image"
          data-testid={ `${index}-card-img` }
          src={ strDrinkThumb }
          alt={ strDrink }
        />
      </div>
    );
  };

  const renderFood = () => {
    const { strMeal, strMealThumb } = card;
    return (
      <div>
        <h1 className="food-title" data-testid={ `${index}-card-name` }>{strMeal}</h1>
        <img
          className="food-image"
          data-testid={ `${index}-card-img` }
          src={ strMealThumb }
          alt={ strMeal }
        />
      </div>
    );
  };

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
    <div data-testid={ `${index}-recipe-card` }>
      {render()}
    </div>
  );
}

Card.propTypes = {
  index: number.isRequired,
  card: shape({
    strDrink: string,
    strDrinkThumb: string,
    strMeal: string,
    strMealThumb: string,
  }).isRequired,
};

export default Card;
