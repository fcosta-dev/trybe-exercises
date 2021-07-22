import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()
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
    /* Agora esse log retorna o objeto `this`, já acessível para nossa função!
    Com isso, podemos acessar as `props`, estado do componente e tudo o mais daqui de dentro */
    console.log('Clicou Botão 01') // E também a mensagem no console quando clicar

    /* Passando uma callback à função setState, que recebe de parâmetros
    o estado anterior e as props do componente, você garante que as atualizações
    do estado acontecerão uma depois da outra! */
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliquesB01: estadoAnterior.numeroDeCliquesB01 + 1
    }))
  }
  handleClickB02 = () => {
    console.log('Clicou Botão 02')
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliquesB02: estadoAnterior.numeroDeCliquesB02 + 1
    }))
  }
  handleClickB03 = () => {
    console.log('Clicou Botão 03')
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliquesB03: estadoAnterior.numeroDeCliquesB03 + 1
    }))
  }


  render() {
    /* Para LER o estado, preciso usar o `this.state.chaveDoMeuEstado` */
    return (
      <div className="Botoes">
        <button onClick={this.handleClickB01} className="Botao01">{this.state.numeroDeCliquesB01}</button>
        <button onClick={this.handleClickB02} className="Botao02">{this.state.numeroDeCliquesB02}</button>
        <button onClick={this.handleClickB03} className="Botao03">{this.state.numeroDeCliquesB03}</button>
      </div>
    );
  }
}

export default App;
