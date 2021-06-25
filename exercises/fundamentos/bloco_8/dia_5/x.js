const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// Produza o mesmo resultado acima, porém utilizando array destructuring
const [saudacao, realizaSaudacao] = saudacoes;

console.log (realizaSaudacao(saudacao)); // Olá