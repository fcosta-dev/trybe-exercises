import React, { Component } from 'react'

class Idade extends Component {
  render() {
    const { ageValue, handleChange } = this.props

    return (
      <label htmlFor="age">Idade:
        <select 
          name="age"
          id="age"
          defaultValue=""
          onChange={ handleChange }
          value={ ageValue }>
          <option value="">Selecione</option>
          <option value="adult">Maior que 18</option>
          <option value="underage">Menor que 18</option>
        </select>
        <p>
          { !ageValue.length ? 'Idade inválida' : ''}
        </p>
      </label>
    )
  }
}

export default Idade;
