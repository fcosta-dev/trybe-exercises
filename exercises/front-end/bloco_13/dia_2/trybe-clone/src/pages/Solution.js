import React from 'react';

class Solution extends React.Component {
  render() {
    const { match: { params: { solutionId } } } = this.props; // Recebe a props da Solutions

    return (
      <p>
        {solutionId}
      </p>);
  }
}

export default Solution;