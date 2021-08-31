import React, { Component } from 'react';
import { connect } from 'react-redux';
import { timeoutTrue } from '../redux/actions';

class Timer extends Component {
  render() {
    const { timer } = this.state;
    return (
      <p>{timer}</p>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  timeoutTrue: () => dispatch(timeoutTrue()),
});

const mapStateToProps = (state) => ({
  loading: state.quiz.loading,
  timeout: state.quiz.timeout,
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
