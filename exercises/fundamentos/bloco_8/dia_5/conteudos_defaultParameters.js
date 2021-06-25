// EXEMPLO 01
// * Com erro de undefined
const greeting1 = (user) => console.log(`Welcome ${user}!`);
greeting1(); // Welcome undefined!
// * Sem erro de undefined
const greeting2 = (user = 'usuário') => console.log(`Welcome ${user}!`);
greeting2(); // // Welcome usuário!



// EXEMPLO 02
const multiply = (number, value = 1) => {
  // Escreva aqui a sua função
  return number * value
};
console.log(multiply(8)); // 8
console.log(multiply(8, 2)); // 16