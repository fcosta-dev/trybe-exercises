// arquivo math.js
const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const somar = async (a, b) => { await sleep(10000); return a + b }; // Função de somar mais lenta do mundo
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

module.exports = { somar, subtrair, multiplicar, dividir };

//*************************************************************** */
// arquivo de teste
const math = require('./math');
jest.mock("./math"); // Com o jest.mock(), podemos mockar todas funções com um só comando, diferente do jest.jn() que mocka apenas uma função.

test("#somar", () => {
  // Aqui testamos se função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno

  math.somar.mockImplementation((a, b) => a + b); //Ele aceita uma função que deve ser usada como implementação.
  math.somar(1, 2);

  expect(math.somar).toHaveBeenCalled(); // para garantir que uma função de mock/simulação foi chamada.
  expect(math.somar).toHaveBeenCalledTimes(1); // para garantir que uma função de mock foi chamada um número exato de vezes
  expect(math.somar).toHaveBeenCalledWith(1, 2); // valida quais parâmetros foram passados para a função.
  expect(math.somar(1, 2)).toBe(3);
});
