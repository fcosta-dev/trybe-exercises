import React, { Component } from 'react'

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const arrayDeCompromissos = ['escovar dentes', 'tomar banho', 'tomar café', 'estudar']

class App2 extends Component {
  render() {
    return (
      <ul>
        { arrayDeCompromissos
          .map((compromisso) => Task(compromisso) )
        }
      </ul>
      
    );
  }
}

export default App2