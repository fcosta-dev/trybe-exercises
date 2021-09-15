import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipesList from '../components/RecipesList';

function Bebidas() {
  return (
    <div>
      <Header title="Bebidas" />
      <RecipesList />
      <Footer />
    </div>
  );
}

export default Bebidas;
