const assert = require('assert');
const zoo = require('../src/zoo');

describe('Implemente a função calculateEntry', () => {
  it('Retorna 0 se nenhum argumento for passado', () => {
    assert.strictEqual(zoo.calculateEntry(), 0);
  });

  it('Retorna 0 se um objeto vazio for passado', () => {
    assert.strictEqual(zoo.calculateEntry({}), 0);
  });

  it('Retorna o preço total a ser cobrado dado o número de adultos, crianças e idosos', () => {
    let entrants = { 'Adult': 2, 'Child': 3, 'Senior': 1 };
    let actual = zoo.calculateEntry(entrants);
    assert.strictEqual(actual, 187.94);

    entrants = { 'Adult': 1 };
    actual = zoo.calculateEntry(entrants);
    assert.strictEqual(actual, 49.99);

    entrants = { 'Senior': 1 };
    actual = zoo.calculateEntry(entrants);
    assert.strictEqual(actual, 24.99);

    entrants = { 'Child': 1 };
    actual = zoo.calculateEntry(entrants);
    assert.strictEqual(actual, 20.99);

    entrants = { 'Child': 1, 'Senior': 1 };
    actual = zoo.calculateEntry(entrants);
    assert.strictEqual(actual, 45.98);
  });
});
