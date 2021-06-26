// 5 - Escreva a função swap , que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só:
// Dica: use array destructuring .
const myList = [1, 2, 3];

const swap = ([n1, n2, n3]) => [n3, n2, n1]

const swappedList = swap(myList);
console.log(myList) // [ 1, 2, 3 ]
console.log(swappedList) // [ 3, 2, 1 ]
