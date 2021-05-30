// Constantes de Elementos
window.onload = function() {
  const elementMain = document.querySelector('.main')
  const elementTexts = document.querySelectorAll('.textLorem')
  const elementButtonsBackground = document.querySelectorAll('#corDeFundo>button');
  const elementButtonsTextColor = document.querySelectorAll('#corDoTexto>button');
  const elementButtonsFontSize = document.querySelectorAll('#tamanhoDaFonte>button');
  const elementButtonsEspacamento = document.querySelectorAll('#espacamentoEntreLinhas>button');
  const elementButtonsFontType = document.querySelectorAll('#tipoDaFonte>button');

  // Funções
  function mudaCorBackground(cor) {
    switch (cor) {
      case 'Vermelho':
        cor = 'Red';
        break;
      case 'Verde':
        cor = 'Green';
        break;
      case 'Azul':
        cor = 'Blue';
        break;
    }
    elementMain.style.backgroundColor = cor;
    localStorage.setItem("background", cor)
  }
  function mudaCorTexto(cor) {
    switch (cor) {
      case 'Vermelho':
        cor = 'Red';
        break;
      case 'Verde':
        cor = 'Green';
        break;
      case 'Azul':
        cor = 'Blue';
        break;
    }
    elementMain.style.color = cor;
    localStorage.setItem("fontcolor", cor)
  }
  function mudaFontSize(tamanho) {
    elementMain.style.fontSize = tamanho;
    localStorage.setItem("fontsize", tamanho)
  }
  function mudaEspacamento(tamanho) {
    for (let index = 0; index < elementTexts.length; index +=1) {
      elementTexts[index].style.lineHeight = tamanho;
    }
    localStorage.setItem("espacamento", tamanho)
  }
  function mudaFonte(nome) {
    for (let index = 0; index < elementTexts.length; index +=1) {
      elementTexts[index].style.fontFamily = nome;
    }
    localStorage.setItem("fontfamily", nome)
  }

  // EVENTOS
  // *Altera Background Color*
  for (let index = 0; index < elementButtonsBackground.length; index += 1) {
    elementButtonsBackground[index].addEventListener("click", function(event) {
      mudaCorBackground(event.target.innerHTML)
    })
  }
  // *Altera Cor do Texto*
  for (let index = 0; index < elementButtonsTextColor.length; index += 1) {
    elementButtonsTextColor[index].addEventListener("click", function(event) {
      mudaCorTexto(event.target.innerHTML)
    })
  }
  // *Altera Tamanho do Texto*
  for (let index = 0; index < elementButtonsFontSize.length; index += 1) {
    elementButtonsFontSize[index].addEventListener("click", function(event) {
      mudaFontSize(event.target.innerHTML)
    })
  }
  // *Altera Espaçamento Entre Linhas*
  for (let index = 0; index < elementButtonsEspacamento.length; index += 1) {
    elementButtonsEspacamento[index].addEventListener("click", function(event) {
      mudaEspacamento(event.target.innerHTML)
    })
  }
  // *Muda Fonte*
  for (let index = 0; index < elementButtonsFontType.length; index += 1) {
    elementButtonsFontType[index].addEventListener("click", function(event) {
      mudaFonte(event.target.innerHTML)
    })
  }

  function inicializar() {
    //Seta os parametros conforme foi padronizado pelo usuário usando localstorage
    let backgroundTrue = localStorage.getItem("background")
    if (backgroundTrue) mudaCorBackground(backgroundTrue)

    let fontcolorTrue = localStorage.getItem("fontcolor")
    if (fontcolorTrue) mudaCorTexto(fontcolorTrue)

    let fontsizeTrue = localStorage.getItem("fontsize")
    if (fontsizeTrue) mudaFontSize(fontsizeTrue)

    let espacamentoTrue = localStorage.getItem("espacamento")
    if (espacamentoTrue) mudaEspacamento(espacamentoTrue)

    let fontfamilyTrue = localStorage.getItem("fontfamily")
    if (fontfamilyTrue) mudaFonte(fontfamilyTrue)
  }

  inicializar()
} 