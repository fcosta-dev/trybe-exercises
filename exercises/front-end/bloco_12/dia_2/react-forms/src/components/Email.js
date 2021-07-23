import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Email extends Component {
  render() {
    const { handleChange, emailValue } = this.props;

    return (
      <label htmlFor="email">Email:
        <input
          type="email"
          name="email"
          id="email"
          onChange={ handleChange }
          value={ emailValue }
        />
        <p> {/* Tratativa de erro fica em um parárafo */}
          { !emailValue.match(/^\S+@\S+$/i) ? 'Email inválido' : '' }
        </p>
      </label>
    )
  }
}

Email.propTypes = {
  handleChange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired
}

export default Email;