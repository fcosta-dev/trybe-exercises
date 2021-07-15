// 4 - Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.
const exercicio_04 = require("./exercicio_04");
jest.mock("./exercicio_04"); // Faça o mock do arquivo

describe('Exercício 03', () => {
  test('Primeira: recebe uma string e retorna em caixa alta, depois retorna em caixa baixa', () => {
    exercicio_04.executaMaiuscula = jest.fn().mockImplementation(x => x.toLowerCase()); // nova implementação, mas agora ela deve retornar a string em caixa baixa
    expect.assertions(4)
    expect(exercicio_04.executaMaiuscula('UPPERCASE')).toBe('uppercase');
    expect(exercicio_04.executaMaiuscula).toHaveBeenCalled();
    expect(exercicio_04.executaMaiuscula).toHaveBeenCalledTimes(1);
    expect(exercicio_04.executaMaiuscula).toHaveBeenCalledWith('UPPERCASE');
  })

  test('Segunda: recebe uma string e retornar só a primeira letra, depois recebe a última', () => {
    exercicio_04.primeiraLetra = jest.fn().mockImplementation(x => x.charAt(x.length - 1));
    expect.assertions(4)
    expect(exercicio_04.primeiraLetra('fernando')).toBe('o')
    expect(exercicio_04.primeiraLetra).toHaveBeenCalled();
    expect(exercicio_04.primeiraLetra).toHaveBeenCalledTimes(1);
    expect(exercicio_04.primeiraLetra).toHaveBeenCalledWith('fernando');
  }) 
  
  test('Terceira: recebe duas strings e concatena elas, depois recebe três strings', () => {
    exercicio_04.concatenaStrings = jest.fn().mockImplementation((x, y, z) => x.concat(y, z))
    expect.assertions(4)
    expect(exercicio_04.concatenaStrings('fernando', 'da', 'costa')).toBe('fernandodacosta')
    expect(exercicio_04.concatenaStrings).toHaveBeenCalled();
    expect(exercicio_04.concatenaStrings).toHaveBeenCalledTimes(1)
    expect(exercicio_04.concatenaStrings).toHaveBeenCalledWith('fernando', 'da', 'costa')
  })
  
})