// 1 - Crie um script que mostre na tela o conteúdo de um arquivo escolhido pela pessoa usuária:

// - Pergunte à pessoa usuária qual arquivo ela deseja ler.
// - Leia o arquivo indicado.
// - Caso o arquivo não exista, exiba na tela "Arquivo inexistente" e encerre a execução do script.
// - Caso o arquivo exista, escreva seu conteúdo na tela.
const fs = require('fs').promises;
const readline = require('readline');

function question(message) {
  const rl = readline.createInterface({ // Criamos uma variável rl para inicializar o módulo readline, conforme visto na documentação
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(message, (answer) => { // No entanto, ao abrirmos a pergunta, fazemos isso dentro de uma Promise.
      rl.close();

      // Dessa forma, quando obtivermos a resposta, podemos resolver nossa Promise com essa resposta.
      // Assim, quem chama nossa função não precisa se preocupar com callbacks, e pode obter a resposta
      // através da Promise que retornamos.
      resolve(answer);
    });
  });
}

async function start() {
  // Como nossa função `question` retorna uma Promise, podemos utilzar `await` para obter a resposta.
  const fileName = await question('Digite o caminho do arquivo que deseja ler: ');

  try {
    const fileContent = await readFile(fileName, 'utf-8'); // Tentamos realizar a leitura do arquivo
    console.log(fileContent); // E exibir seu resultado na tela
  } catch (err) { // Caso um erro aconteça, exibimos a mensagem de erro na tela.
    console.log('Arquivo inexistente');
  }
}

start();
