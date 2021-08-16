import React from 'react';
import { screen, fireEvent } from '@testing-library/react';

import App from '../App';
import renderWithRouter from './renderWithRouter';

import pokemons from '../data';

describe('Requisito 05 - Teste o componente <Pokedex.js />', () => {
  test('Testa se página contém um h2 com o texto Encountered pokémons', () => {
    // Renderizo na tela as rotas do componente App.
    renderWithRouter(<App />);
    // Busca na tela se há um heading(h1,h2,h3...) com name "Encountered pokémons"
    const h2 = screen.getByRole('heading', { name: /Encountered pokémons/i });
    // Verifica se o elemento que está na h2 está no documento
    expect(h2).toBeInTheDocument();
  });

  describe('Testa se exibe o próximo Pokémon se Próximo pokémon é clicado', () => {
    test('O botão deve conter o texto Próximo pokémon', () => {
      // Renderizo na tela as rotas do componente App.
      renderWithRouter(<App />);
      // Busca elemento button com name "Próximo pokémon"
      const nextPkmBtn = screen.getByRole('button', { name: /Próximo pokémon/i });
      // Testa se o elemento acima buscado está no documento
      expect(nextPkmBtn).toBeInTheDocument();
    });

    test('Os próximos Pokémons são mostrados, um a um, ao clicar sucessivamente no botão',
      () => {
        // Renderizo na tela as rotas do componente App.
        renderWithRouter(<App />);
        // Busca elemento button com name "Próximo pokémon"
        const nextPkmBtn = screen.getByRole('button', { name: /Próximo pokémon/i });
        // Através da importação de dados de pokemons na "pokemons" faço um foreach para ler cada um dos pokemons
        pokemons.forEach((pokemon) => {
          // através do data-test-id verifica se há um elemento pokemon-name
          const pokemonName = screen.getByTestId('pokemon-name');
          // Testa se o elemento que está na variável acima tem o name do elemento pokemon do foreach. Ou seja, verifica se é o mesmo pokemon.
          expect(pokemonName).toHaveTextContent(pokemon.name);
          // Simula o click no botão de próximo pokemon
          fireEvent.click(nextPkmBtn);
        });

      });

    test('O primeiro Pokémon deve ser mostrado se estiver no último Pokémon da lista',
      () => {
        // Renderizo na tela as rotas do componente App.
        renderWithRouter(<App />);
        const nextPkmBtn = screen.getByRole('button', { name: /Próximo pokémon/i });
        // Percorro a lista de pokemons
        pokemons.forEach(() => {
          fireEvent.click(nextPkmBtn);
        });
        const firstPokemon = screen.getByTestId(nameTestId);
        expect(firstPokemon).toHaveTextContent(pokemons[0].name);
      });
  });

  test('Teste se página contém um heading h2 com o texto Encountered pokémons', () => {

  });

  test('Teste se página contém um heading h2 com o texto Encountered pokémons', () => {

  });
});
