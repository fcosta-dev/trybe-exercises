// Crie uma página que contenha:
// Um botão ao qual será associado um event listener ;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.
const elementoBotao = document.getElementById('botaoExercicio')
const elementoContador = document.getElementById('atualizaContador')
let clickCount = 0;
elementoBotao.addEventListener('click', function () {
  clickCount += 1;
  elementoContador.innerHTML = clickCount;
})

