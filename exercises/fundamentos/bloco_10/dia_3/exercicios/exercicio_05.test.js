// 5 - Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.
const exercicio_04 = require("./exercicio_04");


describe('Exercício 05', () => {
  test('repetir a implementação para a primeira função', () => {
    exercicio_04.executaMaiuscula = jest.fn().mockImplementation(x => x.toLowerCase())

    exercicio_04.executaMaiuscula.mockRestore(); // Reseta o mock

    expect(exercicio_04.executaMaiuscula('fernando')).toBe('FERNANDO');
    expect(exercicio_04.executaMaiuscula).toHaveBeenCalled();
    expect(exercicio_04.executaMaiuscula).toHaveBeenCalledTimes(1);
    expect(exercicio_04.executaMaiuscula).toHaveBeenCalledWith('fernando');

  })
})

