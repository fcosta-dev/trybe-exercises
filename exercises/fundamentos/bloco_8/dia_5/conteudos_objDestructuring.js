// EXEMPLO 01
const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};
const { name } = product;
console.log(name); // Smart TV Crystal UHD
const { seller } = product
console.log(seller) // Casas de Minas


// EXEMPLO 02
const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};
const { a: name2, b: classAssigned, c: subject } = student;
console.log(name2); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática
