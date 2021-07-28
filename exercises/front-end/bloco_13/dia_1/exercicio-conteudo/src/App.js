// App.js
import React, { Component }from 'react';
import './App.css';
import PersonDetails from './PersonDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PersonDetails />
      </div>
    );
  }
}

export default App;
