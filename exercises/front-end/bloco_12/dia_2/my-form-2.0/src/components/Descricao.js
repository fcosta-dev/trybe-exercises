import React, { Component } from 'react'

class Descricao extends Component {
  render() {
    const { descricaoValue, handleChange } = this.props; // Recebo a props do Form.js

    return (
      <label htmlFor="descricao">Descrição do Cargo: 
      <textarea 
        name="descricao" 
        id="descricao" 
        cols="100" 
        rows="10"
        maxLength="500"
        required
        value={ descricaoValue } // Uso o valor da props do Form.js
        onChange={ handleChange }
      />
    </label>

    )
  }
}

export default Descricao;