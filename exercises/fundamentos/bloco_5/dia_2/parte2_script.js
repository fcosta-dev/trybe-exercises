// 01 - Crie um irmão para elementoOndeVoceEsta .
elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
let irmaoElementoOndeVoceEsta = document.createElement('div');
irmaoElementoOndeVoceEsta.innerText = "Irmão do Elemento Voce";
elementoOndeVoceEsta.appendChild(irmaoElementoOndeVoceEsta);

// 02 - Crie um filho para elementoOndeVoceEsta .
elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
let terceiroFilhodoFilho = document.createElement('div');
terceiroFilhodoFilho.innerText = "Terceiro Filho do Filho";
elementoOndeVoceEsta.appendChild(terceiroFilhodoFilho);

// 03 - Crie um filho para primeiroFilhoDoFilho .
primeiroFilhodoFilho = document.querySelector('#primeiroFilhoDoFilho')
let filhodoPrimeiroFilhodoFilho = document.createElement('div')
filhodoPrimeiroFilhodoFilho.innerText = "Filho do Primeiro Filho do Filho"
primeiroFilhoDoFilho.appendChild(filhodoPrimeiroFilhodoFilho)
console.log(filhodoPrimeiroFilhodoFilho)

// 04 - A partir desse filho criado, acesse terceiroFilho .
let terceiroFilho3 = filhodoPrimeiroFilhodoFilho.parentElement;
terceiroFilho3 = terceiroFilho3.parentElement;
terceiroFilho3 = terceiroFilho3.parentElement;
terceiroFilho3 = terceiroFilho3.children[2]
console.log(terceiroFilho3);


