const token = require('./token');

const validateToken = (req, res, next) => {
  const { authorization } = req.headers; // Desconstrói o authorization passado pelo header
  
  // Checagens de validação do token
  if (!authorization) return res.status(401).json({ message: 'Token não encontrado' });
  if (authorization !== token) return res.status(401).json({ message: 'Token inválido' });
  
  next(); // Aciona próximo middleware
};

module.exports = { validateToken };
