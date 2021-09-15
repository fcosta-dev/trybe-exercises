import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

function Card({ index, card }) {
  const history = useHistory();

  const renderDrink = () => {
    const { strDrink, strDrinkThumb } = card;
    return (
      <div>
        <h1 data-testid={ `${index}-card-name` }>{strDrink}</h1>
        <img data-testid={ `${index}-card-img` } src={ strDrinkThumb } alt={ strDrink } />
      </div>
    );
  };

  const renderFood = () => {
    const { strMeal, strMealThumb } = card;
    return (
      <div>
        <h1 data-testid={ `${index}-card-name` }>{strMeal}</h1>
        <img data-testid={ `${index}-card-img` } src={ strMealThumb } alt={ strMeal } />
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
  index: PropTypes.number.isRequired,
  card: PropTypes.shape({
    strDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
  }).isRequired,
};

export default Card;
