import React, { Component } from 'react'

class Email extends Component {
  render() {
    const { emailValue, handleChange } = this.props; // Recebo a props do Form.js

    return (
      <label htmlFor="email">Email: 
      <input 
        type="email" 
        name="email" 
        id="email"
        maxLength="50"
        required
        value={ emailValue } // Uso o valor da props do Form.js
        onChange={ handleChange }
      />
    </label>

    )
  }
}

export default Email;