// 4 - Realize o download deste arquivo e salve-o como simpsons.json . Utilize o arquivo baixado para realizar os requisitos abaixo.
// Você pode utilizar then e catch , async/await ou uma mistura dos dois para escrever seu código. Procure não utilizar callbacks.

// - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .
// - Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
// - Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
// - Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.
// - Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .
// - Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .
const fs = require('fs').promises;

// - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .
function primeiroReq(){
  fs.readFile('./simpsons.json', 'utf-8')
    .then((conteudoArquivo) => {
      return JSON.parse(conteudoArquivo); // Converte o conteúdo do arquivo de JSON para um Array utilizando JSON.parse
    })
    .then((simpsons) => { // Após a conversão acima do SJON para um Array efetuo o MAP pegando o ID e o Name
      return simpsons.map(({ id, name }) => `${id} - ${name}`);
    })
    .then((strings) => {
      strings.forEach((string) => console.log(string));
    });
}

primeiroReq();

// - Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
async function segundoReq(id) {
  const simpsons = await fs
  .readFile('./simpsons.json', 'utf-8')
  .then((fileContent) => JSON.parse(fileContent));

  const chosenSimpson = simpsons.find((simpson) => simpson.id === id);

  if (!chosenSimpson) {
    throw new Error('id não encontrado');
  }

  return chosenSimpson;
}

segundoReq("1");

// - Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
async function terceiroReq() {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));

  const newArray = simpsons.filter(simpson => simpson.id !== '10' && simpson.id !== '6');

  await fs.writeFile('./simpsons.json', JSON.stringify(newArray)); // Escreve o novo array sem o id 10 e 6
}

terceiroReq();

// - Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.
async function quartoReq() {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((conteudoArquivo) => JSON.parse(conteudoArquivo));

  const familiaSimpsons = simpsons.filter(simpson => [1, 2, 3, 4].includes(simpson.id));

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(familiaSimpsons)); // Escreve no novo arquivo
}

quartoReq();

// - Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .
async function quintoReq() {
  const familiaSimpsons = await fs
    .readFile('./simpsonsFamily.json', 'utf-8')
    .then((conteudoArquivo) => JSON.parse(conteudoArquivo));
  
  familiaSimpsons.push({ "id": "8","name": "Nelson Muntz" });

  await fs.writeFile('./simpsonsFamily.json', familiaSimpsons);
}

quintoReq();

// - Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .
function sextoReq() {
  // Realizamos a leitura do arquivo
  return fs.readFile('./simpsonsFamily.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent)) // Interpretamos o conteúdo como JSON
    .then((simpsons) => simpsons.filter((simpson) => simpson.id !== '8')) // Filtramos o array para remover o personagem Nelson
    .then((simpsonsWithoutNelson) => simpsonsWithoutNelson // Criamos um novo Array contendo a personagem Maggie
      .concat([{ id: '8', name: 'Maggie Simpson' }]))
    .then((simpsonsWithMaggie) => // Escrevemos o novo array no arquivo
      fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie)));
}

sextoReq();
