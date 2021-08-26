import React from 'react';
import { connect } from 'react-redux';

class Sum extends React.Component {
  render() {
    return <div data-testid="sumNumbers">{this.props.sum}</div>;
  }
}

const mapStateToProps = state => ({
  sum:
    state.sumReducer.value1 + state.sumReducer.value2 + state.sumReducer.value3});

export default connect(mapStateToProps)(Sum);
