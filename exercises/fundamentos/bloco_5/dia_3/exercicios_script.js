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

