import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Relatorio extends Component {
  render() {
    const { relatorio } = this.props

    return (
      <div>
        <h2>Relatorio</h2>
        <ul>
          {
            relatorio.map((relatorio) => (
              <li key={ relatorio.id }>
                <Link to={ `/relatorio/${relatorio.id}`}>{ relatorio.name }</Link>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default Relatorio;
