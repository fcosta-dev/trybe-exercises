// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos. Ou seja:
// Dica: use parâmetro rest .
const assert = require('assert');

// escreva sum abaixo
const sum = (...numeros) => {
  return numeros
  .reduce((total, numero) => total + numero, 0)
}
console.log(sum(1, 3, 4)) // 8

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);