import React from 'react';
import './App.css';
import pokemonsData from './data'; // Importa os dados do data.js e coloca na variável pokemonsData
import Pokedex from './components/Pokedex'; // Importa o componente que representa um pokemon

class App extends React.Component {
  render() {
    return (
      <div className="App"> {/* DIV pai */}
        <h1> Título Pokedex </h1>
        <Pokedex listagemDosPokemons={pokemonsData} /> {/* O parametro para o componente Pokedex é a PROP, ou seja, neste caso é a "listagemDosPokemons"
        Eu coloco um igual para passar a PROP de listagemDosPokemons para o Pokedex, e lá vai ser tratado ela, ou seja, para passar essa PROP eu coloco um igual
        E também vamos passar na PROP a variável pokemonsData que recebeu o conteudo de data.js
        */}
      </div>
    );
  }
}

export default App;

// listagemDosPokemons é XMenInfo