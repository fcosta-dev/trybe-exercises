// Importa o Express para ser utilizado
const express = require('express');
// Importa o router para administrar melhor as rotas
const router = express.Router();
// Importa o fs para trabalhar a leitura de arquivos
const fs = require('fs').promises;

router.get('/', async (_req, res) => {
  const fileContent = await fs.readFile('./talker.json');
  const people = JSON.parse(fileContent);

  return res.status(200).json(people);
});

module.exports = router; 