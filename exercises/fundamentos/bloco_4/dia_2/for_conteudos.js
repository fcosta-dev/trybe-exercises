var numero = 7;
for (var contador = 1; contador <= 9; contador++) {
    console.log(numero * contador);
}


let cars = ['Saab', 'Volvo', 'BMW'];
// Antes
console.log(cars[0]); // Saab
console.log(cars[1]); // Volvo
console.log(cars[2]); // BMW
// Depois
for (let index = 0; index < cars.length; index += 1) {
  console.log(cars[index]);
}