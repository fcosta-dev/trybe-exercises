// BONUS 02: Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.
let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers(vector) {
  let resultado = [];
  let numero
  let bloco
  for (let index = 0; index < vector.length; index += 1) {
    //Guarda o primeiro bloco de array
    bloco = vector[index]
    //Faz um for no bloco de array do primeiro array
    for (let indexSub = 0; indexSub < bloco.length; indexSub += 1) {
      numero = bloco[indexSub]
      if ((numero % 2) === 0) {
        resultado.push(numero);
      }
    }
  }
  return resultado;
}
console.log(arrayOfNumbers(vector))

