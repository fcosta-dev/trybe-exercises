// Exercício 7

// Crie um "jogo de adivinhação" em que a pessoa ganha se acertar qual foi o número aleatório gerado
// O script deve ser executado através do comando npm run sorteio .
// Utilize o readline-sync para realizar input de dados.
// Armazene o script em sorteio.js.
// O número gerado deve ser um inteiro entre 0 e 10.
// Caso a pessoa acerte o número, exiba na tela "Parabéns, número correto!".
// Caso a pessoa erre o número, exiba na tela "Opa, não foi dessa vez. O número era [número sorteado]".
// Ao final, pergunte se a pessoa deseja jogar novamente. Se sim, volte ao começo do script.

// Importação do readline para fazer a leitura do campo
const readline = require('readline-sync');

// Criamos uma função para poder utilzar early return
function logResultado(numero, resposta) {
  // Aqui, utilizamos o return para interromper a execução da função
  // Esse é o padrão de código conhecido com early return, ou seja:
  // retornamos "mais cedo" pois uma determinada condição (no caso, a resposta estar certa)
  // não foi atingida.
  if (numero !== resposta) {
    return console.log(`Opa, não foi dessa vez. O número era ${numero}`);
  }

  // Como o if da linha acima tem um `return`, não precisamos do `else`, já que, se a execução
  // do código entrar no if, a linha abaixo não será executada
  return console.log('Parabéns, número correto!');
}

function runGame() {
  // O número gerado deve ser um inteiro entre 0 e 10.
  const numero = parseInt(Math.random() * 10);

  const resposta = readline.questionInt(
    'Digite um número entre 0 e 10 para saber se é o número que estou pensando: '
  );

  logResultado(numero, resposta);

  const novamente = readline.question(
    'Deseja jogar novamente? (Digite s para sim, e qualquer outra coisa para não) '
  );

  // Mais uma vez, utilizamos um return para interromper a execução do código mais cedo,
  // o que elimina a necessidade do else
  if (novamente !== 's') return console.log('OK, até a próxima!');

  // Chamamos a mesma função para executar novamente o jogo.
  // Uma função que chama a si mesma é chamada de função **recursiva**
  runGame();
}

// Executamos o jogo pela primeira vez
runGame();