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
      renderWithRouter(<App />);
      const nextPkmBtn = screen.getByRole('button', { name: /Próximo pokémon/i });
      expect(nextPkmBtn).toBeInTheDocument();
    });
    test('Os próximos Pokémons são mostrados, um a um, ao clicar sucessivamente no botão',
      () => {

  test('Teste se página contém um heading h2 com o texto Encountered pokémons', () => {

  });

  test('Teste se página contém um heading h2 com o texto Encountered pokémons', () => {

  });
});
