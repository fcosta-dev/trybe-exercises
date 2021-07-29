import React from 'react';
import PropTypes from 'prop-types';

import { isPokemonFavoriteByIdType, pokemonType } from '../types';
import Button from './Button';
import Pokemon from './Pokemon';
import './pokedex.css';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokemonIndex: 0, filteredType: 'all' };
  }

  filterPokemons(filteredType) {
    this.setState({ filteredType, pokemonIndex: 0 });
  }

  nextPokemon(numberOfPokemons) {
    this.setState((state) => (
      { pokemonIndex: (state.pokemonIndex + 1) % numberOfPokemons }
    ));
  }

  fetchFilteredPokemons() {
    const {pokemons} = this.props; // Recebe a props do pokemons, com todos pokemons, vinda do App.js
    const {filteredType} = this.state; // Desestrutura o this.state pegando apenas o filteredType

    return pokemons.filter(pokemon => { // Faz o filter conforme o filteredType dentro do pokemons que recebeu a props
      if (filteredType === 'all') return true; // Se o filteredType for all, returna true e mostra tudo
      return pokemon.type === filteredType; // Se não for, 
    });
  }

  fetchPokemonTypes() {
    const {pokemons} = this.props; // Recebe a props do pokemons, com todos pokemons, vinda do App.js

    return [...new Set(pokemons.reduce((types, {type}) => [...types, type], []))];
  }

  render() {
    const { isPokemonFavoriteById } = this.props;
    const filteredPokemons = this.fetchFilteredPokemons();
    const pokemonTypes = this.fetchPokemonTypes();
    const { pokemonIndex } = this.state;
    const pokemon = filteredPokemons[pokemonIndex];

    return (
      <div className="pokedex">
        <Pokemon
          pokemon={pokemon}
          isFavorite={isPokemonFavoriteById[pokemon.id]}
        />
        <div className="pokedex-buttons-panel">
          <Button
            onClick={() => this.filterPokemons('all')} // Passa para o setState que o filteredType é igual a 'All'
            className="filter-button">
            All
          </Button>
          {pokemonTypes.map(type => (
            <Button
              key={type}
              onClick={() => this.filterPokemons(type)}
              className="filter-button">
              {type}
            </Button>
          ))}
        </div>
        <Button
          className="pokedex-button"
          onClick={() => this.nextPokemon(filteredPokemons.length)}
          disabled={filteredPokemons.length <= 1}>
          Próximo pokémon
        </Button>
      </div>
    );
  }
}

Pokedex.propTypes = {
  isPokemonFavoriteById: isPokemonFavoriteByIdType.isRequired,
  pokemons: PropTypes.arrayOf(pokemonType.isRequired).isRequired,
};

export default Pokedex;