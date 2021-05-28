function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
//Exercício 1:
//O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
//Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
//Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
//Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;

const elementUl = document.querySelector('#days')

for (let index = 0; index < dezDaysList.length; index += 1) {
  adicionaLi(elementUl, dezDaysList, index);
}

function adicionaLi(elementUl, array, contador) {
  const elementLi = document.createElement('li')
  elementLi.innerText = array[contador];
  elementLi.className = checaData(array, contador);
  elementUl.appendChild(elementLi);
}

function checaData(array, contador) {
  //Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
  let nomeDaClasse = 'day'
  if ((array[contador] === 24) || (array[contador] === 25) || (array[contador] === 31)) {
    nomeDaClasse += ' holiday';
  }
  //Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
  if ((array[contador] === 4) || (array[contador] === 11) || (array[contador] === 18) || (array[contador] === 25)) {
    nomeDaClasse += ' friday';
  }
  return nomeDaClasse;
}

// Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
criaBotao("Feriados")
function criaBotao(stringRecebida) {
  const elementDivButtons = document.querySelector('.buttons-container');
  const Button = document.createElement('button');
  Button.innerText = stringRecebida;
  Button.id = 'btn-holiday';
  elementDivButtons.appendChild(Button);
}

//Exercício 3:
//Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
//É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
const elementButton = document.querySelector('#btn-holiday');
elementButton.addEventListener('click', mudaCores);

function mudaCores() {
  const elementHoliday = document.querySelectorAll('.holiday');
  for (let index = 0; index < elementHoliday.length; index +=1) {
    if (elementHoliday[index].style.color == 'red') {
      elementHoliday[index].style.color = 'rgb(119,119,119)';
    } else {
      elementHoliday[index].style.color = 'red';
    }
  }
}

//Exercício 4:
//Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
//Adicione a este botão o ID "btn-friday" .
//Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
const elementDivButtons = document.querySelector('.buttons-container');

criaBotao2('Sexta-feira')

function criaBotao2(stringRecebida) {
  const elementButtonFriday = document.createElement('button');
  elementButtonFriday.innerText = stringRecebida
  elementButtonFriday.id = 'btn-friday'
  elementDivButtons.appendChild(elementButtonFriday)
}

//Exercício 5:
//Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
//É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
const elementButtonSexta = document.querySelector('#btn-friday');

elementButtonSexta.addEventListener('click', updateText);

let dezFridays = [ 4, 11, 18, 25 ];

function updateText() {
  const fridayDays = document.querySelectorAll('.friday')
  for (let index = 0; index < fridayDays.length; index += 1){
    if(fridayDays[index].innerText == 'Sextou'){
      console.log
      fridayDays[index].innerText = dezFridays[index];
    } else {
      fridayDays[index].innerText = 'Sextou'
    }
  }
}

//Exercício 6:
//Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
//Dica - Propriedade: event.target .

const daysCalendar = document.querySelector('#days');
daysCalendar.addEventListener('mouseover', upperText);
daysCalendar.addEventListener('mouseout', lowerText);

function upperText(event){
  event.target.style.fontSize = '30px'
  event.target.style.fontWeight = '600';
}
function lowerText(event){
  event.target.style.fontSize = '20px'
  event.target.style.fontWeight = '200';
}

// Exercício 7:
// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
function adicionaTarefa(stringTarefa) {
  const elementDivTasks = document.querySelector('.my-tasks');
  const elementSpan = document.createElement('span');
  elementSpan.innerHTML = stringTarefa
  elementDivTasks.appendChild(elementSpan);
}

adicionaTarefa('Cozinhar');

//Exercício 8:
//Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
//O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
//O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
function mudaCorTask(cor) {
  const elementDivTasks = document.querySelector('.my-tasks');
  const elementDivTask = document.createElement('div');
  elementDivTask.className = 'task';
  elementDivTask.style.backgroundColor = cor;
  elementDivTasks.appendChild(elementDivTask);
}

mudaCorTask('green');

//Exercício 9:
//Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
//Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};

setTaskClass();

//Exercício 10:
//Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
//Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .
function setDayColor() {
  //Busca todas as classes task selected.
  let selectedTask = document.getElementsByClassName('task selected');
  //Busca o ID com nome days = ul que contém várias li
  let days = document.querySelector('#days');
  //Busca a div com a classe .task que contém informação de cor
  let taskDiv = document.querySelector('.task');
  //Pega a cor verde) que está na div de classe .task 
  let taskColor = taskDiv.style.backgroundColor;
  
  //Adiciona o evento, quando clicar, para executar a função 
  days.addEventListener('click', abc);
  
  //Inicia a função
  function abc(event) {
    
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.backgroundColor = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.backgroundColor = 'rgb(119,119,119)';
    }
  }
}  

setDayColor();