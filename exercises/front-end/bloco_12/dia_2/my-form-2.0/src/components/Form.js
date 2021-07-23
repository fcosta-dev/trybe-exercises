import React, { Component } from 'react'
import Nome from './Nome'
import Email from './Email'
import Cpf from './Cpf'
import Endereco from './Endereco'
import Cidade from './Cidade'
import Estado from './Estado'
import Tipo from './Tipo'
import Resumo from './Resumo'
import Cargo from './Cargo'
import Consolidado from './Consolidado'
import Limpar from './Limpar'
import Descricao from './Descricao'

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipo: '',
      textarea: '',
      cargo: ''
    }

    this.handleChange = this.handleChange.bind(this) // Em resumo, eu falo pra função handleChange, o this que ela vai usar, é o this desta aplicação.
  }

  handleMouseEnter () {

  }

  handleBlur () {

  }

  handleChange ({ target }) {
    // O value abaixo é o que eu digitei no campo
    let { name } = target // Pego o name do target por descontrução
    
    let value = target.type === 'checkbox' ? target.checked : target.value;

    if (name === 'name') value = value.toUpperCase();

    this.setState({
      [name]: value
    })
  }
  
  render() {
    const { name, email, cpf, endereco, cidade, estado, tipo, resumo, cargo } = this.state
    return (
      <form action="">
        <h2>Formulário de Currículo</h2>
        <fieldset>
          <legend>Dados Pessoais</legend>
          <Nome nameValue={ name } handleChange={ this.handleChange }/>
          <Email emailValue={ email } handleChange={ this.handleChange }/>
          <br/>
          <Cpf cpfValue={ cpf } handleChange={ this.handleChange }/>
          <br/>
          <Endereco enderecoValue={ endereco } handleChange={ this.handleChange }/>
          <br/>
          <Cidade cidadeValue={ cidade } handleChange={ this.handleChange }/>
          <Estado estadoValue={ estado } handleChange={ this.handleChange }/>
          <br/>
          <Tipo tipoValue={ tipo } handleChange={ this.handleChange }/>
        </fieldset>
        <br/>
        <fieldset>
          <legend>Dados do seu Último Emprego</legend>
          <Resumo resumoValue={ resumo } handleChange={ this.handleChange }/>
          <Cargo cargoValue={ cargo } handleMouseEnter={ this.handleMouseEnter }handleChange={ this.handleChange }/>
          <Descricao descricaoValue={ descricao } handleChange={ this.handleChange }/>
        </fieldset>
        <br/>
        <Consolidado handleClick={ this.handleClick }/>
        <Limpar />
      </form>
    )
  }
}

export default Form;