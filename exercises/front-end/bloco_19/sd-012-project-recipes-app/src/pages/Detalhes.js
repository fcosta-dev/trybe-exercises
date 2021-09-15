import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import RecipeContext from '../context/RecipeContext';
import '../styles/Detalhes.css';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import Loading from '../components/Loading';
import RecommendedList from '../components/RecommendedList';

function Detalhes() {
  const { setShouldRedirect,
    recommendedFood, recommendedDrink, setRecommendedFood,
    setRecommendedDrink } = useContext(RecipeContext);

  const [objDetail, setObjDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const requestRecommendedFood = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const result = await response.json();
    setRecommendedFood(result.meals);
  };

  const requestRecommendedDrink = async () => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const result = await response.json();
    setRecommendedDrink(result.drinks);
  };

  const requestByID = async () => {
    const TWO_SECONDS = 2000;
    const value = history.location.pathname;
    let response = [];
    const id = value.split('s/')[1];

    if (value.includes('bebidas')) {
      response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const responseJson = await response.json();
      await setObjDetail(responseJson.drinks);
      requestRecommendedDrink();
    }
    if (value.includes('comidas')) {
      response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const responseJson = await response.json();
      await setObjDetail(responseJson.meals);
      requestRecommendedFood();
    }

    setTimeout(() => {
      setLoading(false);
    }, TWO_SECONDS);
  };

  const getIngredients = () => {
    const ingredientes = Object.entries(objDetail[0]);

    const measure = ingredientes.filter((elem) => (
      elem[0].includes('strMeasure') && elem[1] !== null && elem[1] !== ''
    ));

    const filtering = ingredientes.filter((element) => (
      element[0].includes('strIngredient') && element[1] !== null && element[1] !== ''
    ));

    const results = filtering.map((elem, index) => (
      <li
        key={ elem[1] }
        data-testid={ `${index}-ingredient-name-and-measure` }
      >
        {elem[1]}
        <span>{measure[index] === undefined ? '' : measure[index][1]}</span>
      </li>
    ));

    console.log(ingredientes);
    return results;
  };

  const handleYoutube = () => {
    const https = objDetail[0].strYoutube.split('https://www.youtube.com/watch?v=');
    const newHttps = `https://www.youtube.com/embed/${https[1]}`;
    return newHttps;
  };

  useEffect(() => {
    requestByID();
    setShouldRedirect(false);
  }, [history.location.pathname]);

  const renderDrink = () => (
    <div className="details">
      <h1
        data-testid="recipe-category"
      >
        {`${objDetail[0].strCategory} (${objDetail[0].strAlcoholic})`}
      </h1>
      <h2 data-testid="recipe-title">{objDetail[0].strDrink}</h2>
      <img
        data-testid="recipe-photo"
        className="food-image"
        src={ objDetail[0].strDrinkThumb }
        alt={ objDetail[0].strDrink }
      />
      <div>
        <input
          type="image"
          data-testid="share-btn"
          src={ shareIcon }
          alt={ objDetail[0].strDrink }
        />
        <input
          type="image"
          data-testid="favorite-btn"
          src={ whiteHeartIcon }
          alt={ objDetail[0].strDrink }
        />
      </div>
      <ol className="ingredient-list">
        { getIngredients() }
      </ol>
      <p data-testid="instructions">{objDetail[0].strInstructions}</p>
      <RecommendedList value={ recommendedDrink } />
      <button
        className="start-recipe-btn"
        type="button"
        data-testid="start-recipe-btn"
      >
        Iniciar Receita
      </button>
    </div>
  );

  const renderFood = () => (
    <div className="details">
      <h1 data-testid="recipe-category">{objDetail[0].strCategory}</h1>
      <h2 data-testid="recipe-title">{objDetail[0].strMeal}</h2>
      <img
        data-testid="recipe-photo"
        src={ objDetail[0].strMealThumb }
        alt={ objDetail[0].strMeal }
      />
      <div>
        <input
          type="image"
          data-testid="share-btn"
          src={ shareIcon }
          alt={ objDetail[0].strMeal }
        />
        <input
          type="image"
          data-testid="favorite-btn"
          src={ whiteHeartIcon }
          alt={ objDetail[0].strMeal }
        />
      </div>
      <ol className="ingredient-list">
        { getIngredients() }
      </ol>
      <iframe
        data-testid="video"
        width="300px"
        height="200px"
        src={ handleYoutube() }
        title="YouTube video player"
      />
      <p data-testid="instructions">{objDetail[0].strInstructions}</p>
      <RecommendedList value={ recommendedFood } />
      <button
        className="start-recipe-btn"
        type="button"
        data-testid="start-recipe-btn"
      >
        Iniciar Receita
      </button>
    </div>
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

  if (loading) return <p>Carregando</p>;
  return (
    <div>
      {loading ? <Loading /> : render()}
    </div>
  );
}

export default Detalhes;
