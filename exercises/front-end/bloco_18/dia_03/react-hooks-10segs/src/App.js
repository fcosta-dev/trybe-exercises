import React from 'react';

// Faz a importação do componente funcional useTimer 
import useTimer from './useTimer';

const App = () => {
  // Desconstrói o useTimer com as funções que o componente funcional deu de retorno: timer, randomNumber e isMultiple
  const { timer, randomNumber, isMultiple } = useTimer();

  // Monta na tela
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