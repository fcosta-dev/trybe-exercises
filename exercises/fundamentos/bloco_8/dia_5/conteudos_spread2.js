// Faça uma lista com as suas frutas favoritas
const specialFruit = ['abacaxi', 'melão', 'melancia'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'suco de laranja', 'leite'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));