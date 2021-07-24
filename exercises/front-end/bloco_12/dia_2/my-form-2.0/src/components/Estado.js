import React, { Component } from 'react'

const states = ['Rio de Janeiro', 'Minas Gerais', 'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];

class Estado extends Component {

  render() {
    const { estadoValue, handleChange } = this.props; // Recebo a props do Form.js

    return (
      <label htmlFor="estado">Estado: 
        <select 
          name="estado"
          required 
          id="estado"
          value={ estadoValue }
          onChange={ handleChange }
          >
          { states.map((value, key) => (
              <option key={ key }>{ value }</option>
            ))
          }
        </select>
      </label>
    )
  }
}

export default Estado;
