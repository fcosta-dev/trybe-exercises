import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

class FeedBack extends Component {
  render() {
    const { player: { assertions, score } } = JSON.parse(localStorage.getItem('state'));
    const three = 3;
    return (
      <div>
        <Header />
        <p data-testid="feedback-total-question">{assertions}</p>
        <p data-testid="feedback-total-score">{score}</p>
        <p data-testid="feedback-text">
          {assertions < three ? 'Podia ser melhor...' : 'Mandou bem!'}
        </p>
        <Link to="/ranking">
          <button
            type="button"
            data-testid="btn-ranking"
          >
            Ver Ranking
          </button>
        </Link>
        <Link to="/">
          <button
            data-testid="btn-play-again"
            type="button"
          >
            Jogar novamente
          </button>
        </Link>
      </div>);
  }
}

export default FeedBack;
