// 1 - Faça o mock da funcão subtrair e teste sua chamada.
const math = require("./math")

describe('Exercicio 01 - Faça o mock da funcão subtrair e teste sua chamada.', () => {
  test("testar chamada da função subtrair", () => {
    math.subtrair = jest.fn();

    math.subtrair();
    expect(math.subtrair).toHaveBeenCalled();
  });
})

// 2 - Faça o mock da função multiplicar e implemente como retorno padrão o valor '10'. Teste a chamada e o retorno.
describe('Exercicio 02 - Faça o mock da função multiplicar e implemente como retorno padrão o valor ‘10’. Teste a chamada e o retorno.', () => {
  test("testar chamada da função multiplicar", () => {
    math.multiplicar = jest.fn();
  
    math.multiplicar();
    expect(math.multiplicar).toHaveBeenCalled();
  });

  test("testar retorno da função multiplicar com retorno de valor '10'", () => {
    math.multiplicar = jest.fn().mockReturnValue(10);
  
    math.multiplicar();
    expect(math.multiplicar()).toBe(10);
  });
})

// 3 - Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.
describe('Exercicio 03 - Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.', () => {
  test('testar a chamada da funcao que recebe dois valores', () => {
    const mockSomar = jest.spyOn(math, "somar")
    mockSomar.mockResolvedValue(5)
    mockSomar(2, 3)
    expect.assertions(1)
    expect(mockSomar).toHaveBeenCalled()
  })

  test('testar a chamada da funcao que retorna sua soma', () => {
    const mockSomar = jest.spyOn(math, "somar")
    expect.assertions(2)
    expect(mockSomar).toHaveBeenCalledWith(2, 3);
    expect(mockSomar(2, 3)).resolves.toBe(5);
  })
})


// 4 - Faça o mock da função dividir e implemente um retorno padrão com o valor '15'. Implemente também os seguintes valores para a primeira e segunda chamadas: '2' e '5'. Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.
describe('4 - Faça o mock da função dividir e implemente um retorno padrão com o valor 15. Implemente também os seguintes valores para a primeira e segunda chamadas: 2 e 5. Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.', () => {
  test('Testa chamada, retorno e parâmetros da função dividir', () => {
    const mockDividir = jest.spyOn(math, "dividir");
    mockDividir.mockReturnValue(15);
    mockDividir.mockReturnValueOnce(2);
    mockDividir.mockReturnValueOnce(5);
  
    expect(mockDividir(4, 2)).toBe(2);
    expect(mockDividir).toHaveBeenCalled();
    expect(mockDividir).toHaveBeenCalledTimes(1);
    expect(mockDividir).toHaveBeenCalledWith(4, 2);
  
    expect(mockDividir(10, 2)).toBe(5);
    expect(mockDividir).toHaveBeenCalled();
    expect(mockDividir).toHaveBeenCalledTimes(2);
    expect(mockDividir).toHaveBeenCalledWith(10, 2);
  
    expect(mockDividir(30, 2)).toBe(15);
    expect(mockDividir).toHaveBeenCalled();
    expect(mockDividir).toHaveBeenCalledTimes(3);
    expect(mockDividir).toHaveBeenCalledWith(30, 2);
  });
});

