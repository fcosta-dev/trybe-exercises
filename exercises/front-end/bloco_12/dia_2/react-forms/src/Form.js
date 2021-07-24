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

  handleError() {
    const { name, email, age, observacao, terms } = this.state

    const errorCases = [
      !name.length, // Se o tamanho do conteúdo do campo Nome não tiver tamanho
      !age.length, // Se não tiver informação no campo Age
      !observacao.length, // Se não tiver informação no campo Observação
      !terms, // Se o Terms não tiver sido aceito pelo usuário
      !email.match(/^\S+@\S+$/i)
    ]

    const formularioPreenchido = errorCases
      .every((error) => error !== true);

    this.setState({
      formularioComErros: !formularioPreenchido
    })
  }

  handleChange ({ target }) { // desconstruo o target
    const { name } = target // pego o name, o value do target por desconstrução
    const value = target.type === 'checkbox' ? target.checked : target.value

    this.setState({
      [name]: value,
    }, () => { this.handleError() })
  }
  
  render() {
    const { name, email, age, observacao, terms, formularioComErros } = this.state
    
    return (
      <div>
        <h1>Formulário</h1>
        <form className="form">

          <fieldset>
            <legend>Informações Pessoais</legend>
            <Nome nameValue={ name } handleChange={ this.handleChange } /> {/* Estou fazendo um componente Nome filho */}
            <Email emailValue={ email } handleChange={this.handleChange} /> {/* Estou fazendo um componente Email filho */}
            <Idade ageValue={ age } handleChange={ this.handleChange }/> {/* Estou fazendo um componente Idade filho */}
          </fieldset>

          <fieldset>
            <legend>Texto e arquivos</legend>
            <Observacao observacaoValue={ observacao } handleChange={ this.handleChange } /> {/* Estou fazendo um componente Observacao filho */}
            <input type="file"/>
          </fieldset>

          <Terms termsValue={ terms } handleChange={ this.handleChange } /> {/* Estou fazendo um componente Terms filho */}

          <label htmlFor="formularioComErros">
            <input type="checkbox" name="formularioComErros" id="formularioComErros"/>
            Há erro em um desses componentes
          </label>
        </form>
        { formularioComErros
          ? <span style={ { color: 'ref' } }>Preencha todos os campos</span>
          : <span style={ { color: 'green' } }> Todos campos foram preenchidos</span>
        }
      </div>
    )
  }
}

export default Form;