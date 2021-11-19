const express = require('express');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json())

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

// ******************************
// Recebendo dados no body da requisição.
// ******************************
// Agora vamos implementar nossa rota que vai receber dados no body da requisição.
// Perceba, que repetimos a rota /recipes , só que agora usando o método .post .
app.post('/recipes', function (req, res) {
  // desestruturamos os atributos id , price e preco do objeto req.body
  const { id, name, price } = req.body;
  // usamos esses valores para inserir um novo objeto dentro da array receitas
  recipes.push({ id, name, price});
  // retornamos uma resposta com o status 201, que serve para sinalizar que ocorreu uma operação de persistência de uma informação e um json com o atributo message
  res.status(201).json({ message: 'Recipe created successfully!'});
});

// Diferente do que fizemos para fazer uma requisição do tipo GET , dessa vez passamos um segundo parâmetro que é um objeto formado pelos atributos method , headers , body .
// * method: Método HTTP utilizado, como vimos no primeiro bloco temos 4 que são mais utilizados (GET, POST, PUT e DELETE).
// * headers: Define algumas informações sobre a requisição como o atributo Accept que diz qual o tipo de dado esperado como resposta dessa requisição e o Content-Type que sinaliza que no corpo da requisição está sendo enviado um JSON.
// * body: É o corpo da requisição. Como no HTTP só é possível trafegar texto, é necessário transformar o objeto JavaScript que quermos enviar para uma string JSON. Por isso que do lado do nosso back-end precisamos utilizar o bodyParser para transformar as informações que foram trafegadas como string JSON, de volta para um objeto JavaScript.
fetch('http://localhost:3001/recipes/', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    id: 4,
    name: 'Macarrão com Frango',
    price: 30
  })
});

// Precisamos ter uma rota que recebe um token para ser validado, a regra da validação é checar se o token possui 16 caracteres.
app.get('/validateToken', function (req, res) {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'})

  res.status(200).json({message: 'Valid Token!'})
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
