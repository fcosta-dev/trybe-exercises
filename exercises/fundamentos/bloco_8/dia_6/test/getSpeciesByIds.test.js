const assert = require('assert');
const zoo = require('../src/zoo');

describe('Implemente a função getSpeciesByIds', () => {
  it('Caso receba nenhum parâmetro, necessário retornar um array vazio', () => {
    const actual = zoo.getSpeciesByIds();
    const expected = [];
    assert.deepStrictEqual(actual, expected);
  });

  it('Ao receber como parâmetro um único id, retorna um array com a espécie referente à esse id', () => {
    const actual = zoo.getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce');
    const expected = [{
      id: '0938aa23-f153-4937-9f88-4858b24d6bce',
      name: 'lions',
      popularity: 4,
      location: 'NE',
      residents: [
        { name: 'Zena', sex: 'female', age: 12 },
        { name: 'Maxwell', sex: 'male', age: 15 },
        { name: 'Faustino', sex: 'male', age: 7 },
        { name: 'Dee', sex: 'female', age: 14 }
      ]
    }]

    assert.deepStrictEqual(actual, expected);
  });

  it('Ao receber mais de um id, retorna um array com as espécies referentes aos ids', () => {
    const actual = zoo.getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46');
    const expected = [{
      id: '0938aa23-f153-4937-9f88-4858b24d6bce',
      name: 'lions',
      popularity: 4,
      location: 'NE',
      residents: [
        { name: 'Zena', sex: 'female', age: 12 },
        { name: 'Maxwell', sex: 'male', age: 15 },
        { name: 'Faustino', sex: 'male', age: 7 },
        { name: 'Dee', sex: 'female', age: 14 }
      ]
    },
    {
      id: 'e8481c1d-42ea-4610-8e11-1752cfc05a46',
      name: 'tigers',
      popularity: 5,
      location: 'NW',
      residents: [
        { name: 'Shu', sex: 'female', age: 19 },
        { name: 'Esther', sex: 'female', age: 17 }
      ]
    }];

    assert.deepStrictEqual(actual, expected);
  });
});
