import React, { Component } from 'react'
import Nome from './Nome'
import Email from './Email'
import Cpf from './Cpf'
import Endereco from './Endereco'
import Cidade from './Cidade'

class Form extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleBlur () {

  }

  handleChange ({ target }) {
    let { name, value } = target // Pego o name do target por descontrução

    if (name === 'name') value = value.toUpperCase();

    this.setState({
      [name]: value
    })
  }
  
  render() {
    const { name, email, cpf, endereco, cidade } = this.state
    return (
      <form action="">
        <h2>Formulário de Currículo</h2>
        <fieldset>
          <legend>Dados pessoais</legend>
          <Nome nameValue={ name } handleChange={ this.handleChange }/>
          <Email emailValue={ email } handleChange={ this.handleChange }/>
          <br/>
          <Cpf cpfValue={ cpf } handleChange={ this.handleChange }/>
          <br/>
          <Endereco enderecoValue={ endereco } handleChange={ this.handleChange }/>
          <br/>
          <Cidade cidadeValue={ cidade } handleChange={ this.handleChange }/>
        </fieldset>
      </form>
    )
  }
}

export default Form;