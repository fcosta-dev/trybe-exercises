// Constantes de Elementos
const elementBody = document.body


// Eventos
elementBody.addEventListener('click', 'mudaCorBackground')


function mudaCorBackground() {
  const elementButtonsBackground = document.querySelectorAll('#background-color>button');
  for (let index = 0; index < elementButtonsBackground.length; index += 1 ) {
    elementBody.style.backgroundColor = elementButtonsBackground[index].innerHTML
  }
}