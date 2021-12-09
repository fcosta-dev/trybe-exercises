const rescue = require('express-rescue');
const service = require('../services/Cep');
const Joi = require('joi')

const findAddressByCep = rescue(async (req, res, next) => {
  const { cep } = req.params;
  const address = await service.findAddressByCep(cep);
  if (address.error) { return next(address.error) }
  return res.status(200).json(address);
});

const create = rescue(async (req, res, next) => {
  // Armazenamos essa parte do schema do Joi para reutilizá-la
  const requiredNonEmptyString = Joi.string().not().empty().required();
  // Validamos o corpo da request
  const { error } = Joi.object({
    cep: Joi.string().regex(/\d{5}-\d{3}/).required(),
    logradouro: requiredNonEmptyString,
    bairro: requiredNonEmptyString,
    localidade: requiredNonEmptyString,
    uf: requiredNonEmptyString.length(2),
  }).validate(req.body);
  // Caso haja erro de validação, iniciamos o fluxo de erro
  if (error) return next(error);
  // Caso não haja erro de validação, pedimos para o service criar o cep
  const newCep = await service.create(req.body);
  // Caso o service nos retorne um erro, iniciamos o fluxo de erro
  if (newCep.error) { return next(newCep.error) }
  // Caso contrário, retornamos o status `201 Created`, e o novo CEP, em formato JSON
  res.status(201).json(newCep);
});

module.exports = {
  findAddressByCep,
  create,
}