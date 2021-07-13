function randomRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
module.exports = { randomRgbColor };


//******************************************* */
const service = require('./service');

test("#randomRgbColor", () => {
  // testando se a função foi chamada e qual seu retorno
  service.randomRgbColor = jest
    .fn() // Estamos dizendo ao teste que, a partir daquele momento, estamos tomando controle da função service.randomRgbColor e que ela será uma simulação da função original.
    .mockReturnValue("rgb(255, 255, 255)"); // mockReturnValue define um valor padrão de retorno

  service.randomRgbColor();
  expect(service.randomRgbColor).toHaveBeenCalled();
  expect(service.randomRgbColor()).toBe("rgb(255, 255, 255)");
});