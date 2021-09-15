import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import RecipeContext from '../context/RecipeContext';

function Detalhes() {
  const { setShouldRedirect } = useContext(RecipeContext);
  const [objDetail, setObjDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const requestByID = async () => {
    const value = history.location.pathname;
    let response = [];
    const id = value.split('s/')[1];
    if (value.includes('comidas')) {
      response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const responseJson = await response.json();
      setObjDetail(responseJson.meals);
    }
    if (value.includes('bebidas')) {
      response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const responseJson = await response.json();
      setObjDetail(responseJson.drinks);
    }
    setLoading(false);
  };

  useEffect(() => {
    requestByID();
    setShouldRedirect(false);
  }, []);

  const renderDrink = () => (
    <h1>{objDetail[0].strDrink}</h1>
  );

  const renderFood = () => (
    <h1>{objDetail[0].strMeal}</h1>
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
      {loading ? '' : render()}
    </div>
  );
}

export default Detalhes;
