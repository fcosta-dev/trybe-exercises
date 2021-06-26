const assert = require('assert');
const zoo = require('../src/zoo');
const data = require('../src/data');


describe('Implemente a função increasePrices', () => {
  it('Ao passar uma porcentagem, incrementa todos os preços, arrendondados em duas casas decimais', () => {
    zoo.increasePrices(50);
    let expected = {
      'Adult': 74.99,
      'Senior': 37.49,
      'Child': 31.49
    };
    assert.deepStrictEqual(data.prices, expected);

    zoo.increasePrices(30);
    expected = {
      'Adult': 97.49,
      'Senior': 48.74,
      'Child': 40.94
    };
    assert.deepStrictEqual(data.prices, expected);
  });
});
