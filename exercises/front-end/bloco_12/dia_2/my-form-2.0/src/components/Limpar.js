import React, { Component } from 'react'

class Limpar extends Component {
  render() {
    const { handleClick } = this.props;

    return (
      <button onClick={ handleClick }>Limpar</button>
    )
  }
}

export default Limpar;