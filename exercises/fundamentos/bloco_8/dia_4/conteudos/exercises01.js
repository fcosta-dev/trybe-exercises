const numbers = [32, 15, 3, 2, -5, 56, 10];

// COM FOR
let sumNumbers = 0;
// A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!
for (let index = 0; index < numbers.length; index += 1) {
  sumNumbers += numbers[index];
}
console.log(sumNumbers); // 113


// COM REDUCE
const sumNumbers2 = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers2); // 113
// Ou seja:
const getSum = (result, number) => result + number;
const sumNumbers3 = numbers.reduce(getSum);
console.log(sumNumbers3); // 113


