import React, { Component } from 'react'

class Nome extends Component {
  render() {
    const { nameValue, handleChange } = this.props; // Recebo a props do Form.js

    return (
      <label htmlFor="name">Nome: 
      <input 
        type="text" 
        name="name" 
        id="name"
        maxlength="40"
        required
        value={ nameValue } // Uso o valor da props do Form.js
        onChange={ handleChange }
      />
    </label>
    )
  }
}

export default Nome;