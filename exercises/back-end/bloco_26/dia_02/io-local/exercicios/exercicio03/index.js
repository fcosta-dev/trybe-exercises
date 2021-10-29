// 3 - Reescreva o código do exercício anterior para que utilize async/await .
// Lembre-se: a palavra chave await só pode ser utilizada dentro de funções async .

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

function gerarNumeroAleatorio(){
  return Math.floor(Math.random() * 100 + 1);
}

// Testando a função:
async function callReceboTresParametros() {
  // Cria-se um novo array de 3 posições e utilizamos o `map` para gerar um número aleatório para cada posição do Array
  const numerosAleatorios = Array.from({ length: 3 }).map(gerarNumeroAleatorio);

  try {
    const result = await receboTresParametros(...numerosAleatorios)
    console.log('Resultado: ', result, ' | Números Aleatorios: ', ...numerosAleatorios)
  } catch (err) {
    console.error('Erro: ', err)
  }
}

callReceboTresParametros();
