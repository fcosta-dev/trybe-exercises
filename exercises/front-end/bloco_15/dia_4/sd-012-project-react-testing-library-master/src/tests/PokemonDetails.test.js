import React from 'react';
import { screen, fireEvent } from '@testing-library/react';

import App from '../App';
import renderWithRouter from './renderWithRouter';

import pokemons from '../data';

const firstPokemon = pokemons[0];

describe('Requisito 07 - Teste o componente <PokemonDetails.js />', () => {
  describe('Testa se as informações detalhadas do Pokémon selecionado são mostradas',
    () => {
      test('A página deve conter um texto <name> Details', () => {
        renderWithRouter(<App />);
        fireEvent.click(screen.getByRole('link', { name: /more details/i }));
        const h2 = screen.getByRole('heading', { name: `${firstPokemon.name} Details` });
        expect(h2).toBeInTheDocument();
      });
      test('Não deve existir link de navegação para detalhes do Pokémon selecionado',
        () => {
          renderWithRouter(<App />);
          const moreDetails = screen.getByRole('link', { name: /more details/i });
          fireEvent.click(moreDetails);
          expect(moreDetails).not.toBeInTheDocument();
        });
      test('A seção de detalhes deve conter um heading h2 com o texto Summary',
        () => {
          renderWithRouter(<App />);
          fireEvent.click(screen.getByRole('link', { name: /more details/i }));
          const h2 = screen.getByRole('heading', { name: /summary/i });
          expect(h2).toBeInTheDocument();
        });
      test('A seção de detalhes deve conter parágrafo com resumo do Pokémon visualizado',
        () => {
          renderWithRouter(<App />);
          fireEvent.click(screen.getByRole('link', { name: /more details/i }));
          const summary = screen.getByText(firstPokemon.summary);
          expect(summary).toBeInTheDocument();
        });
    });
  describe('Testa se há na página seção com mapas contendo as localizações do pokémon',
    () => {
      test('Deverá existir um h2 com o texto Game Locations of <name>', () => {
        renderWithRouter(<App />);
        fireEvent.click(screen.getByRole('link', { name: /more details/i }));
        const locations = `Game Locations of ${firstPokemon.name}`;
        const locationHeading = screen.getByRole('heading', { name: locations });
        expect(locationHeading).toBeInTheDocument();
      });
      test('Devem ser exibidos o nome da localização e uma imagem do mapa', () => {
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
