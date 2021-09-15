import React, { useContext, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipesList from '../components/RecipesList';
import RecipeContext from '../context/RecipeContext';

function Comidas() {
  const { isDrinkLoading, directRequestFood } = useContext(RecipeContext);
  useEffect(() => {
    directRequestFood();
  }, []);

  return (
    <div>
      <Header title="Comidas" />
      {!isDrinkLoading ? <RecipesList /> : <p>Carregando</p>}
      <Footer />
    </div>
  );
}

export default Comidas;
