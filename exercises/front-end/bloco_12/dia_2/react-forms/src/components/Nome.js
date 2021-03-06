import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Nome extends Component {
  render() {
    const { handleChange, nameValue } = this.props; // Recebo a props do Form.js com a função de handleChange e o valor de conteúdo que está sendo trabalhado no Form.js

    return (
      <label htmlFor="name">Nome:
        <input 
          type="text" 
          id="name" 
          name="name" 
          onChange={ handleChange } 
          value={ nameValue }
        />
        <p>
          { !nameValue.length ? 'Nome inválido' : '' }
        </p>
      </label>
    )
  }
}

Nome.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}

export default Nome;