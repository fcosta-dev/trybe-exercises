// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
//Exemplo de palíndromo: arara .
//verificaPalindrome('arara') ;
//Retorno esperado: true
//verificaPalindrome('desenvolvimento') ;
//Retorno esperado: false


function verificaPalindrome(palavra) {
  let palavranormal = palavra.split('');
  let ehpalindromo = true;
  for (let index in palavranormal) {
    if (palavranormal[index] != palavra[(palavra.length -1) - index]){
      ehpalindromo = false
    }
  }
  return ehpalindromo
}

console.log("EXERCICIO 01 - Arara - " + verificaPalindrome('arara'));
console.log("EXERCICIO 01 - Desenvolvimento - " + verificaPalindrome('desenvolvimento'));


// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
//Array de teste: [2, 3, 6, 7, 10, 1]; .
//Valor esperado no retorno da função: 4 .
let teste = [2, 3, 6, 7, 10, 1];
function retornaIndice(array) {
  let maiorNumero = array[0];
  let maiorIndice = 0;
  for (let index = 0; index <= array.length; index += 1) {
    if (maiorNumero < array[index]) {
      maiorNumero = array[index]
      maiorIndice = index
    }  
  }
  return "EXERCICIO 02 - O maior indice é o " + maiorIndice + ". E o maior número é o " + maiorNumero + ".";
}
console.log(retornaIndice(teste))

//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
//Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
//Valor esperado no retorno da função: 6 .
let arrayDeTeste = [2, 4, 6, 7, 10, 0, -3];
function retornaIndice(array) {
  let menorNumero = array[0];
  let menorIndice = 0;
  for (let index = 0; index <= array.length; index += 1) {
    if (menorNumero > array[index]) {
      menorNumero = array[index]
      menorIndice = index
    }  
  }
  return "EXERCICIO 03 - O menor indice é o " + menorIndice + ". E o menor número é o " + menorNumero + ".";
}
console.log(retornaIndice(arrayDeTeste))

//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
//Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
//Valor esperado no retorno da função: Fernanda .
let arrayDeNomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function nomeMaior(array) {
  let 
  for (let keys in array) {

  }
  return "EXERCICIO 04 - O menor indice é o "
}
console.log(nomeMaior(arrayDeNomes))