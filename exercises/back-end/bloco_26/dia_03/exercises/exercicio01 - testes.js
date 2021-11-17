// Exercício 1

// Estruture os testes utilizando mocha e chai para um função que irá dizer se um número é "positivo", "negativo" ou "neutro":
// * Essa função irá receber um número como parâmetro e retornar uma string como resposta;
// * Quando o número passado for maior que 0 deverá retornar "positivo", quando for menor que 0 deverá retornar "negativo" e quando igual a 0 deverá retornar "neutro";
// 1. Descreva todos os cenários de teste utilizando describes ;
// 2. Descreva todos os testes que serão feitos utilizando its ;
// 3. Crie as asserções validando se os retornos de cada cenário tem o tipo e o valor esperado.


const { expect } = require('chai');

const numNaturalFn = require('./numerosNaturais')

describe('Executa a função numNaturalFn', () => {
  describe('quando o número for maior que 0', () => {
    describe('a resposta', () => {
      it('é uma "string"', () => {
        const resposta = numNaturalFn(10)

        expect(resposta).to.be.a('string')
      });

      it('é igual a "positivo"', () => {
        const resposta = numNaturalFn(10)

        expect(resposta).to.be.equals('positivo')
      });

    })
  })

})