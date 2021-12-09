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

module.exports = {
  findAddressByCep,
};
