// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.
const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

function getNamedBook() {
  // escreva seu código aqui
  return books.find((elemento) => elemento.name.length === 26)
}
console.log('EXERCÍCIO 03: ' , getNamedBook())
assert.deepStrictEqual(getNamedBook(), expectedResult);
