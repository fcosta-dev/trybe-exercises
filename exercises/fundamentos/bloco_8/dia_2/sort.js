// Ela permite ordenar um array de acordo com algum critério estabelecido
const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food); // [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]


// Se deseja ordenar de forma numérica crescente, é necessário passar a função a seguir:
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points); // [1, 5, 10, 25, 40, 100]


// 1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente.
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];
// Adicione se código aqui
people.sort((a, b) => a.age - b.age);
console.log(people);
// [
//   { name: 'José', age: 16 },
//   { name: 'Mateus', age: 18 },
//   { name: 'Bruna', age: 19 },
//   { name: 'Cláudia', age: 20 },
//   { name: 'Ana', age: 23 }
// ]

// 2 - Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente.
const pessoas = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];
// Adicione se código aqui
pessoas.sort((a, b) => b.age - a.age);
console.log(pessoas);
// [
//   { name: 'Ana', age: 23 },
//   { name: 'Cláudia', age: 20 },
//   { name: 'Bruna', age: 19 },
//   { name: 'Mateus', age: 18 },
//   { name: 'José', age: 16 }
// ]