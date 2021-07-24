import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Observacao extends Component {
  render() {
    const { handleChange, observacaoValue } = this.props

    return (
      <label htmlFor="observacao">Observação:
        <textarea 
          name="observacao"
          id="observacao"
          onChange={ handleChange }
          value={ observacaoValue }
        />
        <p>
          { !observacaoValue.length ? 'Falta adicionar observações' : '' }
        </p>
      </label>
    )
  }
}

Observacao.propTypes = {
  handleChange: PropTypes.func.isRequired, // Verifico se o handleChange é uma função, com intuito de saber se a props recebeu corretamente
  observacao: PropTypes.string.isRequired // Verifico se o campo Observacao é uma string
}

export default Observacao;