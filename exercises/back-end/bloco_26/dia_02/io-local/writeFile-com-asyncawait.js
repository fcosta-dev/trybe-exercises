// Utilizando async/await

// Acontece que nem sempre queremos utilizar essa API das Promises. Muitas vezes, queremos simplesmente buscar o resultado e pronto. E é aí que entra o async/await .
// Essas duas palavras-chave foram criadas para trabalhar com Promises como se estivéssemos trabalhando com código síncrono.
// A questão é que toda função na qual utilizamos async , automaticamente passa a retornar uma Promise, que será rejeitada em caso de erro, e resolvida em caso de sucesso.
// O resultado de usarmos async / await é que o código fica com uma sintaxe quase idêntica à sintaxe utilizada para código síncrono. Veja como fica o exemplo anterior utilizando async/await :

const fs = require('fs').promises;

async function main() {
  try {
    await fs.writeFile('./meu-arquivo.txt', 'Meu textão');
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

main()