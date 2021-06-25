// EXEMPLO 01
const person1 = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};
const { nationality = 'Brazilian' } = person1;
console.log(nationality); // Brazilian

// EXEMPLO 02
const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;
console.log(x); // 1
console.log(y); // 2
console.log(z); // 0


// EXEMPLO 03
const getNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;
const person = {
  firstName: 'João',
  lastName: 'Jr II',
};
const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};
const [firstName, lastName, nationality = (nationality === '') ? 'Brazilian' : nationality]
console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));
