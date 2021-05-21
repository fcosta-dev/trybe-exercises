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

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
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

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
//Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
//Valor esperado no retorno da função: Fernanda .
let arrayDeNomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function nomeMaior(array) {
  let qtdLetras = 0
  let indiceMaiorLetras = 0
  for (let key in array) {
    if (qtdLetras < array[key].length) {
      qtdLetras = array[key].length
      indiceMaiorLetras = key
    }
  }
  return "EXERCICIO 04 - O nome com a maior quantidade de caracteres é " + array[indiceMaiorLetras] + " com " + qtdLetras + " caracteres."
}
console.log(nomeMaior(arrayDeNomes))

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
//Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
//Valor esperado no retorno da função: 2 .
let arraysNumerosQueRepetem = [2, 3, 2, 5, 8, 2, 3];

function numerosQueRepetem(array) {
  let qtdQueRepete = 0;
  let nroQueMaisRepete = array[0];
  
  for (let keys of array) {
    numeroAvaliado = array[keys];
    numeroAvaliadoRepeticoes = 0;
    for (let index in array) {
      if (numeroAvaliado == array[index]) {
        numeroAvaliadoRepeticoes += 1;
      }
    }
    if (qtdQueRepete < numeroAvaliadoRepeticoes) {
      qtdQueRepete = numeroAvaliadoRepeticoes;
      nroQueMaisRepete = numeroAvaliado;
    }
  }
  return "EXERCICIO 05 - O número que mais se repete é o " + nroQueMaisRepete + " e ele se repete " + qtdQueRepete + " vezes." 
}
console.log(numerosQueRepetem(arraysNumerosQueRepetem))

// 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
//Valor de teste: N = 5 .
//Valor esperado no retorno da função: 1+2+3+4+5 = 15 .
let n = 5

function somatodos(numero) {
  let somarNumeros = 0;
  let descritivo = ""
  for (let index = 1; index <= numero; index += 1) {
    if (index != 1) {
      descritivo += "+" + index
      somarNumeros += index
    } else {
      descritivo += index
      somarNumeros += index
    }
  }
  return "EXERCICIO 06 - A soma dos números é " + descritivo + " = " + somarNumeros
}
console.log(somatodos(n))

// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be') ;
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan') ;
// Retorno esperado: false
let stringRecebida1 = "word"
let stringRecebida2 = "ending"

function analiseStrings(stringPrincipal, stringParaAnalisar) {
  let stringPrincipalSplitada = stringPrincipal.split('');
  let stringParaAnalisarSplitada = stringParaAnalisar.split('');
  let contadorDeNumeros = 0
  let ehigual = true;
  for (let index1 = stringParaAnalisarSplitada.length; index1 > 0; index1 -= 1) {
    contadorDeNumeros += 1
    if (stringParaAnalisarSplitada[index1 -1] == stringPrincipalSplitada[stringPrincipalSplitada.length - contadorDeNumeros]) {
      ehigual = true
    } else {
      ehigual = false
    }
  }
  return "EXERCICIO 07 - A string '" + stringParaAnalisar + "' é final da string '" + stringPrincipal +"'? " + ehigual
}
console.log(analiseStrings(stringRecebida1, stringRecebida2))