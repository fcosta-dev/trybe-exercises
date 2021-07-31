import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Cadastro_lateral extends Component {
  render() {
    const { cadastro } = this.props

    return (
      <div>
        {
          cadastro.map((cadastro) => (
            <li key={ cadastro.id }>
              <Link to={ `/cadastro/${cadastro.id}`}>{ cadastro.name }</Link>
            </li>
          ))
        }
      </div>
    )
  }
}

export default Cadastro_lateral;