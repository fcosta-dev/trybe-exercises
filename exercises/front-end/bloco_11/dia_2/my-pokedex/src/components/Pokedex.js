// ** RESUMÃO **
// Pokedex é um componente que vai renderizar esta lista de pokemons
// primeira coisa é criar um componente que vai representar UM POKEMON

import React from 'react'; // Importa o React
import Pokemon from '../Pokemon';

class Pokedex extends React.Component { // Criando a classe Pokedex com herança do Component
  render() { // Chama o método para renderizar, criando o próprio método render
    const { listagemDosPokemons } = this.props; // No app.js você está passando o listagemDosPokemons, e aqui neste componente estou recebendo. Este this.props faz referência aos parametros que for passado no App.js

    return ( // O render tem que retornar um HTML
      <div className="pokedex">
        <p>Teste</p> {/* Este H1 só repete uma vez pois não está em um MAP */}
        <p>Exibindo a listagem dos pokemons para fins estudantis:</p>
        <p>
          {listagemDosPokemons[0].name + " e "}
          {listagemDosPokemons[1].name}
        </p>
        <p>Fim da Listagem</p>
        {listagemDosPokemons.map(elemento => <Pokemon key={elemento.id} pokemon={elemento} />)} {/* Toda vez que é feita um map, é necessário colocar um key, usado internamente para identificar cada item.
        Se caso não fosse criado o componente Pokemon, era possível fazer somente com o Pokedex e App, onde a linha 10 que está recebendo o props estaria fazendo a desestruturação 
        */}
      </div>
    );
  }
}

export default Pokedex; // Sempre exportar o componente


// Apelido Xmen.js
// listagemDosPokemons é XMenInfo