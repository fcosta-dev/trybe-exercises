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
// import Limpar from './Limpar'
import Descricao from './Descricao'

const startCampos = {
  name: 'FERNANDO COSTA',
  email: 'fcosta@email.com',
  cpf: '12312312311',
  endereco: 'Meu endereço',
  cidade: 'Uberlândia',
  estado: 'Minas Gerais',
  tipo: 'Casa',
  resumo: 'Este é o meu resumo',
  cargo: 'Estudante Trybe',
  descricao: 'O dia inteiro estudando',
}
  
const startCampos2 = {
  name: '',
  email: '',
  cpf: '',
  endereco: '',
  cidade: '',
  estado: '',
  tipo: 'Casa', // Valor inicial para o Option é Casa, está como checked
  resumo: '',
  cargo: '',
  descricao: '',
  alertaCargoTextArea: false,
  submitted: false
}

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = startCampos;

    this.handleChange = this.handleChange.bind(this) // Em resumo, eu falo pra função handleChange, o this que ela vai usar, é o this desta aplicação.
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.sendForm = this.sendForm.bind(this)
    this.resetForm = this.resetForm.bind(this)
  }

  handleMouseEnter (event) { // Quando o mouse passar por cima
    let { name } = event.target; // pega o nome do campo dentro do target

    if (name === 'cargo') {
      // É feito de uma forma onde o alerta será exibido apenas uma vez
      if (this.state.alertaCargoTextArea === false) {
        alert('Preencha com cuidado esta informação.')

        this.setState({ // altera o state para true e indicando que o alerta foi exibido
          alertaCargoTextArea: true
        })
      }
    }
  }

  handleBlur (event) { // Ao remover o foco
    let { name, value } = event.target; // pega o nome do campo dentro do target
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
    if (name === 'endereco') value = value.replace(/[^\w\s]/gi, '')

    this.setState({
      [name]: value //[name] é o nome do campo e value é o valor que será alterado
    })
  }
  
  sendForm () { // Aponta ao state que o Formulário está submetido e é feito a leitura dele em outro ponto do Form
    this.setState({ submitted: true })
  }
  
  resetForm () {
    this.setState( startCampos2 ) // Chama a const startCampos que zera os values do state
  };

  render() {
    const { name, email, cpf, endereco, cidade, estado, tipo, resumo, cargo, descricao, submitted } = this.state
    return (
      <div>
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
          <input type="button" value="Enviar" onClick={ this.sendForm }/>
          <input type="button" value="Limpar" onClick={ this.resetForm }/>
        </form>
        <div>
        { submitted && <Consolidado stateAtual={ this.state }/> }
        </div>
      </div>
    )
  }
}

export default Form;