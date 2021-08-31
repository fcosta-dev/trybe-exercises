import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';

class Ranking extends Component {
  render() {
    const ranking = JSON.parse(localStorage.getItem('ranking'));
    return (
      <div className="ranking">
        <h1 data-testid="ranking-title">Ranking</h1>
        <ul>
          {ranking.sort((a, b) => b.score - a.score)
            .map(({ name, score, picture }, index) => (
              <li key={ name }>
                <span data-testid={ `player-name-${index}` }>{name}</span>
                <img src={ picture } alt={ name } />
                {': '}
                <span data-testid={ `player-score-${index}` }>{score}</span>
              </li>
            ))}
        </ul>
        <Link to="/">
          <button
            type="button"
            data-testid="btn-go-home"
          >
            Voltar ao inicio
          </button>
        </Link>
      </div>
    );
  }
}

export default Ranking;
