import React from 'react';
import './App.css';
// Importa o componente Table e o Filters
import Table from './components/Table';
import Filters from './components/Filters';
// Importa o Provider para que ele permita prover os dados ao componente Table
import StarWarsProvider from './contexts/StarWarsProvider';

function App() {
  return (
    // Chama o Provider encapsulando o mesmo ao componente Table
    <StarWarsProvider>
      <Filters />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
