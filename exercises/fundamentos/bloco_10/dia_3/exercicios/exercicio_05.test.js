// 5 - Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.
const exercicio_04 = require("./exercicio_04");


describe('Exercício 05', () => {
  test('repetir a implementação para a primeira função', () {
    exercicio_04.executaMaiuscula.mockImplementation(x => x.toLowerCase())

    expect(exercicio_04.executaMaiuscula('FERNANDO').toBe('fernando'));
    expect(exercicio_04.executaMaiuscula).toHaveBeenCalled();
    expect(exercicio_04.executaMaiuscula).toHaveBeenCalledTimes(1);
    expect(exercicio_04.executaMaiuscula).toHaveBeenCalledWith('FERNANDO');

  })
})

