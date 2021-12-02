const Joi = require('joi');
const rescue = require('express-rescue');
const UserModel = require('../models/User');

// Primeiro definimos qual o schema da nossa requisição
const createUserSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
}).messages({'any.required': 'O campo {{: id="label" }} é obrigatório', 'string.min': 'O campo {{: id="label" }} deve ter, pelo menos, {{: id="limit" }} caracteres', 'string.email': 'Informe um email válido no campo {{: id="label" }}',});

// Depois, exportamos um array de middlewares. O primeiro valida a requisição, o segundo chama o model
module.exports = [
  (req, res, next) => { // Pedimos ao Joi que valide o corpo da requisição de acordo com o que definimos em seu schema
    const { error } = createUserSchema.validate(req.body);
    // Caso um erro de validação seja encontrado, iniciamos o fluxo de erro e encerramos a execução dos nossos middlewares.
    if (error) return next(error); // Se não há nenhum problema com os dados, podemos prosseguir para o próximo middleware
    next();
  },
  rescue(async (req, res, next) => { // Extraimos os dados da requisição
    const { firstName, lastName, email, password } = req.body;
    // Varificamos se os dados são válidos
    if (!UserModel.isValid({ firstName, lastName, email, password })) {
      // Caso os dados não sejam válidos, nós criamos um novo erro
      const err = new Error('Invalid data');
      // Atribuímos o status `400 Bad Request` ao erro
      err.status = 400;
      // Iniciamos o fluxo e de erro e encerramos a execução do middleware.
      return next(err);
    }
    // Caso os dados sejam válidos, pedimos pro model criar o usuário
    const newUser = await UserModel.create({ firstName, lastName, email, password });
    // Com o usuário criado, devolvemos o status 201 Created, a mensagem informando sucesso na operação
    res.status(201).json(newUser);
  }),
];