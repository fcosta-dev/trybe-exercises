import React from 'react';
import { connect } from 'react-redux';
import { sumValue1, sumValue2, sumValue3 } from './actions';

class InputsSum extends React.Component {
  render() {
    const { sumValue1, sumValue2, sumValue3 } = this.props;
    return (
      <div>
        <input
          type="number"
          data-testid="input1"
          placeholder="Digite um valor"
          onChange={e => sumValue1(e.target.value)}
        />
        <input
          type="number"
          data-testid="input2"
          placeholder="Digite um valor"
          onChange={e => sumValue2(e.target.value)}
        />
        <input
          type="number"
          data-testid="input3"
          placeholder="Digite um valor"
          onChange={e => sumValue3(e.target.value)}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  sumValue1: e => dispatch(sumValue1(e)),
  sumValue2: e => dispatch(sumValue2(e)),
  sumValue3: e => dispatch(sumValue3(e))});

export default connect(null, mapDispatchToProps)(InputsSum);
