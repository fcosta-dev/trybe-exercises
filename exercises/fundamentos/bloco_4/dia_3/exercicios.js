// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .
let n = 5;
let imprimeAsteriscos = "";
console.log ("EXERCICIO 01");
if (n >1) {
  for (let index = 0; index < n; index += 1) {
    for(let asteriscos = 0; asteriscos < n; asteriscos += 1) {
      imprimeAsteriscos = imprimeAsteriscos + "*";
    }
    console.log(imprimeAsteriscos);
    imprimeAsteriscos = "";
  }   
}
//RESULTADO EXERCICIO 01
//*****
//*****
//*****
//*****
//*****
// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.
imprimeAsteriscos = "";
console.log("EXERCICIO 02");
for (index = 0; index < n; index += 1){
  imprimeAsteriscos = imprimeAsteriscos + "*";
  console.log(imprimeAsteriscos);
}
//RESULTADO EXERCICIO 02
//*
//**
//***
//****
//*****
// 3- Agora inverta o lado do triângulo.
let imprime = "";
let posicao = n;
console.log("EXERCICIO 03");
for (let linhaIndex = 0; linhaIndex < n; linhaIndex += 1){ //conta de 0 a 4
  for(let colunaIndex = 0; colunaIndex <= n; colunaIndex += 1){ //conta de 0 a 5
    if(colunaIndex < posicao) { //Se o índice da coluna é menor que posicao
      imprime = imprime + " ";
    } else {
      imprime = imprime + "*";
    }
  }
  console.log(imprime);
  imprime = "";
  posicao -= 1
}
//RESULTADO EXERCICIO 03
//     *
//    **
//   ***
//  ****
// *****
//4- Depois, faça uma pirâmide com n asteriscos de base:
imprime = "";
let meio = (n+1)/2
let controleEsquerdo = meio;
let controleDireito = meio;
console.log("EXERCICIO 04");
for (linhaIndex = 0; linhaIndex <= meio; linhaIndex += 1){ //conta de 0 a 5
  for(colunaIndex = 0; colunaIndex <= n; colunaIndex += 1){ //conta de 0 a 5
    if(colunaIndex > controleEsquerdo && colunaIndex < controleDireito) {
      imprime = imprime + "*";
    } else {
      imprime = imprime + " ";
    }
  }
  console.log(imprime);
  imprime = "";
  controleDireito += 1;
  controleEsquerdo -= 1;
}
//RESULTADO EXERCICIO 04
//      
//   *  
//  *** 
// *****
