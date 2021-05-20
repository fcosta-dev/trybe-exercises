// ***Exemplo 01
let tasksList_1 = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
console.log(tasksList_1.length);
//3

// *** Exemplo 02
let tasksList_2 = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
let searchForFirstTask = tasksList_2[0];
console.log(searchForFirstTask);
// Tomar café
let searchForLastTask = tasksList_2[tasksList_2.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorro

// *** Exemplo 03
let tasksList_3 = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
tasksList_3.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
console.log(tasksList_3);
// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

// *** Exemplo 04
let tasksList_4 = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
tasksList_4.pop();  // remove a última tarefa
console.log(tasksList_4);
// [ 'Tomar café', 'Reunião' ]

// *** Exemplo 05
let tasksList_5 = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
let indexOfTask = tasksList_5.indexOf('Reunião');
console.log(indexOfTask);
// 1