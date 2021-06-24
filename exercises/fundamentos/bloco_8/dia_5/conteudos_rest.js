// EXEMPLO 01
function quantosParams(...args) {
  console.log('parâmetros:', args);
  return `Você passou ${args.length} parâmetros para a função.`;
}
console.log(quantosParams(0, 1, 2));
console.log(quantosParams('string', null, [1, 2, 3], { }));
// parâmetros: [ 0, 1, 2 ]
// Você passou 3 parâmetros para a função.
// parâmetros: [ 'string', null, [ 1, 2, 3 ], {} ]
// Você passou 4 parâmetros para a função.


// EXEMPLO 02
const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88