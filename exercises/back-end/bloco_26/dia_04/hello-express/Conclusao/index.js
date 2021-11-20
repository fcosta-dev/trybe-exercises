const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const recipes = [
  { id: 1, name: 'Lasanha', preco: 40.0, tempoDePreparo: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', preco: 35.0, tempoDePreparo: 25 },
  { id: 3, name: 'Macarrão com molho branco', preco: 35.0, tempoDePreparo: 25 },
];

// ************************
// O get pega os objetos
// ************************
app.get('/recipes', function (req, res) {
  // Endpoint que retorna a lista de receitas na rota /recipes quando a requisição for do tipo GET
  // A lista de receitas virá do array "recipes" definido na linha 7
  res.status(200).json(recipes);
});

app.get('/recipes/pesquisar', function (req, res) {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.preco < parseInt(maxPrice));
  res.status(200).json(filteredRecipes);
});

// Parâmetros de rota, que no Express, podem ser definidos da seguinte forma: 
// /<rota>/<:parametro> onde :parametro vai servir para qualquer valor que vier na URL com aquele prefixo específico.
app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));
  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

// ************************
// O post adiciona objetos
// ************************
app.post('/recipes', function (req, res) {
  // Desestruturamos os atributos id , price e preco do objeto req.body
  const { id, name, price } = req.body;
  // Usamos esses valores para inserir um novo objeto dentro da array "recipes" 
  recipes.push({ id, name, price});
  // Retornamos uma resposta com o status 201, e um json com o atributo message
  res.status(201).json({ message: 'Recipe created successfully!'});
});

// ************************
// O put edita objetos
// ************************
app.put('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});

// ************************
// O delete deleta objetos
// ************************
app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

app.all('*', function (req, res) {
    return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
