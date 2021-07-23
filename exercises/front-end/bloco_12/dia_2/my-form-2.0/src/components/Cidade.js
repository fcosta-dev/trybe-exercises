import React, { Component } from 'react'

class Cidade extends Component {
  render() {
    const { nameValue, handleChange, handleBlur } = this.props; // Recebo a props do Form.js

    return (
      <label htmlFor="cidade">Cidade: 
      <input 
        type="text" 
        name="cidade" 
        id="cidade"
        maxLength="28"
        required
        value={ nameValue } // Uso o valor da props do Form.js
        onChange={ handleChange }
        onBlur={ handleBlur }
      />
    </label>

    )
  }
}

export default Cidade;