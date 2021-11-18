/* index.js */
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors())

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

// Dizer ao Express que, quando uma requisição com método GET for recebida no caminho /recipes , a função deve ser chamada retornando o conteúdo que está na variável recipes
app.get('/recipes', function (req, res) {
  // O método .send é um método que consegue retornar a resposta de uma requisição de uma forma genérica, adaptando o tipo do retorno ao que vai ser retornado
  // Mas para deixar mais evidente que o que vamos devolver é um JSON usamos o método .json
  res.json(recipes);
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
