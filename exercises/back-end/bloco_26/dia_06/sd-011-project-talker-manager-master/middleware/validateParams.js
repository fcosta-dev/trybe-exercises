// MIDDLEWARE DE VALIDAÇÃO DE PASSWORD
const validatePassword = (req, res, next) => {
  const { password } = req.body; // Pega o password do body
  
  // Passa pelos critérios de aceitação de password
  if (!password) return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  if (password.length <= 6) { 
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' }); 
  }

  next(); // Aciona próximo middleware
};

// MIDDLEWARE DE VALIDAÇÃO DE EMAIL
const validateEmail = (req, res, next) => {
  const { email } = req.body; // Pega o email do body

  // Passa pelos critérios de aceitação de email
  const emailRegex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  if (!email) return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  if (!emailRegex.test(email)) { 
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' }); 
  }

  next(); // Aciona próximo middleware
};

// MIDDLEWARE DE VALIDAÇÃO DE NAME
const validateName = (req, res, next) => {
  const { name } = req.body; // Pega o name do body

  if (!name) return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  if (name.length < 3) {
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' }); 
  }

  next(); // Aciona próximo middleware
};

// MIDDLEWARE DE VALIDAÇÃO DE IDADE
const validateAge = (req, res, next) => {
  const { age } = req.body; // Pega o age do body

  if (!age) return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  if (age < 18) {
    return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' }); 
  }

  next(); // Aciona próximo middleware
};

// Exporta as funções para outros módulos usarem
module.exports = { validatePassword, validateEmail, validateName, validateAge };
