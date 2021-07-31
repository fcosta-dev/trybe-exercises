import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Financeiro extends Component {
  render() {
    const { financeiro } = this.props

    return (
      <div>
        <h2>Financeiro</h2>
        <ul>
          {
            financeiro.map((financeiro) => (
              <li key={ financeiro.id }>
                <Link to={ `/financeiro/${financeiro.id}`}>{ financeiro.name }</Link>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default Financeiro;
