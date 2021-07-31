import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav className="nav_lateral">
        <ul className="cadastro">
          <Link to="/cadastro">Cadastro2</Link>
        </ul>
        <ul className="financeiro">
          <Link to="/financeiro">Financeiro</Link>
        </ul>
        <ul className="relatorio">
          <Link to="/relatorio">Relatório</Link>
        </ul>
      </nav>
      
    )
  }
}

export default Nav;
