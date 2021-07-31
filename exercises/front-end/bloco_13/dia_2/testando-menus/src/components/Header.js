import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <Link to="/cadastro">Cadastro</Link>
          <Link to="/financeiro">Financeiro</Link>
          <Link to="/relatorio">Relatório</Link>
        </nav>
      </header>
      
    )
  }
}

export default Header;
