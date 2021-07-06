// A função hydrate recebe uma string no formato "numero bebida", e retorna a sugestão de quantos copos de água você deve beber para se hidratar. Para cada bebida, deve-se tomar um copo de água para não ter ressaca. Exemplo:
// hydrate.js
const hydrate = (string) => {
  const splitString = string.split('');
  const result = splitString.reduce((glassesOfWater, character) => {
    let parsedCharacter = parseInt(character);
    let checkCharacter = isNaN(parsedCharacter) === false;
    if (checkCharacter) { return glassesOfWater + parsedCharacter };
    return glassesOfWater;
  }, 0);

  const pluralGlass = result === 1 ? 'copo' : 'copos';
  return `${result} ${pluralGlass} de água`;
};

module.exports = hydrate;