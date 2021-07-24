import React, { Component } from 'react'

class Consolidado extends Component {
  render() {
    const { handleClick } = this.props

    return (
      <button onClick={ handleClick }>Consolidado</button>
    )
  }
}

export default Consolidado;