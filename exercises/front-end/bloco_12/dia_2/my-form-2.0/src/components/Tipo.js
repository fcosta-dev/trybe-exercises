import React, { Component } from 'react'

class Tipo extends Component {
  render() {
    const { handleChange } = this.props; // Recebo a props do Form.js

    return (
      <label htmlFor="tipo">
        <input 
          type="radio" 
          name="tipo" 
          id="casa"
          value="Casa"
          checked
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