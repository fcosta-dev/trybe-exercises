import React from 'react';
import CardFeitas from '../components/CardFeitas';

function ReceitasFeitas() {
  const verify = () => {
    if (localStorage.getItem('doneRecipes') !== null) {
      const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
      return (
        doneRecipes.map((elem, index) => (
          <CardFeitas key={ index } objDetail={ elem } index={ index } />
        ))
      );
    }
    return <span>Você não tem receitas feitas</span>;
  };

  return (
    <div>
      <div>
        <button
          type="button"
          data-testid="filter-by-all-btn"
        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
        >
          Food
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
        >
          Drinks
        </button>
      </div>
      {verify()}
    </div>
  );
}

export default ReceitasFeitas;