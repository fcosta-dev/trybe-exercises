// Escreva a função sumAllNumbers para passar nos testes já implementados.
const assert = require('assert');

// escreva a função sumAllNumbers aqui
const sumAllNumbers = (numeros) => {
  let somaNumeros = 0
  for (let index = 0; index < numeros.length; index += 1) {
    somaNumeros += numeros[index]
  }
  return somaNumeros;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);
