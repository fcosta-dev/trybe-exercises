// Recebe como parametro um tamanho e uma quantidade
const randomize = (length, qtd) => {
  // Cria um array vazio
  const random = [];

  // Enquanto o o tamanho for menor que o tamanho que recebido de parametro faça...
  while (random.length < length) {
    // Math.round arredonda para o próximo número inteiro acima
    // Math.random retorna um número aleatório de acordo com intervalo definido, neste caso a variável "qtd"
    const randomNumber = Math.round(Math.random() * qtd);
    // Se o número gerado não estiver incluso no array, então...
    if (!random.includes(randomNumber)) {
      // Faz um push adicionando o número gerado no array
      random.push(randomNumber);
    }
  }
  // Retorna para a variável que chamou a função o array final gerado randomicamente
  return random;
};

export default randomize;
