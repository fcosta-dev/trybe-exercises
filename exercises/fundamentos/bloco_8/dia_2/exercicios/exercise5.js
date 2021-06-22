// 5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.
const expectedResult = false;

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  return books.every((elemento) => {
    elemento.author.birthYear > 1900 && elemento.author.birthYear <= 2000
  })
}

console.log('EXERCÍCIO 05: ' + everyoneWasBornOnSecXX())
assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult);