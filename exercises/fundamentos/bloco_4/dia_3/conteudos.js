let fruits = [3, 4, 10, 1, 12];

let soma = 0;

for (let index = 0; index < fruits.length; index += 1) {
  soma += fruits[index];
}
console.log("Resultado: " + soma);
if (soma > 15) {
  console.log("É maior que 15!")
}
else {
  console.log("É menor que 16!")
}