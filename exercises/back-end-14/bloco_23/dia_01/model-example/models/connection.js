// Um driver é um software que permite que você se comunique com o banco de dados
// Vamos utilizar o mysql2 - npm install mysql2
const mysql = require('mysql2/promise');

// O método createPool cria uma pool de conexões com o banco de dados. Isso significa que a própria biblioteca irá gerenciar as múltiplas conexões que fizermos com o banco.
const connection = mysql.createPool({
  // O createPool recebe um objeto com as credenciais necessárias para estabelecer a conexão
  host: 'localhost',
  user: 'root',
  password: 'fer12345nando',
  database: 'model_example'
});

module.exports = connection;