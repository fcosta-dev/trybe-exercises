const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.
  Parâmetros:
  - Uma string;
  - Uma string;
  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]
  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.strictEqual(typeof productDetails('Alcool gel', 'Máscara'), 'array');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(Object.keys(productDetails('Alcool gel', 'Máscara')).length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof Object.keys(productDetails('Alcool gel', 'Máscara')), 'object')
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(productDetails('Alcool gel', 'Máscara')[0], productDetails('Alcool gel', 'Máscara')[1] )
    // Teste que os dois productIds terminam com 123.
    const produtos = productDetails('Alcool gel', 'Máscara')
    const produto1 = produtos[0].details.productId
    const produto2 = produtos[0].details.productId
    const checkProduto1 = produto1.substr((produto1.length - 3), 3)
    const checkProduto2 = produto2.substr((produto2.length - 3), 3)
    assert.strictEqual(checkProduto1, '123')
    assert.strictEqual(checkProduto2, '123')
  });
});