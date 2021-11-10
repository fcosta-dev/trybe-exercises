// 5 - Crie uma função que lê e escreve vários arquivos ao mesmo tempo.

// Utilize o Promise.all para manipular vários arquivos ao mesmo tempo.
// Dado o seguinte array de strings: ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'] Faça com que sua função crie um arquivo contendo cada string, sendo o nome de cada arquivo igual a file<index + 1>.txt . Por exemplo, para a string "Finalmente", o nome do arquivo é file1.txt .
// Programe sua função para que ela faça a leitura de todos os arquivos criados no item anterior, armazene essa informação e escreva em um arquivo chamado fileAll.txt .
// O conteúdo do arquivo fileAll.txt deverá ser Finalmente estou usando Promise.all !!! .

const fs = require('fs').promises;

async function arrayToFile() {
  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!']

  const createFilePromises = strings // Utilizando a função map para criar um Array de Promises, cada um criando um arquivo
    .map((string, index) =>
      fs.writeFile(`./file${index + 1}.txt`, string)
  );

  await Promise.all(createFilePromises); // Utilizar Promise.all para guardar a escrita de todos os arquivos

  // Realiza a leitura dos arquivos criados
  const fileNames = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt'];
  const fileContents = await Promise.all(
    fileNames.map((fileName) => fs.readFile(fileName, 'utf-8'))
  );

  // Concatena o conteúdo dos arquivos e criar o arquivo novo  
  const newFileContent = fileContents.join(' ');
  await fs.writeFile('./fileAll.txt', newFileContent);
}
