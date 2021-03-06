const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1 - Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const modificaChave = (licao, chave, valor) => {
  licao[chave] = valor;
}
modificaChave(lesson2, 'turno', 'manha');

// 2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listaChaves = (objeto) => Object.keys(objeto);
console.log("EXERCÍCIO 02 - " + listaChaves(lesson1));

// 3 - Crie uma função para mostrar o tamanho de um objeto.
const mostraTamanho = (objeto) => Object.keys(objeto).length
console.log("EXERCÍCIO 03 - " + mostraTamanho(lesson1));

// 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const listaValores = (objeto) => Object.values(objeto);
console.log("EXERCÍCIO 04 - " + listaValores(lesson1));

// 5 - Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log("EXERCICIO 05 - ")
console.log(allLessons)

// 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const pegaNumeroTotaldeEstudantes = (objeto) => {
  const array = Object.keys(objeto);
  let contaEstudantes = 0;
  for (index in array) {
    contaEstudantes += objeto[array[index]].numeroEstudantes;
  }
  return contaEstudantes
}
console.log("EXERCICIO 06 - " + pegaNumeroTotaldeEstudantes(allLessons))

// 7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
// console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'
const pegaDadoPosicao = (objeto, posicao) =>  Object.values(objeto)[posicao];
console.log("EXERCICIO 07 - " + pegaDadoPosicao(lesson1, 0))


// 8 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
// console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false
const checaParChaveValor = (objeto, chave, valor) => {
  const array = Object.entries(objeto);
  let ehIgual = false
  for (let index in array) {
    if (array[index][0] === chave && array[index][1] === valor) ehIgual = true;
  }
  return ehIgual;
}
console.log("EXERCICIO 08 - " + checaParChaveValor(lesson3, 'turno', 'noite'));
console.log("EXERCICIO 08 - " + checaParChaveValor(lesson3, 'materia', 'Maria Clara'));


// Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
allLessons
const qtdAlunos = (objeto, materia) => {
  const array = Object.keys(objeto);
  let somaAlunos = 0;
  for(let index in array) {
    if (objeto[array[index]].materia === materia) {
      somaAlunos += objeto[array[index]].numeroEstudantes;
    }
  }
  return somaAlunos
}
console.log("BONUS 01 - " + qtdAlunos(allLessons, "Matemática"))

// Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:
const pegaInformacao = (objeto, nome) => {
  const allLessons = [];
  let todosEstudantes = 0;
  const array = Object.values(objeto);
  for (index in array) {
    if (array[index].professor === nome) {
      allLessons.push(array[index].materia)
      todosEstudantes += array[index].numeroEstudantes;
    }
  }
  return { lessons: allLessons, estudantes: todosEstudantes };
}

const criaRelatorio = (objeto, nome) => {
  const relatorio = {};
  relatorio.professor = nome;
  Object.assign(relatorio, pegaInformacao(objeto, nome));
  return relatorio;
}
console.log("BONUS 02")
console.log(criaRelatorio(allLessons, 'Maria Clara'));