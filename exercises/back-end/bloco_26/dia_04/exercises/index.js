// Importo o Express que é um framework Node.js 
const express = require('express');

// Importo o pacote bodyParser, para que eu consiga remontar os dados enviados parseando as informações para um formato compreensível para o back-end.
// Preciso utilizar o bodyParser para transformar as informações que foram trafegadas como string JSON, de volta para um objeto JavaScript
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// **************************
// **************************
// *** Iniciando as rotas ***
// **************************

// Requisição com método GET para a rota '/ping' que retornará o seguinte JSON: { message: 'pong' }
app.get('/ping', (_req, res) => { 
  res
    .json({ "message": "pong" })
});

// Requisição com método POST para a rota '/hello' que retornará o seguinte JSON: { message: 'Hello, ${name}!'}
app.post('/hello', (req, res) => {
  // desestruturamos o atributo name do objeto req.body para pegar o <nome do usuário>
  const { name } = req.body;
  res
    .status(200) // O código HTTP 200 OK é a resposta de status de sucesso que indica que a requisição foi bem sucedida
    .json({ "message": 'Hello, ${name}!'})
})

// **************************
// ***** Fim das rotas ******
// **************************
// **************************


// A função de callback recebe três parâmetros: request , response e next:
// request : comumente chamado de req ; contém as informações enviadas pelo cliente ao servidor.
// response : geralmente chamado de res ; permite o envio de informações do servidor de volta ao cliente.
// next : função que diz para o Express que aquele callback terminou de ser executado, e que ele deve prosseguir para executar o próximo callback para aquela rota. Este parâmetro é opcional.
app.use(function(err, req, res, next) {
  res
    .status(500) // O código HTTP 500 indica problemas com a estrutura do site que o usuário deseja acessar
    .send('Algo deu errado! Mensagem: ${err.message}'); // O método .send é um método que consegue retornar a resposta de uma requisição de uma forma genérica
})

// Peço ao Express que crie um servidor HTTP e escute por requisições na porta 3000;
app.listen(3000, () => {
  console.log('Aplicação ouvindo na porta 3000!')
})
