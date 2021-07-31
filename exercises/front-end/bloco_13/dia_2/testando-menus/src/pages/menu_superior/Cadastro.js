import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Cadastro extends Component {
  render() {
    const { cadastro } = this.props

    return (
      <div>
        <h2>Cadastro</h2>
        <ul>
          {
            cadastro.map((cadastro) => (
              <li key={ cadastro.id }>
                <Link to={ `/cadastro/${cadastro.id}`}>{ cadastro.name }</Link>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default Cadastro;
