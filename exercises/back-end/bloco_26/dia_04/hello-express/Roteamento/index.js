// No Express, nós registramos uma rota utilizando a assinatura app.METODO(caminho, callback)
// , onde a função de callback recebe três parâmetros: request , response e next .

// request : comumente chamado de req ; contém as informações enviadas pelo cliente ao servidor.
// response : geralmente chamado de res ; permite o envio de informações do servidor de volta ao cliente.
// next : função que diz para o Express que aquele callback terminou de ser executado, e que ele deve prosseguir para executar o próximo callback para aquela rota. Este parâmetro é opcional.

// As rotas respondem a requisições que satisfaçam a condição método HTTP + caminho .

const express = require('express');
const app = express();

/* Rota com caminho '/', utilizando o método GET */
app.get('/', function (req, res) {
  res.send('hello world');
});

/* Rota com caminho '/', utilizando o método POST */
app.post('/', function (req, res) {
  res.send('hello world');
});

/* Rota com caminho '/', utilizando o método PUT */
app.put('/', function (req, res) {
  res.send('hello world');
});

/* Rota com caminho '/', utilizando o método DELETE */
app.delete('/', function (req, res) {
  res.send('hello world');
});

/* Rota com caminho '/' para qualquer método HTTP */
app.all('/', function (req, res) {
  res.send('hello world');
});

/* **************************************************************** */
/* Ou podemos encadear as requisições para evitar repetir o caminho */
/* **************************************************************** */
app
  .route('/')
  .get(function (req, res) {
    // Requisições para rota GET `/` são resolvidas aqui!
    res.send('hello world get');
  })
  .post(function (req, res) {
    // Requisições para rota POST `/` são resolvidas aqui!
    res.send('hello world post');
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
