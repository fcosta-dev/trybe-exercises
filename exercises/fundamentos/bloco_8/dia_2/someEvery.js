// O exemplo abaixo usa o some para verificar se possui algum nome que começa com a letra desejada
const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];
const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);
console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false


// O exemplo abaixo usará o every para verificar se o estudante passou em todas as matérias
const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};
const verifyGrades = (studentGrades) => (
  Object.values(studentGrades).every((grade) => grade === 'Aprovado')
);
console.log(verifyGrades(grades)); // false


// 1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false , use some ;
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];
const hasName = (arr, name) => {
  //Adicione seu código aqui
  return arr.some((elemento) => elemento === name)
}
console.log(hasName(names, 'Ana')) // true


// 2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false , use every ;
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];
const verifyAges = (arr, minimumAge) => {
  //Adicione seu código aqui
  return arr.every(elemento => elemento === minimumAge)
}
console.log(verifyAges(people, 18)); // false