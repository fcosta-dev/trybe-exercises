//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:
let a = 2;
let b = 3;
let resultado = 0;
//Adição (a + b)
resultado = (a + b);
console.log('A soma de ' + a + ' + ' + b + ' é = ' + resultado);
//Subtração (a - b)
resultado = (a - b);
console.log('A diferença de ' + a + ' - ' + b + ' é = ' + resultado);
//Multiplicação (a * b)
resultado = (a * b);
console.log('A multiplicação de ' + a + ' * ' + b + ' é = ' + resultado);
//Divisão (a / b)
resultado = (a / b);
console.log('A divisão de ' + a + ' / ' + b + ' é = ' + resultado);
//Módulo (a % b)
resultado = (a % b);
console.log('O módulo de ' + a + ' % ' + b + ' é = ' + resultado);


//Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.
let c = 4;
let d = 5;
if (c > d) {
    console.log("O maior entre " + c + " e " + d + " é " + c + "!")
}
else {
    console.log("O maior entre " + c + " e " + d + " é " + d + "!")
}

//Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.
let e = 6;
let f = 7;
let g = 8;
if (e > f && e > g) {
    console.log("O maior número entre " + e + " e " + f + " e " + g + " é " + e + "!")
}
if (f > e && f > g) {
    console.log("O maior número entre " + e + " e " + f + " e " + g + " é " + f + "!")
}
if (g > e && g > f) {
    console.log("O maior número entre " + e + " e " + f + " e " + g + " é " + g + "!")
}

//Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
let valor = 9;
let resultadoValor;
if (valor > 0) {
    resultadoValor = "positive";
}
else if (valor <0) {
    resultadoValor = "negative";
}
else {
    resultadoValor = "zero"
}
console.log("O valor " + valor + " é " + resultadoValor + ".")

//Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
//Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
//Um ângulo será considerado inválido se não tiver um valor positivo.
let valorAngulo1 = 60; 
let valorAngulo2 = 60;
let valorAngulo3 = 60;
let ehTriangulo = false;
if (valorAngulo1 > 0 && valorAngulo2 > 0 && valorAngulo3 > 0) {
    if ((valorAngulo1 + valorAngulo2 + valorAngulo3) == 180) {
        ehTriangulo = true;
        console.log("A soma dos angulos é igual a 180 graus!");
    }
}
else {
    console.log("Um dos angulos é negativo!");
}
console.log("Os angulos representam um triangulo? R: " + ehTriangulo);

//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
//Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
//Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
//Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
//Exemplo: bishop (bispo) -> diagonals (diagonais)
let nomePecaXadrex = "bispo";
nomePecaXadrex = nomePecaXadrex.toLowerCase();
switch (nomePecaXadrex){
    case 'rei':
        console.log("Escolhido o Rei: O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.")
        break;
    case 'rainha':
        console.log("Escolhido a Rainha: A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.")
        break;
    case 'bispo':
        console.log("Escolhido o Bispo: O bispo move-se ao longo da diagonal. Não pode pular outras peças.")
        break;
    case 'cavalo':
        console.log("Escolhido o Cavalo: É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.")
        break;
    case 'torre':
        console.log("Escolhido a Torre: A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.")
        break;
    case 'peão':
        console.log("Escolhido o Peão: O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.")
        break;
    default:
        console.log("Peça incorreta. Seguem opções: rei, rainha, bispo, cavalo, torre, peão.")
}
//Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
//Porcentagem >= 90 -> A
//Porcentagem >= 80 -> B
//Porcentagem >= 70 -> C
//Porcentagem >= 60 -> D
//Porcentagem >= 50 -> E
//Porcentagem < 50 -> F
//O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
let notaDada = 65;
let conversaoPercentual = (notaDada / 100)
let conceito = "";
if (conversaoPercentual > 1.00 || conversaoPercentual < 0) {
    console.log("Erro encontrado!")
}
else if (conversaoPercentual >= 0.90) {
    conceito = "A";
}
else if (conversaoPercentual >= 0.80) {
    conceito = "B";
}
else if (conversaoPercentual >= 0.70) {
    conceito = "C";
}
else if (conversaoPercentual >= 0.60) {
    conceito = "D";
}
else if (conversaoPercentual >= 0.50) {
    conceito = "E";
}
else {
    conceito = "F"
}

if (conceito != "") {
    console.log("O conceito da nota " + notaDada + " tem o conceito " + conceito + " !")
}
