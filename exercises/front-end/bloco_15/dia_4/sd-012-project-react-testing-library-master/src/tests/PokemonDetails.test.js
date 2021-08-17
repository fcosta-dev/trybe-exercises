import React from 'react';
import { screen, fireEvent } from '@testing-library/react';

import App from '../App';
import renderWithRouter from './renderWithRouter';

import pokemons from '../data';

const firstPokemon = pokemons[0];

describe('Requisito 07 - Teste o componente <PokemonDetails.js />', () => {
  describe('Teste se as informações detalhadas do Pokémon selecionado são mostradas',
    () => {
      test('A página deve conter um texto <name> Details', () => {
        // Renderizo na tela as rotas do componente App.
        renderWithRouter(<App />);
        // Simulo um click no elemento link com name/texto "more details".
        fireEvent.click(screen.getByRole('link', { name: /more details/i }));
        // Procura um heading(h1,h2,h3...) com name/texto do primeiro pokemon pego pela variável que possui o primeiro pokemon do data.js
        const h2 = screen.getByRole('heading', { name: `${firstPokemon.name} Details` });
        // Testo se o elemento heading está no documento
        expect(h2).toBeInTheDocument();
      });

      test('Não deve existir link de navegação para detalhes do Pokémon selecionado',
        () => {
          // Renderizo na tela as rotas do componente App.
          renderWithRouter(<App />);
          const moreDetails = screen.getByRole('link', { name: /more details/i });
          fireEvent.click(moreDetails);
          expect(moreDetails).not.toBeInTheDocument();
        });

      test('A seção de detalhes deve conter um heading h2 com o texto Summary',
        () => {
          // Renderizo na tela as rotas do componente App.
          renderWithRouter(<App />);
          fireEvent.click(screen.getByRole('link', { name: /more details/i }));
          const h2 = screen.getByRole('heading', { name: /summary/i });
          expect(h2).toBeInTheDocument();
        });

      test('A seção de detalhes deve conter parágrafo com resumo do Pokémon visualizado',
        () => {
          // Renderizo na tela as rotas do componente App.
          renderWithRouter(<App />);
          fireEvent.click(screen.getByRole('link', { name: /more details/i }));
          const summary = screen.getByText(firstPokemon.summary);
          expect(summary).toBeInTheDocument();
        });
    });

  describe('Testa se há na página seção com mapas contendo as localizações do pokémon',
    () => {
      test('Deverá existir um h2 com o texto Game Locations of <name>', () => {
        // Renderizo na tela as rotas do componente App.
        renderWithRouter(<App />);
        fireEvent.click(screen.getByRole('link', { name: /more details/i }));
        const locations = `Game Locations of ${firstPokemon.name}`;
        const locationHeading = screen.getByRole('heading', { name: locations });
        expect(locationHeading).toBeInTheDocument();
      });

      test('Devem ser exibidos o nome da localização e uma imagem do mapa', () => {
        // Renderizo na tela as rotas do componente App.
        renderWithRouter(<App />);
        fireEvent.click(screen.getByRole('link', { name: /more details/i }));
        const locations = `Game Locations of ${firstPokemon.name}`;
        const locationHeading = screen.getByRole('heading', { name: locations });
        expect(locationHeading).toBeInTheDocument();
        const { foundAt } = firstPokemon;
        foundAt.forEach(({ location, map }, index) => {
          expect(screen.getByText(location)).toBeInTheDocument();
          expect(screen.getAllByRole('img')[index + 1]).toHaveAttribute('src', map);
          const altText = `${firstPokemon.name} location`;
          expect(screen.getAllByAltText(altText)[index]).toBeInTheDocument();
        });
      });
    });
  describe('Testa se o usuário pode favoritar um pokémon através da página de detalhes',
    () => {
      test('A página deve exibir um checkbox que permite favoritar o Pokémon',
        () => {
          // Renderizo na tela as rotas do componente App.
          renderWithRouter(<App />);
          fireEvent.click(screen.getByRole('link', { name: /more details/i }));
          const favorite = screen.getByLabelText(/Pokémon favoritado?/i);
          const checkbox = screen.getByRole('checkbox', { name: /Pokémon favoritado?/i });
          expect(checkbox).toBeInTheDocument();
          expect(favorite).toBeInTheDocument();
          fireEvent.click(checkbox);
          const starIcon = screen.getAllByRole('img')[1];
          expect(starIcon).toBeInTheDocument();
          fireEvent.click(favorite);
          expect(starIcon).not.toBeInTheDocument();
        });
    });
});
