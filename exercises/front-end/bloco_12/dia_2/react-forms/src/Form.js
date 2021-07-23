import React from 'react'
import Nome from './components/Nome'
import Idade from './components/Idade'
import Email from './components/Email'
import Observacao from './components/Observacao'
import Terms from './components/Terms'

class Form extends React.Component {
  constructor() {
    super()
    
    this.state = {
      name: '',
      email: '',
      age: '',
      observacao: '',
      terms: false
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange ({ target }) { // desconstruo o target
    const { name } = target // pego o name  o value do target por desconstrução
    const value = target.type === 'checkbox' ? target.checked : target.value

    this.setState({
      [name]: value,
    })
  }
  
  render() {
    const { name, email, age, observacao, terms } = this.state
    
    return (
      <div>
        <h1>Formulário</h1>
        <form className="form">

          <fieldset>
            <legend>Informações Pessoais</legend>
            <Nome value={ name } handleChange={ this.handleChange } /> {/* Estou fazendo um componente Nome filho */}
            <Email value={ email } handleChange={this.handleChange} /> {/* Estou fazendo um componente Email filho */}
            <Idade value={ age } handleChange={ this.handleChange }/> {/* Estou fazendo um componente Idade filho */}
          </fieldset>

          <fieldset>
            <legend>Texto e arquivos</legend>
            <Observacao value={ observacao } handleChange={ this.handleChange } /> {/* Estou fazendo um componente Observacao filho */}
            <input type="file"/>
          </fieldset>

          <Terms value={ terms } handleChange={ this.handleChange } /> {/* Estou fazendo um componente Terms filho */}

          <label htmlFor="checkError">
            <input type="checkbox" name="checkError" id="checkError"/>
            Há erro em um desses componentes
          </label>
        </form>
      </div>
    )
  }
}

export default Form;