const express = require('express')
const bodyParser = require('body-parser');


const authMiddleware = require('./middlewares_globais/auth-middleware')
const app = express();

// diz ao body-parser que queremos um middleware que processe corpos de requisições escritos em JSON.
app.use(bodyParser.json())


app.get('/open', function(req, res) {
  res.send('open!')
})

app.use(authMiddleware);


const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/recipes', function (req, res) {
  // O método .send é um método que consegue retornar a resposta de uma requisição de uma forma genérica, adaptando o tipo do retorno ao que vai ser retornado
  // Mas para deixar mais evidente que o que vamos devolver é um JSON usamos o método .json
  res.json(recipes);
});

app.post('/recipes', validateName, function (req, res) { // Esse middleware faz todo o processo de pegar os dados enviados, salvar em um array, e finalmente retornar uma mensagem de sucesso dizendo que o produto foi cadastrado.
    const { id, name, price } = req.body;

    const { username } = req.user; // Aqui estamos acessando o usuário encontrado no middleware de autenticação.
    
    recipes.push({ id, name, price, chef: username });
    res.status(201).json({ message: 'Recipe created successfully!'});
  }
);


// Peço ao Express que crie um servidor HTTP e escute por requisições na porta 3000;
app.listen(3000, () => {
  console.log('Aplicação ouvindo na porta 3000!')
})
