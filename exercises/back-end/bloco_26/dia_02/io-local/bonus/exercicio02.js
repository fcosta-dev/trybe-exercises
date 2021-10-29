// 2 - Crie um script que substitua uma palavra por outra em um arquivo escolhido pela pessoa usuária:
// - Pergunte à pessoa usuária qual arquivo ela deseja utilizar.
// - Leia o arquivo.
// - Caso o arquivo não exista, exiba um erro na tela e encerre a execução do script.
// - Caso o arquivo exista, solicite a palavra a ser substituída.
// - Solicite a nova palavra, que substituirá a palavra anterior.
// - Imprima na tela o conteúdo do arquivo com as palavras já substituídas.
// - Pergunte o nome do arquivo de destino.
// - Salve o novo arquivo no caminho de destino.
const fs = require('fs').promises;
const readline = require('readline');

function question(message) {
  // Criamos uma variável rl para inicializar
  // o módulo readline, conforme visto na documentação
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    // No entanto, ao abrirmos a pergunta, fazemos isso dentro de uma Promise.
    rl.question(message, (answer) => {
      rl.close();

      // Dessa forma, quando obtivermos a resposta, podemos resolver nossa Promise com essa resposta.
      // Assim, quem chama nossa função não precisa se preocupar com callbacks, e pode obter a resposta
      // através da Promise que retornamos.
      resolve(answer);
    });
  });
}

// Criamos a função start , responsável pelo fluxo, e perguntamos o nome do arquivo a ser lido
async function start() {
  const fileName = await question('Arquivo a ser lido: ');

  const originalContent = await fs.readFile(fileName, 'utf-8')
    // Caso aconteça um erro ao ler o arquivo
    .catch(err => {
      // Mostramos o erro na tela
      console.error(`Erro ao ler o arquivo: ${err}`);
      // E retornamos `false`. O valor retornado aqui do catch é o valor que será armazenado na variável `originalContent`.
      return false;
    })
  
  if (!originalContent) return;

  // Perguntamos quais palavras deverão ser substituídas, realizamos a substituição e exibimos o resultado na tela
  const oldWord = await question('Qual palavra deseja substituir? ');
  const newWord = await question('E qual palavra deve ficar em seu lugar? ');
  const newContent = originalContent.replace(new RegExp(oldWord, 'g'), newWord);
  console.log('Resultado da substituição: ');
  console.log(newContent);

  // Por último, perguntamos o nome do arquivo onde salvar o resultado e escrevemos no disco.
  const destinationPath = await question('Onde deseja salvar o resultado? ');
  await fs.writeFile(destinationPath, newContent);
}

start();
