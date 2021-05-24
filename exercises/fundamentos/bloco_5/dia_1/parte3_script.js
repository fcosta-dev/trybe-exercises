//Alterando cor de fundo do Header
const header = document.getElementById('header-container');
header.style.backgroundColor = "green";

//Coloca cor nos títulos do primeiro quadrante
const titulosdeemergencia = document.querySelectorAll('.emergency-tasks h3')
for (let index = 0; index < titulosdeemergencia.length; index += 1) {
  titulosdeemergencia[index].style.backgroundColor = 'purple';
}

//Coloca cor nos títulos do segundo quadrante
const titulosdenaoemergencia = document.querySelectorAll('.no-emergency-tasks h3')
for (let index = 0; index < titulosdenaoemergencia.length; index += 1) {
  titulosdenaoemergencia[index].style.backgroundColor = 'black';
}

//Coloca cor de fundo no primeiro quadrante
const primeiroquadro = document.getElementsByClassName('emergency-tasks')
primeiroquadro[0].style.backgroundColor = 'orange';

//Coloca cor de fundo no segundo quadrante
const segundoquadro = document.getElementsByClassName('no-emergency-tasks')
segundoquadro[0].style.backgroundColor = 'yellow';

//Coloca cor de fundo no rodapé
const rodape = document.getElementById('footer-container')
rodape.style.backgroundColor = 'green';

//Coloca cor de fundo no body
const corpodapagina = document.getElementById('container')
corpodapagina.style.backgroundColor = 'gray';
