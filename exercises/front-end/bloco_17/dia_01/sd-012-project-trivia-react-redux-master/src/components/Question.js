import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from './ForForms/Button';
import { actionTimeoutFalse } from '../redux/actions/index';

class Question extends Component {
  constructor(props) {
    super(props);

    // State inicial vai ser as chaves abaixo:
    this.state = {
      button: false,
      showCorrect: false,
    };

    // As funções abaixo serão habilitadas para serem usadas em todo o componente/page
    this.handleClickButton = this.handleClickButton.bind(this);
    this.handleClickNext = this.handleClickNext.bind(this);
    this.changeBorder = this.changeBorder.bind(this);
  }

  handleClickButton({ target: { dataset } }) {
    const { checkQuestion, stopTimer } = this.props;
    const id = dataset.testid;

    if (id === 'correct-answer') checkQuestion();

    this.setState({ button: true });
    this.changeBorder();

    stopTimer();
  }

  handleClickNext() {
    const { timeoutFalse, startTimer, timeout, nextQuestion } = this.props;

    if (timeout) {
      startTimer(1, true);
    } else { startTimer(0, false); }

    timeoutFalse();
    nextQuestion();

    this.setState({ button: false, showCorrect: false });
  }

  changeBorder() {
    this.setState({
      showCorrect: true,
    });
  }

  render() {
    const { button, showCorrect } = this.state;
    const { loading, timeout, question, randomIndex } = this.props;

    if (loading) { return <p>Loading...</p>; }

    const alternatives = question.correct_answer ? [
      ...question.incorrect_answers
        .map((alt, index) => ({ correct: false,
          alt,
          index,
          isCorrect: 'wrong' })),
      { correct: true,
        alt: question.correct_answer,
        isCorrect: 'correct' }] : [];

    return (
      <div className="question">

        <h1 data-testid="question-category">{question.category}</h1>
        { question.question
        && <p data-testid="question-text">{question.question}</p> }

        <div className="alternatives">
          {randomIndex.map((index) => {
            if (!alternatives[index]) return null;
            const { correct, alt, index: i, isCorrect } = alternatives[index];
            return (
              <button
                disabled={ timeout }
                type="button"
                key={ index }
                data-testid={ correct ? 'correct-answer' : `wrong-answer${i}` }
                onClick={ this.handleClickButton }
                className={ showCorrect ? isCorrect : '' }
              >
                {alt}
              </button>
            );
          })}
          { (button || timeout) && <Button onClick={ this.handleClickNext } /> }
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.quiz.loading,
  timeout: state.quiz.timeout,
});

const mapDispatchToProps = (dispatch) => ({
  timeoutFalse: () => dispatch(actionTimeoutFalse()),
});

// Faço a validação se os dados que recebi são válidos
Question.propTypes = {
  timeoutFalse: PropTypes.func.isRequired,
  startTimer: PropTypes.func.isRequired,
  stopTimer: PropTypes.func.isRequired,
  checkQuestion: PropTypes.func.isRequired,
  nextQuestion: PropTypes.func.isRequired,
  timeout: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  randomIndex: PropTypes.arrayOf(PropTypes.number).isRequired,
  question: PropTypes.shape({
    category: PropTypes.string,
    question: PropTypes.string,
    correct_answer: PropTypes.string,
    incorrect_answers: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

// O connect é responsável por fazer a conexão do meu componente Question com o mapStateToProps e o mapDispatchToProps.
export default connect(mapStateToProps, mapDispatchToProps)(Question);
