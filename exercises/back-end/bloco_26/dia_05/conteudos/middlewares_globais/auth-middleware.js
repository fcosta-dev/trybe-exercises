const validUsers = [
  { username: 'MestreCuca', password: 'MinhaSenhaSuperSeguraSqn' },
  { username: 'McRonald', password: 'Senha123Mudar' },
  { username: 'Burger Queen', password: 'Senha123Mudar' },
  { username: 'UpWay', password: 'Senha123Mudar' },
];

const authMiddleware = (req, res, next) => {
  const { username, password } = req.headers;

  if (!username || !password) {
    return res.status(401).json({ message: 'Username or password can`t be blank!' });
  }

  // Guarda na foundUser o retorno de uma busca se foi encontrado o username informado
  const foundUser = validUsers.find((user) => user.username === username);

  // Se não foi encontrado o username na base da variavel validUsers então...
  if (!foundUser) return res.status(401).json({ message: 'Invalid credentials!' });

    if (username !== validUser.username || password !== validUser.password) {
    return res.status(401).json({ message: 'Invalid credentials!' });
  }

  req.user = foundUser; // Aqui estamos passando o usuário encontrado para o próximo middleware.
  
  next();
};

module.exports = authMiddleware;
