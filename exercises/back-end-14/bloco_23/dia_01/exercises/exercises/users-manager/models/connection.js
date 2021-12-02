// Importamos o driver do banco
const mysql = require('mysql2/promise');

// Criamos uma "pool" de conexões
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'fer12345nando',
    database: 'users_crud',
});

// Retornamos o pool criado para que possa ser utilizado pelo model.
module.exports = connection;
