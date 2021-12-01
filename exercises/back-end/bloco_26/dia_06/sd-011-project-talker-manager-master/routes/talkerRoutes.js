// Importa o Express para ser utilizado
const express = require('express');
// Importa o router para administrar melhor as rotas
const router = express.Router();
// Importa o fs para trabalhar a leitura de arquivos
const fs = require('fs').promises;

// Importa o Middleware de validação de conteudo do arquivo a ser lido, no caso o talker.json
const validateFileContent = require('../middlewares/validateFileContent');

router.get(
  '/', // Rota raíz
  validateFileContent, // Aciona o primeiro middleware
  async (_req, res, _next) => { // Aciona o segundo middleware
    try {
      const fileContent = await fs.readFile('./talker.json'); // Faz a leitura no arquivo JSON com o fs
      const people = JSON.parse(fileContent);
      return res.status(200).json(people); // Recebe o status 200 e monta lista das pessoas
    } catch (error) {
      console.log(error); // Joga no console o erro encontrado, caso aconteça
    }
  },
);

module.exports = router; 