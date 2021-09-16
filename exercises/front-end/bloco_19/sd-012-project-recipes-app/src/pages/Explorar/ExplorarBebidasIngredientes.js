import React, { useEffect, useState } from 'react';

function ExplorarBebidasIngredientes() {
  const [ingredientes, setIngredientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const TWELVE_INGREDIENTS = 12;

  const fetchIngredients = async () => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
    const result = await response.json();
    const finalResults = result.drinks.filter((elem, index) => {
      if (index < TWELVE_INGREDIENTS) {
        return elem;
      }
      return '';
    });
    setIngredientes(finalResults);
    setLoading(false);
  };

  useEffect(() => {
    fetchIngredients();
  }, []);

  return (
    <div>
      {console.log(ingredientes)}
      {!loading && ingredientes.map((elem, index) => (
        <div
          key={ `${elem.idIngredient1}, ${index} ` }
          data-testid={ `${index}-ingredient-card` }
        >
          <h1 data-testid={ `${index}-card-name` }>
            {elem.strIngredient1}
          </h1>
          <img data-testid={ `${index}-card-img` } src={ `https://www.themealdb.com/images/ingredients/${elem.strIngredient1}.png` } alt={ elem.strIngredient1 } />
        </div>
      ))}
    </div>
  );
}

export default ExplorarBebidasIngredientes;
