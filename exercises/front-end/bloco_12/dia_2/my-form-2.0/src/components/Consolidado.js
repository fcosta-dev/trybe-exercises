import React, { Component } from 'react'

class Consolidado extends Component {
  render() {
    const { 
      stateAtual: {
        nome, email, cpf, endereco, cidade, estado, tipo, resumo, cargo, descricao
      }
    } = this.props

    return (
      <div>
        <h2>Dados enviados</h2>
        <p>************************** INÍCIO *************************</p>
        <h3>Pessoal</h3>
        <div> Name: { nome }</div>
        <div> Email: { email }</div>
        <div> CPF: { cpf }</div>
        <div> Endereço: { endereco }</div>
        <div> Cidade: { cidade }</div>
        <div> Estado: { estado }</div>
        <div> Tipo de residência: { tipo }</div>
        <h3>Profissional</h3>
        <div> Currículo: { resumo }</div>
        <div> Cargo: { cargo }</div>
        <div> Descrição do cargo: { descricao }</div>
        <br/>
        <br/>
        <p>*************************** FIM ***************************</p>
      </div>      
    )
  }
}

export default Consolidado;