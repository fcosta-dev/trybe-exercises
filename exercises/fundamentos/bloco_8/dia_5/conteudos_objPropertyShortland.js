// EXEMPLO 01 - o Javascript entende que você quer atribuir o valor de id a uma propriedade com o mesmo nome
const newUser2 = (id2, name2, email2) => {
  return {
    id2,
    name2,
    email2,
  };
};
console.log(newUser2(54, 'isabella', 'isabella@email.com'));
// { id: 54, name: 'isabella', email: 'isabella@email.com' }
// EXEMPLO 02 - 
const getPosition = (latitude, longitude) => ({
  latitude,
  longitude});
console.log(getPosition(-19.8157, -43.9542));
// { latitude: -19.8157, longitude: -43.9542 }
