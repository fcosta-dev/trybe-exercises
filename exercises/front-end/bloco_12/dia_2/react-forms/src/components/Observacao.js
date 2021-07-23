import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Observacao extends Component {
  render() {
    const { handleChange, value } = this.props

    return (
      <label htmlFor="observacao">Anedota:
        <textarea name="observacao" id="observacao" onChange={ handleChange } value={ value }/>
      </label>
    )
  }
}

Observacao.propTypes = {
  handleChange: PropTypes.func.isRequired, // Verifico se o handleChange é uma função, com intuito de saber se a props recebeu corretamente
  observacao: PropTypes.string.isRequired // Verifico se o campo Observacao é uma string
}

export default Observacao;