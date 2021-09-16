import React, { useEffect, useState } from 'react';

function ExplorarComidasIngredientes() {
  const [ingredientes, setIngredientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const TWELVE_INGREDIENTS = 12;

  const fetchIngredients = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    const result = await response.json();
    const finalResults = result.meals.filter((elem, index) => {
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
      {!loading && ingredientes.map((elem, index) => (
        <div key={ elem.idIngredient } data-testid={ `${index}-ingredient-card` }>
          <h1 data-testid={ `${index}-card-name` }>
            {elem.strIngredient}
          </h1>
          <img data-testid={ `${index}-card-img` } src={ `https://www.themealdb.com/images/ingredients/${elem.strIngredient}.png` } alt={ elem.strIngredient } />
        </div>
      ))}
      Olá ingredientes comidas
    </div>
  );
}

export default ExplorarComidasIngredientes;
