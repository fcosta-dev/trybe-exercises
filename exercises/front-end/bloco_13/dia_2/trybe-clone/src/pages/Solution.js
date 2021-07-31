import React from 'react';

class Solution extends React.Component {
  render() {
    const { match: { params: { solutionId } } } = this.props; // Recebe a props da Solutions

    return (
      <p>
        {/* Com o comando abaixo, eu puxo a variável na qual coloquei em Solutions e renderizo ela na tela dentro deste paragrafo */}
        {solutionId} 
      </p>);
  }
}

export default Solution;