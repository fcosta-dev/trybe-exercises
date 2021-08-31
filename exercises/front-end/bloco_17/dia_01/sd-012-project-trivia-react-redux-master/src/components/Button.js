import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <button data-testid="btn-next" onClick={ onClick } type="button">Próxima</button>
    );
  }
}

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
