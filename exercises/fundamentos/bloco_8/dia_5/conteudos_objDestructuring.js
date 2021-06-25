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


// EXEMPLO 02 - acessar um valor de um objeto e atribuí-lo a uma variável 
const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};
const { a: name2, b: classAssigned, c: subject } = student;
console.log(name2); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática


// EXEMPLO 03 - quando queremos passar os valores de um objeto como parâmetros para uma função
const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};
const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};
printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas
