import React, { Component } from 'react'

class Endereco extends Component {
  render() {
    const { enderecoValue, handleChange } = this.props; // Recebo a props do Form.js

    return (
      <label htmlFor="endereco">Endereço: 
      <input 
        type="text" 
        name="endereco" 
        id="endereco"
        maxlength="200"
        required
        value={ enderecoValue } // Uso o valor da props do Form.js
        onChange={ handleChange }
      />
    </label>

    )
  }
}

export default Endereco;