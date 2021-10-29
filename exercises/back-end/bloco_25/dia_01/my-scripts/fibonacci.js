// Bônus

// Exercício 2
// Crie um script que exiba o valor dos n primeiros elementos da sequência de fibonacci.
// A sequência de fibonacci começa com 0 e 1 e os números seguintes são sempre a soma dos dois números anteriores.
// Armazene o script no arquivo fibonacci.js .
// Utilize o readline-sync para realizar o input de dados.
// O script deve ser acionado através do comando npm run fibonacci
// Adicione o script ao menu criado no exercício 5.
// Não imprima o valor 0 , uma vez que ele não está incluso na sequência;
// Quando n = 10 , exatamente 10 elementos devem ser exibidos;
// Adicione validações para garantir que o valor informado é um inteiro maior que 0.
const readline = require('readline-sync');

function calculaElemento (n) {
  // a armazena o último número que calculamos
  let a = 1;
  // b armazena o penúltimo número que calculamos
  let b = 1;

  // Repetimos o loop enquanto `n` for maior que 0
  for (; n >= 0; n--) {
    if (b) console.log(b);
    // Armazenamos o último valor calculado em uma variável temporária
    const temp = a;
    // Para calcular o novo valor, somamos o último valor com o penúltimo valor
    // O novo valor é armazenado em `a`, já que ele passa a ser o último valor calculado
    a = a + b;
    // O valor antigo de `a`, que estava armazenado na variável temporária
    // agora se torna o penúltimo número e, por isso, é armazenado em `b`
    b = temp;
  }

  console.log(b);
  return b;
}

function realizaCalculo() {
  const n = readline.questionInt('Digite o valor de n: ');

  if (n <= 0) {
    console.log('Digite um número maior que 0!')
    return;
  }

  console.log(`n: ${n}`);

  calculaElemento(n - 2);
}

realizaCalculo();
