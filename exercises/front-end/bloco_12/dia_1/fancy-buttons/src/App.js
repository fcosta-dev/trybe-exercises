import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super() // É chamada para garantir que a lógica interna do React rode **antes** da sua. Se não for assim, o código não funcionará
    /* Para definir um estado inicial ao componente, a ser definido
    no momento em que o componente for colocado na tela, faça uma atribuição
    de um objeto à chave `state` do `this`, ou seja, ao `this.state`*/
    this.state = {
      numeroDeCliquesB01: 0, // Contador de cliques do Botão 01
      numeroDeCliquesB02: 0, // Contador de cliques do Botão 02
      numeroDeCliquesB03: 0  // Contador de cliques do Botão 03
    }
    this.handleClick = this.handleClickB01.bind(this) // Essa função vincula "manualmente" o `this` à nossa função.
    this.handleClick = this.handleClickB02.bind(this)
    this.handleClick = this.handleClickB03.bind(this)
  }

  handleClickB01 = () => {
    /* Com o bind feito logo acima o objeto `this`, já acessível para nossa função!
    Com isso, podemos acessar as `props`, estado do componente e tudo o mais daqui de dentro */
    /* Passando uma callback à função setState, que recebe de parâmetros
    o estado anterior e as props do componente, você garante que as atualizações
    do estado acontecerão uma depois da outra! */
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliquesB01: estadoAnterior.numeroDeCliquesB01 + 1
    }))
    // Para o console log abaixo precisamos simular o passe de informações da contagem de números para que a função gere a checagem e retorne o nome da cor.
    console.log(`Botão 01: ${this.mudaCorDoBotao(this.state.numeroDeCliquesB01)}`)
  }
  handleClickB02 = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliquesB02: estadoAnterior.numeroDeCliquesB02 + 1
    }))
    console.log(`Botão 02: ${this.mudaCorDoBotao(this.state.numeroDeCliquesB02)}`)
  }
  handleClickB03 = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliquesB03: estadoAnterior.numeroDeCliquesB03 + 1
    }))
    console.log(`Botão 03: ${this.mudaCorDoBotao(this.state.numeroDeCliquesB03)}`)
  }

  mudaCorDoBotao(qtdDeClicks) { // Essa função recebe a Quantidade de Clicks que foi feita, através do state.numerodeCliques de cada botão
    return qtdDeClicks % 2 === 0 ? 'green' : 'white'
  }

  render() {
    /* Faço uma descontrução do this.state para pegar as variáveis de click dos botões que estão dentro do state */
    const { numeroDeCliquesB01, numeroDeCliquesB02, numeroDeCliquesB03} = this.state
    /* Para LER o estado, preciso usar o `this.state.chaveDoMeuEstado` */
    return (
      <div className="Botoes">
        <button
          onClick={this.handleClickB01}
          className="Botao02"
          style={ { backgroundColor: this.mudaCorDoBotao(numeroDeCliquesB01) } } // Para acessar fora do render eu tenho que acessar pelo "this." e passo no parametro qual a variável do state que está efetuando a contagem daquele botão. Consequentemente me retorna a posição sobre aquele contador específico que eu pedi e eu altero só no botão necessário.
          >Botão 1 | Contador: {this.state.numeroDeCliquesB01}</button> { /* Para acessar o número de clicks dado eu tenho que acessar pelo "this." */ }
        <button
          onClick={this.handleClickB02}
          className="Botao02"
          style={ { backgroundColor: this.mudaCorDoBotao(numeroDeCliquesB02) } }
          >Botão 2 | Contador: {this.state.numeroDeCliquesB02}</button>
        <button
          onClick={this.handleClickB03}
          className="Botao03"
          style={ { backgroundColor: this.mudaCorDoBotao(numeroDeCliquesB03) } }
          >Botão 3 | Contador: {this.state.numeroDeCliquesB03}</button>
      </div>
    );
  }
}

export default App;
