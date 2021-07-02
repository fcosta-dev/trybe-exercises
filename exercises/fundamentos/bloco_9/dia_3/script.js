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
let arrayDeRetorno = []; // Variável que guarda arrays de retorno
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
  const elementOlCarrinho = document.querySelector('.cart__items'); // Seleciona a OL de lista de carrinho
  fetch(`https://api.mercadolibre.com/items/${idItem}`)
    .then((response) => response.json())
    .then((objeto) => {
      const item = { sku: objeto.id, name: objeto.title, salePrice: objeto.price }
      localStorage.setItem(objeto.id, JSON.stringify(item)); // requisito 04 - stringify transforma em string para colocar chave/valor no localstorage
      elementOlCarrinho.appendChild(createCartItemElement(item)); // Adiciona o item
      arrayDeRetorno.push({ sku: objeto.id, salePrice: objeto.price })
      // sumCart();
    })
    .catch((error) => {
      window.alert(error);
    });
}

// ******************************************************************
// Requisito 03 - REMOVE O ITEM DO CARRINHO DE COMPRAS AO CLICAR NELE
// ******************************************************************
function cartItemClickListener(event) {
  event.target.remove()
}

// *****************************************************
// Requisito 04 - CARREGUE O CARRINHO PELO LOCAL STORAGE
// *****************************************************



window.onload = () => {
  getProdutos() // requisito 01
  addItemNoCarrinho() // requisito 02

}

