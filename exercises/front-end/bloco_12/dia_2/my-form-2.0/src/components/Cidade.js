import React, { Component } from 'react'

class Cidade extends Component {
  render() {
    const { cidadeValue, handleChange, handleBlur } = this.props; // Recebo a props do Form.js

    return (
      <label htmlFor="cidade">Cidade: 
      <input 
        type="text" 
        name="cidade" 
        id="cidade"
        maxLength="28"
        required
        value={ cidadeValue } // Uso o valor da props do Form.js
        onChange={ handleChange }
        onBlur={ handleBlur }
      />
    </label>

    )
  }
}

export default Cidade;