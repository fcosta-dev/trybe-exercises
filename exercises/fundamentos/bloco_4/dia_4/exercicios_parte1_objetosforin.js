let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
//Valor esperado no console: Bem-vinda, Margarida
console.log("EXERCICIO 01 - Bem vinda, " + info.personagem)


// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.
info.recorrente = "Sim"
console.log("EXERCICIO 02 :")
console.table(info)
console.log(info)

// 3 - Faça um for/in que mostre todas as chaves do objeto.
for (let key in info) {
  console.log("EXERCÍCIO 03 - " + key);
}


// 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.