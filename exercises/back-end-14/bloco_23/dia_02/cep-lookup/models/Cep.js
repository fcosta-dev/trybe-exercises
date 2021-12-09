// Importamos a conexão com o banco
const connection = require('./connection');

// Regex que identifica um CEP já formatado
const CEP_REGEX = /\d{5}-\d{3}/;

// Função que formata um CEP
const formatCep = (cep) => {
  // Caso o CEP já esteja formatado, retorna o próprio CEP
  if (CEP_REGEX.test(cep)) return cep;
  // Caso não esteja formatado, utiliza regex para adicionar a formatação
  return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
};

// Formata os campos para exibição
const getNewCep = ({ cep, logradouro, bairro, localidade, uf }) => ({
  cep: formatCep(cep),
  logradouro,
  bairro,
  localidade,
  uf
});

const findAddressByCep = async (cepToSearch) => {
  // Removemos todos os traços, pois armazenamos o CEP puro no banco de dados
  const treatedCep = cepToSearch.replace('-', '');
  const query = 'SELECT cep, logradouro, bairro, localidade, uf FROM ceps WHERE cep = ?';
  // Executamos a query, selecionando o primeiro resultado caso exista, e null caso contrário
  const result = await connection.execute(query, [treatedCep])
    .then(([results]) => (results.length ? results[0] : null));
  // Caso nenhum resultado seja encontrado, retornamos 'null'
  if (!result) return null;
  // Retornamos os dados do CEP formatados pela função getNewCep
  return getNewCep(result);
};

module.exports = {
  findAddressByCep,
};
