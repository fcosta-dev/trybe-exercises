const fs = require('fs');

// criamos uma variável chamada nomeDoArquivo , contendo o nome (fixo) do arquivo que vamos ler
const nomeDoArquivo = 'meu-arquivo.txt';


// Método fs.readFileSync
// Esse método é responsável por ler arquivos e trazer seu conteúdo para dentro do Node.js.
// O método readFileSync recebe dois parâmetros:
// - O nome do arquivo;
// - Um parâmetro opcional que, quando é uma string, define o encoding que será utilizado durante a leitura do arquivo.
try {
  const data = fs.readFileSync(nomeDoArquivo, 'utf8');
  console.log(data);
} catch (err) {
  console.error(`Erro ao ler o arquivo: ${err.path}`);
  console.log(err);
}
