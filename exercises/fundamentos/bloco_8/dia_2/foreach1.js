const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};
numbers.forEach(multipliesFor2);
// 0 * 2: 0
// 1 * 2: 2
// 2 * 2: 4
// 3 * 2: 6
// 4 * 2: 8
// 5 * 2: 10
// 6 * 2: 12
// 7 * 2: 14
// 8 * 2: 16
// 9 * 2: 18


const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];
const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};
names.forEach(convertToUpperCase);
console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]


const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];
const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};
// Adicione seu código aqui
emailListInData.forEach(showEmailList)
// O email roberta@email.com esta cadastrado em nosso banco de dados!
// O email paulo@email.com esta cadastrado em nosso banco de dados!
// O email anaroberta@email.com esta cadastrado em nosso banco de dados!
// O email fabiano@email.com esta cadastrado em nosso banco de dados!