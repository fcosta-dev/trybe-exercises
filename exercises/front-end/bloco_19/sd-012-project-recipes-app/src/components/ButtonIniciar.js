import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

function ButtonIniciar({ id, objDetail }) {
  const history = useHistory();

  const iniciarReceita = 'Iniciar Receita';

  const [buttonName, setButtonName] = useState(iniciarReceita);

  const Ingredients = () => {
    const ingredientes = Object.entries(objDetail[0]);

    const filtering = ingredientes.filter((element) => (
      element[0].includes('strIngredient') && element[1] !== null && element[1] !== ''));

    const results = filtering.map((elem) => elem[1]);
    return results;
  };

  const value = history.location.pathname;

  const setLocalStoragesIngredients = () => {
    if (localStorage.getItem('inProgressRecipes') !== null) {
      const sem = localStorage.getItem('inProgressRecipes');
      const inProgress = JSON.parse(sem);
      if (value.includes('comidas')) {
        localStorage.setItem('inProgressRecipes', JSON.stringify({
          ...inProgress,
          meals: {
            ...inProgress.meals,
            [id]: Ingredients(),
          },
        }));
      }
      if (value.includes('bebidas')) {
        localStorage.setItem('inProgressRecipes', JSON.stringify({
          ...inProgress,
          cocktails: {
            ...inProgress.cocktails,
            [id]: Ingredients(),
          },
        }));
      }
    } else {
      if (value.includes('comidas')) {
        localStorage.setItem('inProgressRecipes', JSON.stringify({
          meals: {
            [id]: Ingredients(),
          },
          cocktails: {},
        }));
      }
      if (value.includes('bebidas')) {
        localStorage.setItem('inProgressRecipes', JSON.stringify({
          cocktails: {
            [id]: Ingredients(),
          },
          meals: {},
        }));
      }
    }
  };

  const verifyId = () => {
    let newArray = [];
    console.log(localStorage.getItem('inProgressRecipes'));
    if (localStorage.getItem('inProgressRecipes') !== null) {
      const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
      if (value.includes('comidas')) {
        const novaVariavelFood = Object.keys(inProgress.meals);
        newArray = [...novaVariavelFood];
      }
      if (value.includes('bebidas')) {
        const novaVariavelFood = Object.keys(inProgress.cocktails);
        newArray = [...novaVariavelFood];
        console.log(newArray);
      }
    }
    return newArray;
  };

  const handleRedirect = () => {
    if (value.includes('comidas')) {
      history.push(`/comidas/${id}/in-progress`);
    }
    if (value.includes('bebidas')) {
      history.push(`/bebidas/${id}/in-progress`);
    }
  };

  useEffect(() => {
    setButtonName(verifyId().some((elem) => elem === id)
      ? 'Continuar Receita' : iniciarReceita);
  }, []);

  return (
    <div>
      <button
        className="start-recipe-btn"
        type="button"
        data-testid="start-recipe-btn"
        onClick={ () => {
          setLocalStoragesIngredients();
          setButtonName(verifyId().some((elem) => elem === id)
            ? 'Continuar Receita' : iniciarReceita);
          handleRedirect();
        } }
      >
        {buttonName}
      </button>
    </div>
  );
}

ButtonIniciar.propTypes = {
  id: PropTypes.string.isRequired,
  objDetail: PropTypes.shape(
    PropTypes.any,
  ).isRequired,
};

export default ButtonIniciar;
