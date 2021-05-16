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


