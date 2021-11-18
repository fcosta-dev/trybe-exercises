const express = require('express');
const app = express();

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

// DETALHE: Se colocamos a rota /recipes/search depois da rota /recipes/:id , o Express vai entender que a palavra search como um id e vai chamar a callback da rota /recipes/:id . Tenha atenção a esse detalhe ao utilizar rotas similares na definição da sua API.
app.get('/recipes/search', function (req, res) {
  // Utilizamos req.query e desestruturamos o atributo nome, para na sequência usar como parâmetro de busca.
  const { name } = req.query;
  // A função filter , para filtrar os receitas que contenham ( .includes ) o nome recebido através da query string
  const filteredRecipes = recipes.filter((r) => r.name.includes(name));
  // E no final devolvemos a lista de receitas obtidas por esse filtro.
  res.status(200).json(filteredRecipes);
});

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
