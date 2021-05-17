// *** Exemplo 01
let numeros = [1,2,3,4,5];
for(let numero of numeros) {
  console.log(numero);
}
// resultado: 
//1
//2
//3
//4
//5

// *** Exemplo 02
let casas = [6, 20, 50, 40]
for(let numero of casas) {
    console.log(numero)
}
// resultado: 
//6
//20
//50
//40


// *** Exemplo 03
let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}
// resultado:
// "H"
// "e"
// "l"
// "l"
// "o"

// *** Exemplo 04
let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}
// 11
// 21
// 31
console.log(arrOfNumbers);
// Resultado: [10, 20, 30]

