import React from 'react';
import Header from '../components/Header';
import RecipesList from '../components/RecipesList';

function Comidas() {
  return (
    <div>
      <Header title="Comidas" />
      <RecipesList />
    </div>
  );
}

export default Comidas;
