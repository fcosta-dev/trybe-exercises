import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionTimeoutTrue } from '../redux/actions/index';

class Timer extends Component {
  render() {
    // Desconstrói o timer do state
    const { timer } = this.state;

    return (
      <p>{ timer }</p>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  timeoutTrue: () => dispatch(actionTimeoutTrue()),
});

const mapStateToProps = (state) => ({
  loading: state.quiz.loading,
  timeout: state.quiz.timeout,
});

// O connect é responsável por fazer a conexão do meu componente Timer com o mapStateToProps e o mapDispatchToProps.
export default connect(mapStateToProps, mapDispatchToProps)(Timer);
