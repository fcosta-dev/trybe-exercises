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
