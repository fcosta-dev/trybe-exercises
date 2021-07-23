import React, { Component } from 'react'

class Idade extends Component {
  render() {
    const { value, handleChange } = this.props

    return (
      <label htmlFor="age">Idade:
        <select name="age" id="age" defaultValue="" onChange={ handleChange } value={ value }>
          <option value="">Selecione</option>
          <option value="adult">Maior que 18</option>
          <option value="underage">Menor que 18</option>
        </select>
      </label>
    )
  }
}

export default Idade;
