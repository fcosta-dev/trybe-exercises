// 4 - Realize o download deste arquivo e salve-o como simpsons.json . Utilize o arquivo baixado para realizar os requisitos abaixo.
// Você pode utilizar then e catch , async/await ou uma mistura dos dois para escrever seu código. Procure não utilizar callbacks.

// - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .
// - Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
// - Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
// - Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.
// - Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .
// - Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .

const fs = require('fs').promises;

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
