const isValid = (req, res, next) => {
  const { name, initials, country } = req.body;

  if(!name || name.length < 5 || !initials || initials.length > 3 || !country || country.length < 3) {
    return res.status(400).json({ message: 'invalid data' });
  }

  next();
}

module.exports = { isValid };
