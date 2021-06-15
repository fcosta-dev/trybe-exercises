const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
// Teste se Sum é uma função
assert.strictEqual(typeof sum, 'function');
// Teste se o retorno de sum(4, 5) é 9
assert.strictEqual(sum(4, 5), 9, 'Quatro mais cinco é nove');
// Teste se o retorno de sum(0, 0) é 0
assert.strictEqual(sum(0, 0), 0, 'Zero mais zero é zero');
// Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
assert.throws(() => { //Analisa lançamento de erro
  sum(4, '5');
});

assert.doesNotThrow(() => { //Analisa se não está lançando erro
  sum(4, 5);
});

// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
assert.throws(() => {
  sum(4, '5');
}, /^Error: parameters must be numbers$/); // Expressão angular

