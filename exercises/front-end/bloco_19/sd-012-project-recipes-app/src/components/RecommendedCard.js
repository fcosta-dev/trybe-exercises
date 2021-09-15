import React from 'react';
import { shape, number, string } from 'prop-types';
import { Link, useHistory } from 'react-router-dom';

import '../styles/RecommendedCard.css';

function RecommendedCard({ index, card }) {
  const history = useHistory();

  const renderDrink = () => {
    const { strDrink, strDrinkThumb, idDrink } = card;

    return (
      <Link to={ `/bebidas/${idDrink}` }>
        <div
          className="recommended-card"
          data-testid={ `${index}-recomendation-card` }
        >
          <h1 data-testid={ `${index}-recomendation-title` }>{strDrink}</h1>
          <img
            className="recommended-image"
            data-testid={ `${index}-card-img` }
            src={ strDrinkThumb }
            alt={ strDrink }
          />
        </div>
      </Link>
    );
  };

  const renderFood = () => {
    const { strMeal, strMealThumb, idMeal } = card;
    return (
      <Link to={ `/comidas/${idMeal}` }>
        <div
          className="recommended-card"
          data-testid={ `${index}-recomendation-card` }
        >
          <h1
            data-testid={ `${index}-recomendation-title` }
            className="food-title"
          >
            {strMeal}
          </h1>
          <img
            className="recommended-image"
            data-testid={ `${index}-card-img` }
            src={ strMealThumb }
            alt={ strMeal }
          />
        </div>
      </Link>
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

RecommendedCard.propTypes = {
  index: number.isRequired,
  card: shape({
    strDrink: string,
    strDrinkThumb: string,
    strMeal: string,
    strMealThumb: string,
    idMeal: string,
    idDrink: string,
  }).isRequired,
};

export default RecommendedCard;
