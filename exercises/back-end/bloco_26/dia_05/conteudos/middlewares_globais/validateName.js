const validateName = (req, res, next) => {
  const { name } = req.body;
  if (!name || name === '') return res.status(400).json({ message: 'Invalid data!'}); // 1

  next(); // Caso não caia no if , este middleware endereça a requisição para o próximo middleware.
}

module.exports = validateName;
