import React from 'react';

// Faz a importação do componente funcional useTimer 
import useTimer from './useTimer';

const App = () => {
  const { timer, randomNumber, isMultiple } = useTimer();

  return (
    <div className="App">
      {timer}
      <br />
      {randomNumber}
      <br />
      {isMultiple ? 'Acerto' : ''}
    </div>
  );
};

export default App;