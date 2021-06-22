const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
// 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947. Dica: use a função find .
function authorBornIn1947() {
  // escreva aqui o seu código
  return books.find(elemento => elemento.author.birthYear === 1947).author.name
}
console.log('EXERCÍCIO 01: ' + authorBornIn1947()) // Stephen King
assert.strictEqual(authorBornIn1947(), 'Stephen King');


// 2 - Retorne o nome do livro de menor nome. Dica: use a função forEach .
function smallerName() {
  let nameBook;
  // escreva aqui o seu código
  books.forEach((elemento) => {
    if (!nameBook || elemento.name.length < nameBook.length) {
      nameBook = elemento.name
    }
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}
console.log('EXERCÍCIO 02: ' + smallerName())
assert.strictEqual(smallerName(), 'Duna');


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
  return books.find(elemento => elemento.name.length === 26)
}

console.log(getNamedBook())
assert.deepStrictEqual('EXERCÍCIO 03: ' + getNamedBook(), expectedResult);


