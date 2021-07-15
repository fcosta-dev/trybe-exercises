// 3 - Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.
const exercicio_01 = require('./exercicio_01')

describe('Exercício 03', () => {
  test('recebe 3 parametros e retorna sua multiplicação', () => {
    exercicio_01.numeroRandomico = jest.fn().mockImplementation((a, b, c) => a * b * c);
    expect.assertions(4)
    expect(exercicio_01.numeroRandomico(2, 3, 4)).toBe(24)
    expect(exercicio_01.numeroRandomico).toHaveBeenCalled(); // checa se está sendo chamada
    expect(exercicio_01.numeroRandomico).toHaveBeenCalledTimes(1); // se está sendo chamada 1 vez
    expect(exercicio_01.numeroRandomico).toHaveBeenCalledWith(2, 3, 4);
  })

  test('recebe uma nova implementação, recebe um parametro e retorna o dobro', () => {
    exercicio_01.numeroRandomico.mockReset();
    exercicio_01.numeroRandomico.mockImplementation((a) => a * 2);
    expect.assertions(4)
    expect(exercicio_01.numeroRandomico(2)).toBe(4);
    expect(exercicio_01.numeroRandomico).toHaveBeenCalled();
    expect(exercicio_01.numeroRandomico).toHaveBeenCalledTimes(1);
    expect(exercicio_01.numeroRandomico).toHaveBeenCalledWith(2);
  })
})