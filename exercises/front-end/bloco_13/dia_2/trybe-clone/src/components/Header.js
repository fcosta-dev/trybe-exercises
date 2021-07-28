import React from 'react';
import { Link } from 'react-router-dom';
import trybeLogo from '../logo.svg';

class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <img src={ trybeLogo } alt="Logo da Trybe" />
        <h4>Curso</h4>

        <nav>
          <Link to="/calendar">Agenda</Link>
          <Link to="/live-lectures">Aulas ao Vivo</Link>
          <Link to="/trybe-talks">Trybe Talks</Link>
          <Link to="/solutions">Gabaritos</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
