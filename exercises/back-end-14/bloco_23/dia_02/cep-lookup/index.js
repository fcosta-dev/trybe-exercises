// Carregamos as variáveis de ambiente
require('dotenv').config();
const express = require('express');

// Criamos a aplicação do express
const app = express();

// Registramos o endpoint 'GET /ping'
app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong!' });
});

// Lemos a porta da variável de ambiente, ou usamos 3000
const PORT = process.env.PORT || 3000;

// Iniciamos a aplicação ouvindo na porta informada na variável de ambiente
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})