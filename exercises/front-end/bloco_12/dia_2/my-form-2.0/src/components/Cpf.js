import React, { Component } from 'react'

class Cpf extends Component {
  render() {
    const { cpfValue, handleChange } = this.props; // Recebo a props do Form.js

    return (
      <label htmlFor="cpf">CPF: 
      <input 
        type="text" 
        name="cpf" 
        id="cpf"
        maxlength="11"
        required
        value={ cpfValue } // Uso o valor da props do Form.js
        onChange={ handleChange }
      />
    </label>

    )
  }
}

export default Cpf;