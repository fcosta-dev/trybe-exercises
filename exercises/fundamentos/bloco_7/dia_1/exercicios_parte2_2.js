// Crie uma função que receba uma frase e retorne qual a maior palavra.
// longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'
const longestWord = text => {
  let wordArray = text.split(' ') // Faz um array separando palavra por palavra por split
  let maxLength = 0 // Cotador de tamanho de palavra
  let resultado = ''

  for (const word of wordArray) {
      if (word.length > maxLength) {
          maxLength = word.length
          resultado = word
      }
  }

  return resultado;
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"))