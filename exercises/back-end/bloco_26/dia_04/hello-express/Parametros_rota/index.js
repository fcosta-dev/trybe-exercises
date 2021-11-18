const express = require('express');
const app = express();

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/recipes', function (req, res) {
  res.json(recipes);
});

// Qualquer rota que chegar nesse formato, independente do id ser um número ou string vai cair nessa segunda rota
app.get('/recipes/:id', function (req, res) {
  // Pega o id pelo params
  const { id } = req.params;
  // Guarda na variável 'recipe' informações do id que está sendo procurado conforme params acima
  const recipe = recipes.find((r) => r.id === parseInt(id));

  // Se a variável recipe estiver nula, ou seja não foi encontrado pelo find, então retorna que Recipe não foi encontrado
  // Isso serve para indicar para o express que ele deve quebrar o fluxo
  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  // Ou, retorna informações do recupe
  res.status(200).json(recipe);
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
