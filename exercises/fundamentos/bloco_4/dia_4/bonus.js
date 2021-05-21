// BONUS 01 - (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
let string = "XI"


function conversaoRomada(stringRomana) {
  let stringRomanaSplitada = stringRomana.split('')
  let esquerda = ""
  let direita = ""
  let soma = 0
  for (let index = (stringRomanaSplitada.length -1); index >= 0; index -= 1) {
    //Calculando o que é o algarismo da direita e o da esquerda
    direita = stringRomanaSplitada[index];
    esquerda = stringRomanaSplitada[index -1]; 
    //Pergunta se o algarismo da direita é menor ou igual ao da esquerda, se for soma
    if (retornaRomano(direita) <= retornaRomano(esquerda)) {
      soma = soma + retornaRomano(direita)
    } else { //Se nao for diminui
      if (stringRomanaSplitada[0] == stringRomana[index]) {
        soma = soma + retornaRomano(direita)
      } else {
        soma = soma - retornaRomano(direita)
      }
    }
  }
  return "BONUS: O algarismo romano " + stringRomana + " equivale a " + soma
}
function retornaRomano(posicao) {
  switch (posicao) {
    case 'I':
      return 1
    case 'V':
      return 5
    case 'X':
      return 10
    case 'L':
      return 50
    case 'C':
      return 100
    case 'D':
      return 500
    case 'M':
      return 1000
  }    
}
console.log(conversaoRomada(string))

