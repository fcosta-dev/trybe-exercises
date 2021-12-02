const connection = require('./connection');

// Cria uma string com o nome completo da pessoa autora
const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;

  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
  };
};

const getFullNameAuthor = (first_name, middle_name, last_name) => {
  // Note que `Boolean` é uma função que recebe um parâmetro e retorna true ou false
  // nesse caso, se middle_name for `undefined` ou uma string vazia o retorno será `false`
  const fullName = [first_name, middle_name, last_name]
    .filter(Boolean)
    .join(' ');

  return fullName;
};

// Converte o nome dos campos de snake_case para camelCase
const serialize = ({ id, first_name, middle_name, last_name }) => ({
  id,
  firstName: first_name,
  middleName: middle_name,
  lastName: last_name,
  fullName: getFullNameAuthor(first_name, middle_name, last_name),
});

// Busca todas as pessoas autoras do banco.
const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
  );
  return authors.map(serialize);
};

/*
Busca uma pessoa autora específica, a partir do seu ID
@param {String} id ID da pessoa autora a ser recuperado
*/

const findById = async (id) => {
  // Repare que substituímos o id por `?` na query.
  // Depois, ao executá-la, informamos um array com o id para o método `execute`.
  // O `mysql2` vai realizar, de forma segura, a substituição do `?` pelo id informado.
  const query = 'SELECT first_name, middle_name, last_name FROM model_example.authors WHERE id = ?'
  const [ authorData ] = await connection.execute(query, [id]);
  
  if (authorData.length === 0) return null;
  
  // Utilizamos [0] para buscar a primeira linha, que deve ser a única no array de resultados, pois estamos buscando por ID.
  const { firstName, middleName, lastName } = serialize(authorData[0]);
  
  return getNewAuthor({
    id,
    firstName,
    middleName,
    lastName
  });
};

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
};

const create = async (firstName, middleName, lastName) => connection.execute(
  'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)',
  [firstName, middleName, lastName],
);

module.exports = {
  getAll,
  findById,
  isValid,
  create,
};
