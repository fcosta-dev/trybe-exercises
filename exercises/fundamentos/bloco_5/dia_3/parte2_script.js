const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

//1. Copie esse arquivo e edite apenas ele;

// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
function mudaTech(event) {
  const elementTech = document.querySelector('.tech');
  elementTech.classList.remove('tech');
  event.target.classList.add('tech');
  input.value = '';
}
divUm.addEventListener('click', mudaTech);
divDois.addEventListener('click', mudaTech);
divTres.addEventListener('click', mudaTech);


// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';
input.addEventListener('input', (event) => {
  elementTech = document.querySelector('.tech'); 
  divUm.innerText = input.innerText
})

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?
let meuTop3 = document.querySelector('#mySpotrybefy')
meuTop3.addEventListener('dblclick', vaiParaPortifolio)

function vaiParaPortifolio() {
  window.location.href = "https://fgosuen.github.io/"
}

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo;
meuTop3.addEventListener('mouseover', mudaCor)
meuTop3.addEventListener('mouseout', voltaCor)

function mudaCor(event) {
  event.target.style.color = 'red';
}

function voltaCor(event) {
  event.target.style.color = 'unset';
}

//Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.