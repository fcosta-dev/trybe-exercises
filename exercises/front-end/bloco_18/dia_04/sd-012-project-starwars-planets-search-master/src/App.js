import React from 'react';
import './App.css';
// Importa o componente Table
import Table from './components/Table';
import FilterInput from './components/FilterInput';
// Importa o Provider para que ele permita prover os dados ao componente Table
import StarWarsProvider from './contexts/StarWarsProvider';

function App() {
  return (
    // Chama o Provider encapsulando o mesmo ao componente Table
    <StarWarsProvider>
      <FilterInput />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
