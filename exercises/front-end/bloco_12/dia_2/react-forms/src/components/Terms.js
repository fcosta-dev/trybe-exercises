import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Terms extends Component {
  render() {
    const { handleChange, termsValue } = this.props;

    return (
      <label htmlFor="terms">
        <input 
          type="checkbox" 
          name="terms" 
          id="terms" 
          onChange={ handleChange } 
          value={ termsValue }
        />
        Concordo com os termos e acordos
        <p>
          { !termsValue ? 'É necessário aceitar os termos e acordos' : '' }
        </p>
      </label>
    )
  }
}

Terms.propTypes = {
  handleChange: PropTypes.func.isRequired // Verifico se o handleChange é uma função, com intuito de saber se a props recebeu corretamente
}

export default Terms;