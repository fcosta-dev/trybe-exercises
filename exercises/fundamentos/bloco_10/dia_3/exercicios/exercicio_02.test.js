// 2- Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.
const exercicio_01 = require('./exercicio_01')

describe('Teste do exercício 02', () => {
  test('testando ao receber dois parametros retornando a divisao do primeiro pelo segundo, ocorrendo apenas uma vez', () => {
    exercicio_01.numeroRandomico = jest.fn().mockImplementationOnce((a, b) => a / b);
    // expect.assertions(2)
    expect(exercicio_01.randomNumber).toHaveBeenCalledWith(4, 2);
    expect(exercicio_01.numeroRandomico).toHaveBeenCalledTimes(1); // quantidade de chamadas
  })
})
