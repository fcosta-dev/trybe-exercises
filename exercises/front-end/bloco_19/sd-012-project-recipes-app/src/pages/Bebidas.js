import React, { useContext, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipesList from '../components/RecipesList';
import RecipeContext from '../context/RecipeContext';

function Bebidas() {
  const { directRequestDrink, isDrinkLoading } = useContext(RecipeContext);

  useEffect(() => {
    directRequestDrink();
  }, []);

  return (
    <div>
      <Header title="Bebidas" />
      { !isDrinkLoading ? <RecipesList /> : <p>Carregando</p> }
      <Footer />
    </div>
  );
}

export default Bebidas;
