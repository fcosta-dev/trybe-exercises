import React from 'react';
import { screen, fireEvent } from '@testing-library/react';

import App from '../App';
import renderWithRouter from './renderWithRouter';

import pokemons from '../data';

// Devido erros de lint teve que ser criado estas constantes pois são utilizadas algumas vezes no projeto
const nameTestId = 'pokemon-name';
const typeTestId = 'pokemon-type';
const typeButtonTestId = 'pokemon-type-button';

// Devido erros de lint teve que ser criado essa fórmula, pois a mesma é utilizada 2 vezes no projeto
const getAllPokemons = (nextPkmBtn) => {
  pokemons.forEach((pokemon) => {
    const pokemonName = screen.getByTestId(nameTestId);
    expect(pokemonName).toHaveTextContent(pokemon.name);
    fireEvent.click(nextPkmBtn);
  });
};

// Cria na constante uniquePokemonTypes um array de tipos de pokemon, tirando os valores repetidos.
const uniquePokemonTypes = [...new Set(pokemonTypes)];

describe('Requisito 05 - Teste o componente <Pokedex.js />', () => {
  describe('Testa o heading da página', () => {
    test('Testa se página contém um h2 com o texto Encountered pokémons', () => {
      // Renderizo na tela as rotas do componente App.
      renderWithRouter(<App />);
      // Busca na tela se há um heading(h1,h2,h3...) com name "Encountered pokémons"
      const h2 = screen.getByRole('heading', { name: /Encountered pokémons/i });
      // Verifica se o elemento que está na h2 está no documento
      expect(h2).toBeInTheDocument();
    });
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
        getAllPokemons(nextPkmBtn);
      });

    test('O primeiro Pokémon deve ser mostrado se estiver no último Pokémon da lista',
      () => {
        // Renderizo na tela as rotas do componente App.
        renderWithRouter(<App />);
        const nextPkmBtn = screen.getByRole('button', { name: /Próximo pokémon/i });
        // Percorro a lista de pokemons
        pokemons.forEach(() => {
          // Simulo o click no botão de próximo pokemon
          fireEvent.click(nextPkmBtn);
        });
        // através do data-test-id pega o elemento com o name abaixo
        const firstPokemon = screen.getByTestId(nameTestId);
        // Testa se o pokemon pego acima tem a mesma descrição do primeiro pokemon a ser pego no foreach acima
        expect(firstPokemon).toHaveTextContent(pokemons[0].name);
      });
  });

  describe('Testa se é mostrado apenas um Pokémon por vez', () => {
    test('Testa se é mostrado apenas um Pokémon por vez', () => {
      // Renderizo na tela as rotas do componente App.
      renderWithRouter(<App />);
      // Busca pelo data-test-id se o pokemon name é trazido uma vez
      const onlyOnePokemon = screen.getAllByTestId('pokemon-name');
      // Testa se o tamanho da variável é d e1
      expect(onlyOnePokemon).toHaveLength(1);
    });
  });

  describe('Testa se a Pokédex tem os botões de filtro', () => {
    test('Deve existir um botão para cada tipo de Pokémon, sem repetição', () => {
      // Renderizo na tela as rotas do componente App.
      renderWithRouter(<App />);
      // Com o array de tipos de pokemon, sem estarem repetidos, percorro ele todo com o foreach
      uniquePokemonTypes.forEach((pokemonType, index) => {
        // Testo se na tela, com o data-test-id, há um elemento com o texto de um tipo de pokemon. OU seja, verifica se para todos os tipos no array há um botão renderizado.
        expect(screen.getAllByTestId(typeButtonTestId)[index])
          .toHaveTextContent(pokemonType);
      });
    });

    test('Se selecionado Tipo, a Pokédex deve circular apenas por pokémons daquele tipo',
      () => {
        // Renderizo na tela as rotas do componente App.
        renderWithRouter(<App />);
        // Com o array de tipos de pokemon, sem estarem repetidos, percorro ele todo com o foreach
        uniquePokemonTypes.forEach((pokemonType, index) => {
          fireEvent.click(screen.getAllByTestId(typeButtonTestId)[index]);
          // Simula click no elemento que tem o data-test-id de id next-pokemon
          fireEvent.click(screen.getByTestId('next-pokemon'));
          // Testo na tela com o data-test-id tem o texto
          expect(screen.getByTestId(typeTestId)).toHaveTextContent(pokemonType);
        });
      });

    test('O texto do botão deve corresponder ao nome do tipo, ex. Psychic',
      () => {
        // Renderizo na tela as rotas do componente App.
        renderWithRouter(<App />);
        // Com o array de tipos de pokemon, sem estarem repetidos, percorro ele todo com o foreach
        uniquePokemonTypes.forEach((pokemonType, index) => {
          fireEvent.click(screen.getAllByTestId(typeButtonTestId)[index]);
          expect(screen.getByTestId(typeTestId)).toHaveTextContent(pokemonType);
        });
      });

    test('O botão All precisa estar sempre visível', () => {
      // Renderizo na tela as rotas do componente App.
      renderWithRouter(<App />);
      // Com o array de tipos de pokemon, sem estarem repetidos, percorro ele todo com o foreach
      uniquePokemonTypes.forEach((pokemonType, index) => {
        fireEvent.click(screen.getAllByTestId(typeButtonTestId)[index]);
        // Simula o click em um elemento com o data-test-id 'next-pokemon'
        fireEvent.click(screen.getByTestId('next-pokemon'));
        // Testa se há um elemento botão de name all no documento
        expect(screen.getByRole('button', { name: /all/i })).toBeInTheDocument();
      });
    });
  });

  describe('Testa se a Pokédex contém um botão para resetar o filtro', () => {
    test('O texto do botão deve ser All', () => {
      // Renderizo na tela as rotas do componente App.
      renderWithRouter(<App />);
      // Testo se na tela há um elemento button com name com conteúdo "All". As barras com i são cases insensitives, podendo ser maiuscula ou nao
      expect(screen.getByRole('button', { name: /all/i })).toHaveTextContent('All');
    });

    test('A Pokedéx deverá mostrar os Pokémons sem filtros quando All for clicado',
      () => {
        // Renderizo na tela as rotas do componente App.
        renderWithRouter(<App />);
        const nextPkmBtn = screen.getByRole('button', { name: /Próximo pokémon/i });
        // Com o array de tipos de pokemon, sem estarem repetidos, percorro ele todo com o foreach
        uniquePokemonTypes.forEach((pokemonType, index) => {
          fireEvent.click(screen.getAllByTestId(typeButtonTestId)[index]);
          // Simula um click no elemento buttom que tem o name all. As barras com i são cases insensitives, podendo ser maiuscula ou nao
          fireEvent.click(screen.getByRole('button', { name: /all/i }));
          // Através da importação de dados de pokemons na "pokemons" faço um foreach para ler cada um dos pokemons, testando se mostra todos os pokemons
          getAllPokemons(nextPkmBtn);
        });
      });
  });
});
