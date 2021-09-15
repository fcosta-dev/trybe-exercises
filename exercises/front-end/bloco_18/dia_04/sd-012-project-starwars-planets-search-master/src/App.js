import React from 'react';
import './App.css';
// Importa o componente Table, o Filters e o FilterRemove
import Table from './components/Table';
import Filters from './components/Filters';
import FilterRemove from './components/FilterRemove';
// Importa o Provider para que ele permita prover os dados ao componente Table
import StarWarsProvider from './contexts/StarWarsProvider';

function App() {
  return (
    // Chama o Provider encapsulando o mesmo ao componente Table
    <StarWarsProvider>
      <h1>StarWars Project - Planets Search</h1>
      <Filters />
      <h3>Filtros Realizados:</h3>
      <FilterRemove />
      <hr />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
