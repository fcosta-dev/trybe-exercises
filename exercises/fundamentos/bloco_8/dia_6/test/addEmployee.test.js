const assert = require('assert');
const zoo = require('../src/zoo');
const data = require('../src/data');

describe('Implemente a função addEmployee', () => {
  it('Adiciona um funcionário no fim da lista', () => {
    zoo.addEmployee('39800c14-4b76-454a-858d-2f8d168146a7', 'John', 'Doe');
    assert.strictEqual(data.employees.length, 9);

    let lastEmployee = data.employees[8];
    assert.strictEqual(lastEmployee.id, '39800c14-4b76-454a-858d-2f8d168146a7');
    assert.strictEqual(lastEmployee.firstName, 'John');
    assert.strictEqual(lastEmployee.lastName, 'Doe');
    assert.deepStrictEqual(lastEmployee.managers, []);
    assert.deepStrictEqual(lastEmployee.responsibleFor, []);

    zoo.addEmployee('4141da1c-a6ed-4cf7-90c4-99c657ba4ef3', 'Jane', 'Doe',
      [
        '546fe3d4-2d81-4bb4-83a7-92d5b7048d17',
        'a67a36ee-3765-4c74-8e0f-13f881f6588a',
      ],
      [
        'ee6139bf-b526-4653-9e1e-1ca128d0ad2e',
        '210fcd23-aa7b-4975-91b7-0230ebb27b99',
      ]);
    assert.strictEqual(data.employees.length, 10);

    lastEmployee = data.employees[9];
    assert.strictEqual(lastEmployee.id, '4141da1c-a6ed-4cf7-90c4-99c657ba4ef3');
    assert.strictEqual(lastEmployee.firstName, 'Jane');
    assert.strictEqual(lastEmployee.lastName, 'Doe');
    assert.deepStrictEqual(lastEmployee.managers,
      [
        '546fe3d4-2d81-4bb4-83a7-92d5b7048d17',
        'a67a36ee-3765-4c74-8e0f-13f881f6588a',
      ]);
    assert.deepStrictEqual(lastEmployee.responsibleFor, [
      'ee6139bf-b526-4653-9e1e-1ca128d0ad2e',
      '210fcd23-aa7b-4975-91b7-0230ebb27b99',
    ]);

    assert.strictEqual(data.employees.length, 10);
  });
});
