const Cep = require('../models/Cep');

const CEP_REGEX = /\d{5}-?\d{3}/;

const findAddressByCep = async (searchedCep) => {
  // Valida o CEP e em caso dele ser falso, retorna um erro
  if (!CEP_REGEX.test(cep)) {
    return {
      erro: {
        code: 'invalidData',
        message: 'CEP iválido',
      }
    }
  }

  // Buscamos o CEP através do Model
  const cep = await Cep.findAddressByCep(searchedCep);

  // Caso não encontre nenhum CEP, o service retorna um objeto de erro.
  if (!cep) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado'
      },
    };
  }

  // Por fim, retornamos o CEP correto
  return cep;
}

const create = async ({ cep, logradouro, bairro, localidade, uf }) => {
  // Começamos buscando o cep que estamos tentando cadastrar
  const existingCep = await Cep.findAddressByCep(cep);
  // Caso o CEP já exista, retornamos um erro dizendo que ele já existe
  if (existingCep) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'CEP já existente',
      },
    };
  }
  // Caso o CEP ainda não exista, chamamos o Model para criá-lo no banco, e devolvemos esse resultado
  return Cep.create({ cep, logradouro, bairro, localidade, uf });
};

module.exports = {
  findAddressByCep,
  create,
};
