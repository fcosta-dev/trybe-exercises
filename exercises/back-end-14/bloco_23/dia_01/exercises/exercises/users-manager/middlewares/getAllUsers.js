const rescue = require('express-rescue');
const UserModel = require('../models/User');

// Pedimos para o model buscar todos os usuários
module.exports = rescue(async (_req, res) => {
  const allUsers = await UserModel.findAll();
  res.status(200).json(allUsers);
});

// Como o `find` sempre retorna um Array, não precisamos nos preocupar:
// caso nenhum resultado seja encontrado, o próprio MySql retornará um array vazio
res.status(200).json(users);
