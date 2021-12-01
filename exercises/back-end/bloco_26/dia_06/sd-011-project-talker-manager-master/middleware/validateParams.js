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

// Exporta as funções para outros módulos usarem
module.exports = { validatePassword, validateEmail };
