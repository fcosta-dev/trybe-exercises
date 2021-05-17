//Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
for(let numeros of numbers){
    console.log("EXERCICIO 01 -> " + numeros)
}

// 2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
for(let soma of numbers){
    soma += 1
    console.log("EXERCICIO 02 -> " + soma)
}

// 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
let soma = 0;
for (contador = 1; contador < numbers.length; contador += 1) {
    soma = soma + numbers[contador];
}
media = soma / numbers.length
console.log("EXERCICIO 03 -> Média é: " + media)


// 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if (media > 20){
    console.log("EXERCICIO 04 -> Valor maior que 20")
}
else {
    console.log("EXERCICIO 04 -> Valor menor ou igual a 20")
}

// 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let maior = 0
for (contador = 0; contador < numbers.length; contador += 1) {
    if (maior < numbers[contador]) {
        maior = numbers[contador]
    }
}
console.log("EXERCICIO 05 -> Maior número do array numbers é: " + maior)


// 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let qtdImpares = 0;
for (contador = 0; contador < numbers.length; contador += 1) {
    if (numbers[contador] % 2 != 0) {
        qtdImpares = qtdImpares + 1
    }
}
if (qtdImpares == 0) {
    console.log("EXERCICIO 06 -> Nenhum valor ímpar encontrado")
}
else {
    console.log("EXERCICIO 06 -> Quantidade de números impares é " + qtdImpares)
}

// 7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let menorValor = 0;
for (contador = 0; contador < numbers.length; contador += 1) {
    if (contador == 0) {
        menorValor = numbers[0] 
    }
    else {
        if (menorValor > numbers[contador]) {
            menorValor = numbers[contador]
        }
    }
}
console.log("EXERCICIO 07 -> O menor valor do array numbers é: " + menorValor)

// 8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let array1a25 = []
for (contador = 1; contador <= 25; contador += 1){
    array1a25.push(contador)
}
console.log("EXERCICIO 08 -> O array é: " + array1a25)

// 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
for (contador = 0; contador < array1a25.length; contador += 1){
    console.log("EXERCICIO 09 -> " + array1a25[contador] + " / 2 = " + (array1a25[contador] / 2).toFixed(2))
}
