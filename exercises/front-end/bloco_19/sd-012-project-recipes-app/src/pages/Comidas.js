import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipesList from '../components/RecipesList';

function Comidas() {
  return (
    <div>
      <Header title="Comidas" />
      <RecipesList />
      <Footer />
    </div>
  );
}

export default Comidas;
