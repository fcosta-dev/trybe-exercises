const rescue = require('express-rescue');
    const UserModel = require('../models/User');

// Depois, exportamos um array de middlewares. O primeiro valida a requisição, o segundo chama o model
module.exports = [
  (req, res, next) => {
    // Pedimos ao Joi que valide o corpo da requisição de acordo com o que definimos em seu schema
    const { error } = UserModel.isValid(req.body); /* Alteramos de `createUserSchema.validate` para `UserModel.isValid` */
    // Caso um erro de validação seja encontrado, iniciamos o fluxo de erro e encerramos a execução dos nossos middlewares.
    if (error) return next(error);
    // Se não há nenhum problema com os dados, podemos prosseguir para o próximo middleware
    next();
  },
  rescue(async (req, res) => {
    // Extraimos os dados da requisição
    const { firstName, lastName, email, password } = req.body;
    /* Removemos a chamada para UserModel.isValid, já que ela já aconteceu no middleware anterior */
    // Caso os dados sejam válidos, pedimos pro model criar o usuário
    const newUser = await UserModel.create({ firstName, lastName, email, password });
    // Com o usuário criado, devolvemos o status 201 Created, a mensagem informando sucesso na operação
    res.status(201).json(newUser);
  }),
];
