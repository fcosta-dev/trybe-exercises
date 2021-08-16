import React from 'react';
import { screen, fireEvent } from '@testing-library/react';

import App from '../App';
import renderWithRouter from './renderWithRouter';

// Busca a lista de pokemons
import pokemons from '../data';

// Para corrigir erros de link foi criado as constantes abaixo
const nameTestId = 'pokemon-name';
const typeTestId = 'pokemon-type';
const weightTestId = 'pokemon-weight';
const firstPokemon = pokemons[0];

describe('Requisito 06 - Testa o componente Pokemon.js', () => {
  describe('Teste se é renderizado um card com as informações de determinado pokémon',
    () => {
      test('O nome correto do Pokémon deve ser mostrado na tela', () => {
        // Renderizo na tela as rotas do componente App.
        renderWithRouter(<App />);
        const pokemonName = screen.getByTestId(nameTestId);
        expect(pokemonName).toHaveTextContent(firstPokemon.name);
      });

      test('O tipo correto do pokémon deve ser mostrado na tela', () => {
        // Renderizo na tela as rotas do componente App.
        renderWithRouter(<App />);
        const pokemonType = screen.getByTestId(typeTestId);
        expect(pokemonType).toHaveTextContent(firstPokemon.type);
      });

      test('O peso médio do pokémon deve ser exibido com um texto no formato correto',
        () => {
          // Renderizo na tela as rotas do componente App.
          renderWithRouter(<App />);
          const pokemonWeight = screen.getByTestId(weightTestId);
          expect(pokemonWeight).toHaveTextContent(/Average weight:/i);
          const { value, measurementUnit } = firstPokemon.averageWeight;
          expect(pokemonWeight).toHaveTextContent(value);
          expect(pokemonWeight).toHaveTextContent(measurementUnit);
        });

      test('A imagem do Pokémon deve ser exibida', () => {
        // Renderizo na tela as rotas do componente App.
        renderWithRouter(<App />);
        const imageName = `${firstPokemon.name} sprite`;
        const pokemonImage = screen.getByRole('img', { name: imageName });
        expect(pokemonImage).toBeInTheDocument();
        expect(pokemonImage).toHaveAttribute('alt', `${firstPokemon.name} sprite`);
        expect(pokemonImage).toHaveAttribute('src', firstPokemon.image);
      });
    });

  describe('Testa se o card do Pokémon contém link de navegação para os detalhes deste',
    () => {
      test('O link deve possuir a URL /pokemons/<id>', () => {
        // Renderizo na tela as rotas do componente App.
        renderWithRouter(<App />);
        // Busca um elemento link com o endereço "/more details" e o coloca na variável moreDetails
        const moreDetails = screen.getByRole('link', { name: /more details/i });
        expect(moreDetails).toHaveAttribute('href', `/pokemons/${firstPokemon.id}`);
      });
    });

  describe('Testa se ao clicar em Mais detalhes, há redirect para os detalhes do Pokemon',
    () => {
      test('Testa se ao clicar em Mais detalhes, há redirect para os detalhes do Pokemon',
        () => {
          // Renderizo na tela as rotas do componente App e desconstroi o history dela que contem o histórico de localização.
          const { history } = renderWithRouter(<App />);
          // Busca um elemento link com o endereço "/more details" e o coloca na variável moreDetails
          const moreDetails = screen.getByRole('link', { name: /more details/i });
          // Simula o click no elemento que está na variável moreDetails
          fireEvent.click(moreDetails);
          // Desconstroi o name e o id da função firstPokemon
          const { name, id } = firstPokemon;
          // Pega o elemento heading(h2) com o name "$name Details"
          const h2 = screen.getByRole('heading', { name: `${name} Details` });
          // Com o elemento acima, verifica se está no documento
          expect(h2).toBeInTheDocument();
          // history.location.pathname pega o endereço da página.
          // Verificamos se o texto que aparece quando clicamos nesse link no navegador é o "/pokemons/$id".
          expect(history.location.pathname).toEqual(`/pokemons/${id}`);
        });
    });

  describe('Testa se existe um ícone de estrela nos Pokémons favoritados', () => {
    test('A img tem alt="<pokemon> is marked as favorite"', () => {
      renderWithRouter(<App />);
      // Busca um elemento link com o endereço "/more details" e o coloca na variável moreDetails
      const moreDetails = screen.getByRole('link', { name: /more details/i });
      fireEvent.click(moreDetails);
      const favorite = screen.getByLabelText(/Pokémon favoritado?/i);
      fireEvent.click(favorite);
      const starIcon = screen.getByAltText(`${firstPokemon.name} is marked as favorite`);
      expect(starIcon).toBeInTheDocument();
    });

    test('A img tem src = "/star-icon.svg"', () => {
      renderWithRouter(<App />);
      // Busca um elemento link com o endereço "/more details" e o coloca na variável moreDetails
      const moreDetails = screen.getByRole('link', { name: /more details/i });
      fireEvent.click(moreDetails);
      const favorite = screen.getByLabelText(/Pokémon favoritado?/i);
      fireEvent.click(favorite);
      fireEvent.click(favorite);
      // Pega todos os elementos img e guarda na variável fireEvent
      const images = screen.getAllByRole('img');
      expect(images[1]).toHaveAttribute('src', '/star-icon.svg');
    });
  });
});
