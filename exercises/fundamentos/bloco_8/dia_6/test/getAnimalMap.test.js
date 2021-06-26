const assert = require('assert');
const zoo = require('../src/zoo');

describe('Implemente a função getAnimalMap', () => {
  it('Sem parâmetros, retorna animais categorizados por localização', () => {
    const expected = {
      NE: ['lions', 'giraffes'],
      NW: ['tigers', 'bears', 'elephants'],
      SE: ['penguins', 'otters'],
      SW: ['frogs', 'snakes']
    };

    assert.deepStrictEqual(zoo.getAnimalMap(), expected);
  });

  it('Com a opção `includeNames: true` especificada, retorna nomes de animais', () => {
    const options = { includeNames: true };
    const actual = zoo.getAnimalMap(options);
    const expected = {
      NE: [
        { lions: ['Zena', 'Maxwell', 'Faustino', 'Dee'] },
        { giraffes: ['Gracia', 'Antone', 'Vicky', 'Clay', 'Arron', 'Bernard'] }
      ],
      NW: [
        { tigers: ['Shu', 'Esther'] },
        { bears: ['Hiram', 'Edwardo', 'Milan'] },
        { elephants: ['Ilana', 'Orval', 'Bea', 'Jefferson'] }
      ],
      SE: [
        { penguins: ['Joe', 'Tad', 'Keri', 'Nicholas'] },
        { otters: ['Neville', 'Lloyd', 'Mercedes', 'Margherita'] }
      ],
      SW: [
        { frogs: ['Cathey', 'Annice'] },
        { snakes: ['Paulette', 'Bill'] }
      ]
    };

    assert.deepStrictEqual(actual, expected);
  });

  it('Com a opção `sorted: true` especificada, retorna nomes de animais ordenados', () => {
    const options = { includeNames: true, sorted: true };
    const actual = zoo.getAnimalMap(options);
    const expected = {
      NE: [
        { lions: ['Dee', 'Faustino', 'Maxwell', 'Zena'] },
        { giraffes: ['Antone', 'Arron', 'Bernard', 'Clay', 'Gracia', 'Vicky'] }
      ],
      NW: [
        { tigers: ['Esther', 'Shu'] },
        { bears: ['Edwardo', 'Hiram', 'Milan'] },
        { elephants: ['Bea', 'Ilana', 'Jefferson', 'Orval'] }
      ],
      SE: [
        { penguins: ['Joe', 'Keri', 'Nicholas', 'Tad'] },
        { otters: ['Lloyd', 'Margherita', 'Mercedes', 'Neville'] }
      ],
      SW: [
        { frogs: ['Annice', 'Cathey'] }, { snakes: ['Bill', 'Paulette'] }
      ]
    };

    assert.deepStrictEqual(actual, expected);
  });

  it('Com a opção `sex: \'female\'` ou `sex: \'male\'` especificada, retorna somente nomes de animais macho/fêmea', () => {
    const options = { includeNames: true, sex: 'female' }
    const actual = zoo.getAnimalMap(options);
    const expected = {
      NE: [
        { lions: ['Zena', 'Dee'] },
        { giraffes: ['Gracia', 'Vicky'] }
      ],
      NW: [
        { tigers: ['Shu', 'Esther'] },
        { bears: [] },
        { elephants: ['Ilana', 'Bea'] }
      ],
      SE: [
        { penguins: ['Keri'] },
        { otters: ['Mercedes', 'Margherita'] }
      ],
      SW: [
        { frogs: ['Cathey', 'Annice'] },
        { snakes: ['Paulette'] }
      ]
    };

    assert.deepStrictEqual(actual, expected);
  });

  it('Com a opção `sex: \'female\'` ou `sex: \'male\'` especificada e a opção `sort: true` especificada, retorna somente nomes de animais macho/fêmea com os nomes dos animais ordenados', () => {
    const options = { includeNames: true, sex: 'female', sorted: true }
    const actual = zoo.getAnimalMap(options);
    const expected = {
      NE: [
        { lions: ['Dee', 'Zena'] },
        { giraffes: ['Gracia', 'Vicky'] }
      ],
      NW: [
        { tigers: ['Esther', 'Shu'] },
        { bears: [] },
        { elephants: ['Bea', 'Ilana'] }
      ],
      SE: [
        { penguins: ['Keri'] },
        { otters: ['Margherita', 'Mercedes'] }
      ],
      SW: [
        { frogs: ['Annice', 'Cathey'] },
        { snakes: ['Paulette'] }
      ]
    };

    assert.deepStrictEqual(actual, expected);
  });

  it('Só retorna informações ordenadas e com sexo se a opção `includeNames: true` for especificada', () => {
    let options = { sex: 'female' }
    let actual = zoo.getAnimalMap(options)['NE'][0];
    let expected = 'lions';
    assert.strictEqual(actual, expected);

    options = { sex: 'female', sorted: true }
    actual = zoo.getAnimalMap(options)['NE'][0];
    expected = 'lions';
    assert.strictEqual(actual, expected);
  });
});
