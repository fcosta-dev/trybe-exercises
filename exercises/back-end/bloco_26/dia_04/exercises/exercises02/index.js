const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const rescue = require('express-rescue');

// Cria uma variável que vai ser responsável por importar as funções do /fs-utils
const simpsonsUtils = require('./fs-utils');

// É colocado tudo dentro do rescue para que a API não pare, e mostre o erro. Essa é uma maneira de lidar com erro, porém a melhor é criar uma middleware de erro para tratar o erro.
app.get('/simpsons', rescue(async (req, res) => {
  const simpsons = await simpsonsUtils.getSimpsons();
  res.status(200).json(simpsons);
}));

// É colocado tudo dentro do rescue para que a API não pare, e mostre o erro. Essa é uma maneira de lidar com erro, porém a melhor é criar uma middleware de erro para tratar o erro.
app.get('/simpsons/:id', rescue(async (req, res) => {
  const simpsons = await simpsonsUtils.getSimpsons();
  const simpson = simpsons.find(({ id }) => id === req.params.id);
  if (!simpson) {
    return res.status(404).json({ message: 'simpson not found' });
  }
  return res.status(202).json(simpson);
}));

app.post(
  '/simpsons',
  rescue(async (req, res) => {
    const { id, name } = req.body;
    const simpsons = await simpsonsUtils.getSimpsons();
    if (simpsons.map(({ id }) => id).includes(id)) {
      return res.status(409).json({ message: 'id already exists' });
    }
    simpsons.push({ id, name });
    await simpsonsUtils.setSimpsons(simpsons);
    res.status(204).end();
  })
);
