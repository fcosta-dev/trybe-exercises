// 4 - Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.

// Funções criadas
const executaMaiuscula = (palavra) => palavra.toUpperCase(); // função para executar maiuscula
const primeiraLetra = (palavra) => palavra.charAt(0) // função para pegar primeira letra da palavra
const concatenaStrings = (string1, string2) => string1.concat(string2) // função que concatena 2 strings

describe('Exercício 03', () => {
  test('Primeira: recebe uma string e retorna em caixa alta, depois retorna em caixa baixa', () => {
    executaMaiuscula = jest.fn().mockImplementation(x => x.toLowerCase()); // nova implementação, mas agora ela deve retornar a string em caixa baixa
    // expect.assertions(4)
    expect(executaMaiuscula('UPPERCASE')).toBe('uppercase');
    expect(executaMaiuscula).toHaveBeenCalled();
    expect(executaMaiuscula).toHaveBeenCalledTimes(1);
    expect(executaMaiuscula).toHaveBeenCalledWith('UPPERCASE');
  })

  test('Segunda: recebe uma string e retornar só a primeira letra, depois recebe a última', () => {
    primeiraLetra = jest.fn().mockImplementation((x) => x.charAt(x.length - 1));
    // expect.assertions(4)
    expect(primeiraLetra('fernando').toBe('o'))
    expect(primeiraLetra).toHaveBeenCalled();
    expect(primeiraLetra).toHaveBeenCalledTimes(1);
    expect(primeiraLetra).toHaveBeenCalledWith('fernando');
  }) 
  
  test('Terceira: recebe duas strings e concatena elas, depois recebe três strings', () => {
    concatenaStrings = jest.fn().mockImplementation((x, y, z) => x.concat(y, z))
    // expect.assertions(4)
    expect(concatenaStrings('fernando', 'da', 'costa')).toBe('fernandodacosta')
    expect(concatenaStrings).toHaveBeenCalled();
    expect(concatenaStrings).toHaveBeenCalledTimes(1)
    expect(concatenaStrings).toHaveBeenCalledWith('fernando', 'da', 'costa')
  })
  
})