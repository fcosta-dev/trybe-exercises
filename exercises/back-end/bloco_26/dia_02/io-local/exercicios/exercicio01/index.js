// 1. Crie uma função que recebe três parâmetros retorna uma Promise .
// - Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
// - Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
// - Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
// - Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

function receboTresParametros(a, b, c) {
  return new Promise((resolve, reject) => {
    // Se caso o tipo de algum parâmetro não seja `number`, rejeitamos a Promise
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') reject('Informe apenas números');
  
    // Validar se o resultado é maior que 50 e resolver ou rejeitar a Promise
    const result = (a + b) * c;
    if (result < 50) {
      // Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
      return reject('Valor muito baixo');
    }
    // Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.
    resolve(result);
  });
}

// Testando a função:
receboTresParametros(15, 8, 12)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))

receboTresParametros(5, 5, 'a')
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))

receboTresParametros(5, 5, 5)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))
