// Começamos importando a conexão com o banco
const connection = require('./connection');

// Faremos a função `formatUser`
// Note que não realizamos destructuring da senha, pois não precisaremos dela
// Note, também, que renomeamos os campos fist_name e last_name para firstName e lastName, respectivamente
function formatUser({ id, first_name: firstName, last_name: lastName, email }) {
  // A única coisa que precisamos fazer agora é criar um objeto com os nomes dos campos alterados
  // e sem o campo passowrd
  return {
    id,
    firstName,
    lastName,
    email,
  };
}

// Função responsável por criar o usuário no banco de dados
function create({ firstName, lastName, email, password }) {
  const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?)';
  // Ao invés de chamarmos connection como uma function, agora utilizamos diretamente o método `execute`
  return connection.execute(query, [firstName, lastName, email, password])
  // Obtemos o resultado da inserção e o utilizamos para obter o ID recém inserido
  .then(([result]) => ({ id: result.insertId, firstName, lastName, email }));
}

function findAll() {
  // Mais uma vez, chamamos connection.execute para executar nossa query.
  return connection.execute('SELECT * from users;')
  // Passamos cada resultado pela função de formatação
  .then(([results]) => results.map(formatUser));
}

async function findById(id) {
  // Realizamos uma consulta buscando o usuário por ID
  const user = await connection.execute('SELECT * FROM users WHERE id = ?', [id])
  // Caso nenhum resultado seja encontrado, transformamos `user` em `null`
    .then(([results]) => (results.length ? results[0] : null));
  // Caso nenhum usuário seja encontrado, retornaremos null
  if (!user) {
    return null;
  }
  // Caso o usuário tenha sido entrado, retornamos seus dados formatados:
  return formatUser(user);
}

async function updateUser(id, { firstName, lastName, email, password }) {
  // Primeiro, executamos a query de atualização
  const query = ` UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ? `;
  await connection.execute(query, [firstName, lastName, email, password, id]);
  // Por fim, buscamos o usuário, utilizando o método `findById` e o retornamos.
  // Não precisamos nos preocupar em formatar os dados, ou em verificar se o usuário de fato existe,
  // já que `findById` já faz isso pra nós.
  return findById(id);
}
