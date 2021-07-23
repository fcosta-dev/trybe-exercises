import React, { Component } from 'react'

class Tipo extends Component {
  render() {
    const { tipoValue, handleChange } = this.props; // Recebo a props do Form.js

    console.log(tipoValue)
    return (
      <label htmlFor="tipo">
        <input 
          type="radio" 
          name="tipo" 
          id="casa"
          value="Casa"
          onChange={ handleChange } 
        />Casa
        <input 
          type="radio" 
          name="tipo" 
          id="apartamento"
          value="Apartamento"
          onChange={ handleChange } 
        />Apartamento

      </label>
    )
  }
}

export default Tipo;