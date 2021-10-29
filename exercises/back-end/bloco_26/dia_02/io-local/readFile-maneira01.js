const fs = require('fs');

const nomeDoArquivo = 'meu-arquivo.txt';

// Método fs.readFile
//  Esse método também é responsável por ler arquivos e trazer seu conteúdo para dentro do Node.js.
//  Ele recebe três parâmetros:
//  - O nome do arquivo;
//  - Um parâmetro opcional que, quando é uma string, define o encoding que será utilizado durante a leitura do arquivo;
//  - Uma callback que permite receber e manipular os dados lidos do arquivo.

fs.readFile(nomeDoArquivo, 'utf8', (err, data) => {
  if (err) {
    console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
    process.exit(1);
  }
  console.log(`Conteúdo do arquivo: ${data}`);
});
