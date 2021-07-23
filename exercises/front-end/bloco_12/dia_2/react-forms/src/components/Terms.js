import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Terms extends Component {
  render() {
    const { handleChange, value } = this.props;

    return (
      <label htmlFor="terms">
        <input type="checkbox" name="terms" id="terms" onChange={ handleChange } value={ value }/>
        Concordo com os termos e acordos
      </label>
    )
  }
}

Terms.propTypes = {
  handleChange: PropTypes.func.isRequired // Verifico se o handleChange é uma função, com intuito de saber se a props recebeu corretamente
}

export default Terms;