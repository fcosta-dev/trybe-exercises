// INFORMAÇÕES INICIAIS
let arrayDeRetorno = []; // Variável que guarda arrays de retorno - onde é guardado o carrinho como array
let elementOlCarrinho


function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}


// *********************************************
// Requisito 01 - CHAMA OS PRODUTOS PARA A TELA
// *********************************************
const fetchProdutos = (QUERY) => { // Conecta na API e busca o item QUERY
  //Posiciona o elemento dentro do .items (que é o noome do grupo onde vai estar todos itens)
  const loadingId = document.querySelector('#loading')
  const itemsSection = document.querySelector('.items');
  fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`) // chama a API
    .then((response) => response.json())
    .then((produtos) => { produtos.results
      .forEach(({ id, title, thumbnail }) => {
        itemsSection.appendChild( // Fala que os itens abaixo serão filhos do grupo .items
          createProductItemElement({ // Adiciona os produtos ao abrir a pagina
            sku: id,
            name: title,
            image: thumbnail
          })
        )
      })
      loadingId.remove() // requisito 07
    })
}

const getProdutos = async () => { // requisito 01
  try {
    await fetchProdutos('computador'); // Conjunto de itens a procurar
  } catch (error) {
    alert('Ocorreu um erro ao buscar o produto');
  }
};

// *********************************************************
// Requisito 02 - POSSIBILITA ADICIONAR PRODUTOS NO CARRINHO
// *********************************************************
const addItemNoCarrinho = () => { // Identifica que está sendo clicado no 'Adicionar ao carrinho'
  const botaoAddItemNoCarrinho = document.querySelector('.items');
  botaoAddItemNoCarrinho.addEventListener('click', (evento) => {
    if (evento.target.className === 'item__add') {
      requisicaoAddItem(evento)
    }
  })
}

const requisicaoAddItem = (evento) => {
  const buscaClasseItem = evento.target.parentElement.querySelector('span.item__sku') // busca a classe que tem o item dentro através do parentElement que retorna o elemento pai
  const idItem = buscaClasseItem.innerText // mostra o texto da classe encontrada
  fetch(`https://api.mercadolibre.com/items/${idItem}`)
    .then((response) => response.json())
    .then((objeto) => {
      const item = { sku: objeto.id, name: objeto.title, salePrice: objeto.price }
      localStorage.setItem(objeto.id, JSON.stringify(item)); // requisito 04 - stringify transforma em string para colocar chave/valor no localstorage
      elementOlCarrinho.appendChild(createCartItemElement(item)); // Adiciona o item
      arrayDeRetorno.push({ sku: objeto.id, salePrice: objeto.price })
      somaCarrinho();
    })
    .catch((error) => {
      window.alert(error);
    });
}

// ******************************************************************
// Requisito 03 - REMOVE O ITEM DO CARRINHO DE COMPRAS AO CLICAR NELE
// ******************************************************************
function cartItemClickListener(event) { // requisito 03
  const removeItemLocalStorage = event.target.innerText.substring(5, 18);
  console.log("removeItemLocalStorage: " + removeItemLocalStorage)
  removeCarrinho(removeItemLocalStorage) // Chama a função e remove item do carrinho
  console.log("event.target: " + event.target)
  elementOlCarrinho.removeChild(event.target)
}

const removeCarrinho = (itemRemover) => { // requisito 03
  const excluir = arrayDeRetorno
    .find((elemento) => elemento.sku === itemRemover);
  console.log("arrayDeRetorno: " + arrayDeRetorno)
  arrayDeRetorno // Percorre o arrayDeRetorno
    .forEach((elemento, index) => {
      if (elemento === excluir) {
        arrayDeRetorno.splice(index, 1); // Splice altera conteudos de uma lista
        localStorage.removeItem(itemRemover); // Remove item do LocalStorage
      }
    });
  return somaCarrinho(); // atualiza somatória com a remoção do item
};

// *****************************************************
// Requisito 04 - CARREGUE O CARRINHO PELO LOCAL STORAGE
// *****************************************************
const addStorageCarrinho = () => { // Armazena no Local Storage o HTML do carrinho
  localStorage.setItem('carrinho', elementOlCarrinho.innerHTML)
}

const pegaValoresLS = () => {
  const valoresLocalStorage = Object.values(localStorage);
  if (valoresLocalStorage.length > 0) {
    valoresLocalStorage
      .forEach((item) => {
        const elemento = JSON.parse(item); // constroi o elemento com dados do JSON
        elementOlCarrinho.appendChild(createCartItemElement(elemento))
        arrayDeRetorno.push({ sku: elemento.sku, salePrice: elemento.salePrice });
        somaCarrinho() // Puxa a soma do carrinho
      })
  }
}

// *******************************************************
// Requisito 05 - SOME O VALOR TOTAL DOS ITENS DO CARRINHO
// *******************************************************
// total-price
const somaCarrinho = () => {
  const total = document.querySelector('.total-price'); // Pega a classe onde vai jogar o total
  let resultado;
  let soma = 0;
  if (elementOlCarrinho.childNodes.length >= 1) { // ChildNodes retorna o HTML Collection com todos os nós filhos
    for(let index = 0; index < arrayDeRetorno.length; index += 1) {
      soma += arrayDeRetorno[index].salePrice;
    }
    resultado = Math.round(soma * 100) / 100 // Math.round retorna o valor de um número arredondado para o inteiro mais proximo
    total.innerHTML = resultado.toFixed(2); // mostra resultado final, com duas casas decimais
  } else {
    total.innerHTML = 0.00.toFixed(2); // mostra 0 se o carrinho estiver vazio
  }
};

// ***********************************************************
// Requisito 06 - FAZER FUNCIONAR O BOTAO DE ESVAZIAR CARRINHO
// ***********************************************************
function esvaziaCarrinho() {
  const botaoEsvaziarCarrinho = document.querySelector('.empty-cart');
  botaoEsvaziarCarrinho.addEventListener('click', () => {
    localStorage.clear() // Esvazia o LocalStorage que contem o carrinho
    const itensCarrinho = document.querySelectorAll('.cart__item'); // seleciona todos itens do carrinho
    for (let index = itensCarrinho.length; index > 0; index -= 1) {
      elementOlCarrinho.removeChild(itensCarrinho[index -1]); // remove o item
    }
    arrayDeRetorno = []; // Esvazia o array que armazena internamente o carrinho
    somaCarrinho() // Executa a soma para atualizar total sem itens
  })
}

// ****************************************************************
// Requisito 07 - ADICIONAR TEXTO DE LOADING DURANTE REQUISIÇÃO API
// ****************************************************************
// Adicionado resolução dentro do requisito 01 onde automaticamente é colocado um loading dentro do index.html e é retirado na resposta do fetch da API
// 
window.onload = function onload() {
  elementOlCarrinho = document.querySelector('.cart__items'); // Seleciona a OL de lista de carrinho

  getProdutos() // requisito 01
  addItemNoCarrinho() // requisito 02
  pegaValoresLS() // requisito 04
  somaCarrinho() // requisito 05
  esvaziaCarrinho() // requisito 06
}

