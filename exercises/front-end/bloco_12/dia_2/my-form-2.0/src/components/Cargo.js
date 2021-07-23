import React, { Component } from 'react'

class Cargo extends Component {
  render() {
    const { cargoValue, handleChange, handleMouseEnter } = this.props; // Recebo a props do Form.js

    return (
      <label htmlFor="cargo">Cargo: 
      <input 
        type="text" 
        name="cargo" 
        id="cargo"
        maxlength="40"
        required
        value={ cargoValue } // Uso o valor da props do Form.js
        onChange={ handleChange }
        onMouseEnter={ handleMouseEnter }
      />
    </label>
    )
  }
}

export default Cargo;