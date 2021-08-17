import React from 'react';
import { screen, fireEvent } from '@testing-library/react';

import App from '../App';
import renderWithRouter from './renderWithRouter';

// Guarda na variável pokemons a relação de pokemons do data.js
import pokemons from '../data';

// Guarda no firstPokemon o primeiro pokemon do array
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
          // Busca um elemento do tipo link com name/texto "more details"
          const moreDetails = screen.getByRole('link', { name: /more details/i });
          // Simula um click neste elemento encontrado acima
          fireEvent.click(moreDetails);
          // Testo se o elemento "more details" não está renderizado no documento
          expect(moreDetails).not.toBeInTheDocument();
        });

      test('A seção de detalhes deve conter um heading h2 com o texto Summary',
        () => {
          // Renderizo na tela as rotas do componente App.
          renderWithRouter(<App />);
          // Simulo um click no elemento link com name/texto "more details".
          fireEvent.click(screen.getByRole('link', { name: /more details/i }));
          // Procura um heading(h1,h2,h3...) com name/texto do primeiro pokemon pego pela variável que possui o primeiro pokemon do data.js
          const h2 = screen.getByRole('heading', { name: /summary/i });
          // Testo se o elemento heading está no documento
          expect(h2).toBeInTheDocument();
        });

      test('A seção de detalhes deve conter parágrafo com resumo do Pokémon visualizado',
        () => {
          // Renderizo na tela as rotas do componente App.
          renderWithRouter(<App />);
          // Simulo um click no elemento link com name/texto "more details".
          fireEvent.click(screen.getByRole('link', { name: /more details/i }));
          // Guarda na variável summary o summary do primeiro pokemon
          const summary = screen.getByText(firstPokemon.summary);
          // Testa se o summary está no documento
          expect(summary).toBeInTheDocument();
        });
    });

  describe('Testa se há na página seção com mapas contendo as localizações do pokémon',
    () => {
      test('Deverá existir um h2 com o texto Game Locations of <name>', () => {
        // Renderizo na tela as rotas do componente App.
        renderWithRouter(<App />);
        // Simulo um click no elemento link com name/texto "more details".
        fireEvent.click(screen.getByRole('link', { name: /more details/i }));
        // Guarda na variável locations o texto abaixo com o name/texto do primeiro pokemon
        const locations = `Game Locations of ${firstPokemon.name}`;
        // Guarda na variável locationHeading o heading(h1,h2,h3..) com o name/texto do locations
        const locationHeading = screen.getByRole('heading', { name: locations });
        // Testa se o heading acima foi encontrado e está no documento
        expect(locationHeading).toBeInTheDocument();
      });

      test('Devem ser exibidos o nome da localização e uma imagem do mapa', () => {
        // Renderizo na tela as rotas do componente App.
        renderWithRouter(<App />);
        // Simulo um click no elemento link com name/texto "more details".
        fireEvent.click(screen.getByRole('link', { name: /more details/i }));
        // Guarda na variável locations o texto abaixo com o name/texto do primeiro pokemon
        const locations = `Game Locations of ${firstPokemon.name}`;
        // Guarda na variável locationHeading o heading(h1,h2,h3..) com o name/texto do locations
        const locationHeading = screen.getByRole('heading', { name: locations });
        // Testa se o heading acima foi encontrado e está no documento
        expect(locationHeading).toBeInTheDocument();
        // o foundAt é desconstruído abaixo pois nele tem um array das localizações onde este pokemon é encontrado
        const { foundAt } = firstPokemon;
        // Percorre o array das localizações, desconstruindo no elemento o location(local) e o map(endereço)
        foundAt.forEach(({ location, map }, index) => {
          // Testo se o elemento que possui o location deste pokemon está no documento
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
          // Simulo um click no elemento link com name/texto "more details".
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
