const crypto = require('crypto');

app.post('/signup', (req, res) => {
  const { email, passowrd, firstName, phone } = req.body;

  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'missing fields' });
  }

  const token = crypto.randomBytes(8).toString('hex');

  res.status(200).json({ token });
})
