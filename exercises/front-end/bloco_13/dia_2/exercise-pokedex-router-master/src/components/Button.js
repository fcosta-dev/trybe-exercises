import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './button.css';

class Button extends Component {
  render() {
    const { className, children, disabled, onClick } = this.props;
    return (
      <button
        onClick={onClick}
        className={`button-text ${className}`}
        disabled={disabled}
        type="button"
      >
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  children: null,
  className: '',
  disabled: false,
};

export default Button;
