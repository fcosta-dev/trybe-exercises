// Exercício 01
// Adicione autenticação a todos os endpoints.
// O token deve ser enviado através do header Authorization .
// O token deve ter exatamente 16 caracteres.
// Caso o token seja inválido ou inexistente, a resposta deve possuir o status 401 - Unauthorized e o JSON { message: 'Token inválido!' } .


const express = require('express');
const authMiddleware = require('./authMiddleware');
const app = express();

app.use(express.json());
app.use(authMiddleware);


app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000, () => console.log('ouvindo na porta 3000!'));
