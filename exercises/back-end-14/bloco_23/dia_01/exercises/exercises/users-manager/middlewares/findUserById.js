const rescue = require('express-rescue');
const User = require('../models/User');

module.exports = rescue(async (req, res) => {
  const { id } = req.params; // Extraímos o ID do dos parâmetros da rota
  const user = await User.findById(id); // Pedimos para o model buscar o usuário
  if (!user) {   // Caso nenhum usuário seja encontrado
    // Retornamos o status 404 Not Found e uma mensagem de erro
    return res.status(404).json({ error: true, message: 'Usuário não encontrado' });
  }
  // Caso o usuário exista, retornamos o status 200 OK e o usuário
  return res.status(200).json(user);
});
