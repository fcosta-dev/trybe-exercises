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
      cargo: '',
      alertaCargoTextArea: false
    }

    this.handleChange = this.handleChange.bind(this) // Em resumo, eu falo pra função handleChange, o this que ela vai usar, é o this desta aplicação.
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  handleMouseEnter () {
    // É feito de uma forma onde o alerta será exibido apenas uma vez
    if (this.state.alertaCargoTextArea === false) {
      alert('Preencha com cuidado esta informação.')

      this.setState({ // altera o state para true e indicando que o alerta foi exibido
        alertaCargoTextArea: true
      })
    }
  }

  handleBlur (event) {
    let { name, value } = event.target;

    if (name === 'cidade') {
      if (value.match(/^\d/)) {
        value = ''
      }
    }

    this.setState({
      [name]: value //[name] é o nome do campo e value é o valor que será alterado
    })
  }

  handleChange ({ target }) {
    // O value abaixo é o que eu digitei no campo
    let { name } = target // Pego o name do target por descontrução
    
    let value = target.type === 'checkbox' ? target.checked : target.value;

    if (name === 'name') value = value.toUpperCase();
    if (name === 'endereco') {
      value = value.replace(/[^\w\s]/gi, '')
    }

    this.setState({
      [name]: value
    })
  }
  
  render() {
    const { name, email, cpf, endereco, cidade, estado, tipo, resumo, cargo, descricao } = this.state
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
          <Cidade cidadeValue={ cidade } handleChange={ this.handleChange } handleBlur={ this.handleBlur }/>
          <Estado estadoValue={ estado } handleChange={ this.handleChange }/>
          <br/>
          <Tipo tipoValue={ tipo } handleChange={ this.handleChange }/>
        </fieldset>
        <br/>
        <fieldset>
          <legend>Dados do seu Último Emprego</legend>
          <Resumo resumoValue={ resumo } handleChange={ this.handleChange }/>
          <Cargo cargoValue={ cargo } handleMouseEnter={ this.handleMouseEnter }handleChange={ this.handleChange }/>
          <br/>
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