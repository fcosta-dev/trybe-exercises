// 01 - Acesse o elemento elementoOndeVoceEsta
let ondeVoceEsta = document.getElementById('elementoOndeVoceEsta');

// 02 - Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let paiOndeVoceEsta = ondeVoceEsta.parentElement;
paiOndeVoceEsta.style.color = "red";

// 03 - Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
primeiroFilhoDoFilho.innerHTML = 'Adicionado um texto ao Primeiro Filho do Filho';

// 04 - Acesse o primeiroFilho a partir de pai .
let pai = document.getElementById('pai');
let primeiroFilho = pai.firstChild

// 05 - Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
