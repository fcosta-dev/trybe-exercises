const assert = require('assert');
const zoo = require('../src/zoo');

describe('Implemente a função countAnimals', () => {

  it('Sem parâmetros, retorna animais e suas quantidades', () => {
    const expected = {
      'lions': 4,
      'tigers': 2,
      'bears': 3,
      'penguins': 4,
      'otters': 4,
      'frogs': 2,
      'snakes': 2,
      'elephants': 4,
      'giraffes': 6
    };
    const actual = zoo.countAnimals();

    assert.deepStrictEqual(actual, expected);
  });

  it('Com o nome de uma espécie de animal, retorna somente a quantidade', () => {
    let actual = zoo.countAnimals('lions');
    let expected = 4;
    assert.deepStrictEqual(actual, expected);

    actual = zoo.countAnimals('snakes');
    expected = 2;
    assert.deepStrictEqual(actual, expected);
  });
});
