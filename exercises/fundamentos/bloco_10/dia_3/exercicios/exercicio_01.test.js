// Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.
const exercicio_01 = require('./exercicio_01')

describe('Teste do exercício 01', () => {
  test('testando se a função foi chamada com retorno de 10', () => {
    exercicio_01.numeroRandomico = jest.fn().mockReturnValue(10)
    expect.assertions(1)
    expect(exercicio_01.numeroRandomico()).toBe(10)
  })

  test('testando o retorno da função com retorno padrão de 10', () => {
    // exercicio_01.numeroRandomico = jest.fn().mockReturnValue(10)
    // não adicionei essa função acima pois ela já é chamada no primeiro teste
    expect.assertions(1)
    expect(exercicio_01.numeroRandomico).toHaveBeenCalled()
  })

  test('testando quantas vezes a função foi chamada com retorno padrão de 10', () => {
    // exercicio_01.numeroRandomico = jest.fn().mockReturnValue(10)
    // não adicionei essa função acima pois ela já é chamada no primeiro teste
    expect.assertions(1)
    expect(exercicio_01.numeroRandomico).toHaveBeenCalledTimes(1)
  })
})

