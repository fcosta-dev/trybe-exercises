import React, { Component } from 'react'

class Resumo extends Component {
  render() {
    const { resumoValue, handleChange } = this.props; // Recebo a props do Form.js

    return (
      <label htmlFor="resumo">Resumo do currículo: 
      <textarea 
        name="resumo" 
        id="resumo" 
        cols="100" 
        rows="10"
        maxLength="500"
        required
        value={ resumoValue } // Uso o valor da props do Form.js
        onChange={ handleChange }
      />
    </label>

    )
  }
}

export default Resumo;