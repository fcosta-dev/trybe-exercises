const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() { // FAZ A MÉDIA
  const nomeEMedia = students
    .map((elemento, index) => ({
      name: elemento,
      average: (grades[index]
        .reduce((acumulador, valorAtual) => acumulador + valorAtual, 0) / grades[index].length)
    }))
  
  return nomeEMedia
}
// [
//   { name: 'Pedro Henrique', average: 7.8 },
//   { name: 'Miguel', average: 9.2 },
//   { name: 'Maria Clara', average: 8.8 }
// ]

function studentMaiorNota() { // PEGA A MAIOR NOTA
  const nomeENotaMaior = students
  .map((elemento, index) => ({
    name: elemento,
    maiorNota: grades[index]
      .reduce((acumulador, valorAtual) => ((acumulador > valorAtual) ? acumulador : valorAtual) ,0)
  }))
  return nomeENotaMaior
}
// [
//   { name: 'Pedro Henrique', maiorNota: 10 },
//   { name: 'Miguel', maiorNota: 10 },
//   { name: 'Maria Clara', maiorNota: 10 }
// ]

function studentMenorNota() { // PEGA A MENOR NOTA
  const nomeENotaMenor = students
  .map((elemento, index) => ({
    name: elemento,
    menorNota: grades[index]
      .reduce((acumulador, valorAtual) => (acumulador < valorAtual) ? acumulador : valorAtual ,10)
  }))
  return nomeENotaMenor
}
// [
//   { name: 'Pedro Henrique', menorNota: 5 },
//   { name: 'Miguel', menorNota: 8 },
//   { name: 'Maria Clara', menorNota: 7 }
// ]

console.log(studentAverage())
console.log(studentMaiorNota())
console.log(studentMenorNota())
