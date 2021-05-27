// 01 - Acesse o elemento elementoOndeVoceEsta
let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
console.log(elementoOndeVoceEsta);

// 02 - Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'red';
console.log(pai);

// 03 - Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild
primeiroFilhoDoFilho.innerHTML = 'Adicionado um texto ao Primeiro Filho do Filho';
console.log(primeiroFilhoDoFilho);

// 04 - Acesse o primeiroFilho a partir de pai .
const primeiroFilho = pai.firstElementChild;
console.log(primeiroFilho);

// 05 - Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;
console.log(primeiroFilho2);

// 06 - Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
const textoAtencao = elementoOndeVoceEsta.nextSibling;
console.log(textoAtencao);

// 07 - Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;
console.log(terceiroFilho);

// 08 - Agora acesse o terceiroFilho a partir de pai .
const terceiroFilho2 = pai.children[2];
console.log(terceiroFilho2)

