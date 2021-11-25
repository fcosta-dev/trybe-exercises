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

// O get pega os objetos. Testagem: http :3000/ping
// Requisição com método GET para a rota '/ping' que retornará o seguinte JSON: { message: 'pong' }
app.get('/ping', (_req, res) => { 
  res
    .json({ "message": "pong" })
});

// O post adiciona objetos. Testagem: 
// Requisição com método POST para a rota '/hello' que retornará o seguinte JSON: { message: 'Hello, ${name}!'}
app.post('/hello', (req, res) => {
  // desestruturamos o atributo name do objeto req.body para pegar o <nome do usuário>
  const { name } = req.body;
  res
    .status(200) // O código HTTP 200 OK é a resposta de status de sucesso que indica que a requisição foi bem sucedida
    .json({ "message": `Hello, ${name}!` })
})

// O post adiciona objetos.
// Requisição com método POST para a rota '/greetings' que retornará o seguinte JSON: { "name": "<nome do usuário>", "age": <idade do usuário> }
app.post('/greetings', (req, res) => {
  // Desestrutura o body da req pegando o name e o age
  const { name, age } = req.body;
  // Se caso a pessoa usuária tenha idade menor ou igual a 17 anos, retorna o status 401 abaixo
  if (parseInt(age, 10) <= 17) {
    return res
      .status(401) // O código HTTP 401 Unauthorized - indica que a solicitação não foi aplicada porque não possui credenciais de autenticação válidas para o recurso de destino.
      .json({ message: `Unauthorized` });
  }
  // Caso a pessoa usuária tenha idade maior que 17 anos, então retornará o status 200 abaixo
  res
    .status(200) // O código HTTP 200 OK é a resposta de status de sucesso que indica que a requisição foi bem sucedida
    .json({ message: `Hello, ${name}!` });
});

// O put edita objetos
// Requisição com método PUT para a rota '/users/:name/:age' que retornará o seguinte JSON: { "message": "Seu nome é <name> e você tem <age> anos de idade" }
app.put('/users/:name/:age', (req, res) => {
  // Desestrutura o params da req pegando o name e o age
  const { name, age } = req.params;
  res
    .status(200) // O código HTTP 200 OK é a resposta de status de sucesso que indica que a requisição foi bem sucedida
    .json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` })
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
    .send(`Algo deu errado! Mensagem: ${err.message}`); // O método .send é um método que consegue retornar a resposta de uma requisição de uma forma genérica
})

// Peço ao Express que crie um servidor HTTP e escute por requisições na porta 3000;
app.listen(3000, () => {
  console.log('Aplicação ouvindo na porta 3000!')
})

color: #A00