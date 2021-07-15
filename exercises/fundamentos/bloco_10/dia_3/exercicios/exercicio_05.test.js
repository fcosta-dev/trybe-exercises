// 5 - Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.
const exercicio_04 = require("./exercicio_04");


describe('Exercício 05', () => {
  test('repetir a implementação para a primeira função', () => {
    const eMaiuscula = jest
      .spyOn(exercicio_04, 'executaMaiuscula')
      .mockImplementation(x => x.toLowerCase())

    expect(eMaiuscula('FERNANDO')).toBe('fernando');

    expect(eMaiuscula).toHaveBeenCalled();
    expect(eMaiuscula).toHaveBeenCalledTimes(1);
    expect(eMaiuscula).toHaveBeenCalledWith('FERNANDO');

    exercicio_04.executaMaiuscula.mockRestore(); // Reseta o mock

    expect(exercicio_04.executaMaiuscula('fernando')).toBe('FERNANDO');

  })
})
