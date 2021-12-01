// Importa o fs para trabalhar a leitura de arquivos
const fs = require('fs').promises;

// Middleware de validação de conteudo do arquivo a ser lido, no caso o talker.json
const validateFileContent = async (_req, res, next) => {
  const fileContent = await fs.readFile('./talker.json');
  const people = JSON.parse(fileContent);
  if (people === []) { 
    return res.status(200).json([]);
}
  next(); // Aciona o próximo middleware
};

module.exports = validateFileContent;
