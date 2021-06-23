const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
function containsA() {
  // escreva seu código aqui
  return names
  .reduce((acumulador, valorAtual) =>
    acumulador + valorAtual.split('').reduce((acumulador2, valorAtual2) => {
      if (valorAtual2 === 'a' || valorAtual2 === 'A') return acumulador2 + 1
      return acumulador2
    },0),0)
}
assert.deepStrictEqual(containsA(), 20);