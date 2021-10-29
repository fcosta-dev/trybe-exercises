const readline = require('readline-sync');

const scripts = [
  { name: 'Calcular IMC', arquivo: './imc.js' },
  { name: 'Calcular velocidade média', arquivo: './velocidade.js' },
  { name: 'Jogo de adivinhação', arquivo: './sorteio.js' },
  { name: 'Fatorial', arquivo: './fatorial.js' },
  { name: 'Fibonacci', arquivo: './fibonacci.js' },
];

// Percorre os scrips para criar uma lista numerada para acessa-los
let mensagem = scripts
  .map((script, index) => `${index + 1} - ${script.name}`);

// Adicionando uma linha a mais
mensagem.unshift('Escolha um número para executar o script correspondente');

mensagem = mensagem.join('\n');

const scriptNumber = readline.questionInt(mensagem) - 1;

const script = scripts[scriptNumber];

if (!script) return console.log('Número inválido. Saindo');
require(script.arquivo);