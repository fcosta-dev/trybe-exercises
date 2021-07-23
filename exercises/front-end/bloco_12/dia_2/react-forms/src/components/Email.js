import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Email extends Component {
  render() {
    const { handleChange, value } = this.props;

    return (
      <label htmlFor="email">Email:
        <input type="email" name="email" id="email" onChange={ handleChange } value={ value }/>
      </label>
    )
  }
}

Email.propTypes = {
  handleChange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired
}

export default Email;