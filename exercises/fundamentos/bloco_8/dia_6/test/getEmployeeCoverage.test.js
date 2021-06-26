const assert = require('assert');
const zoo = require('../src/zoo');

describe('Implemente a função getEmployeeCoverage', () => {
  it('Sem parâmetros, retorna uma lista de funcionários e os animais pelos quais eles são responsáveis', () => {
    const expected = {
      'Nigel Nelson': ['lions', 'tigers'],
      'Burl Bethea': ['lions', 'tigers', 'bears', 'penguins'],
      'Ola Orloff': ['otters', 'frogs', 'snakes', 'elephants'],
      'Wilburn Wishart': ['snakes', 'elephants'],
      'Stephanie Strauss': ['giraffes', 'otters'],
      'Sharonda Spry': ['otters', 'frogs'],
      'Ardith Azevado': ['tigers', 'bears'],
      'Emery Elser': ['elephants', 'bears', 'lions']
    };

    assert.deepStrictEqual(zoo.getEmployeeCoverage(), expected);
  });

  it('Com o id de um funcionário, retorna os animais pelos quais o funcionário é responsável', () => {
    const actual = zoo.getEmployeeCoverage('4b40a139-d4dc-4f09-822d-ec25e819a5ad');
    const expected = { 'Sharonda Spry': ['otters', 'frogs'] };
    assert.deepStrictEqual(actual, expected);
  });

  it('Com o primeiro nome de um funcionário, retorna os animais pelos quais o funcionário é responsável', () => {
    const actual = zoo.getEmployeeCoverage('Stephanie');
    expected = { 'Stephanie Strauss': ['giraffes', 'otters'] };
    assert.deepStrictEqual(actual, expected);
  });

  it('Com o último nome de um funcionário, retorna os animais pelos quais o funcionário é responsável', () => {
    const actual = zoo.getEmployeeCoverage('Azevado');
    const expected = { 'Ardith Azevado': ['tigers', 'bears'] };
    assert.deepStrictEqual(actual, expected);
  });
});
