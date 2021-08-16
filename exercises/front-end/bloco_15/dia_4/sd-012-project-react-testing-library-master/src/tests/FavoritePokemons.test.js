import React from 'react';
import { fireEvent, screen } from '@testing-library/react';

import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Requisito 03 - Teste o componente <FavoritePokemons.js />', () => {
  test('Testa se é exibido "No favorite pokemon found", se não tiver pokémons favoritos',
    () => {
      // Desconstroi o history do renderWithRouter do componente App
      const { history } = renderWithRouter(<App />);
      const favoritePokemons = screen.getByRole('link',
        { name: /favorite pokémons/i });
      fireEvent.click(favoritePokemons);
      expect(history.location.pathname).toEqual('/favorites');
      const notFound = screen.getByText(/No favorite pokemon found/i);
      expect(notFound).toBeInTheDocument();
    });

  test('Teste se é exibido todos os cards de pokémons favoritados',
    () => {
      // Desconstroi o history do renderWithRouter do componente App
      const { history } = renderWithRouter(<App />);
      const moreDetails = screen.getByRole('link', { name: /more details/i });
      fireEvent.click(moreDetails);
      expect(history.location.pathname).toEqual('/pokemons/25');
      const checkbox = screen.getByRole('checkbox');
      fireEvent.click(checkbox);
      const pikachuStar = screen.getByAltText(/Pikachu is marked as favorite/i);
      expect(pikachuStar).toBeInTheDocument();
      const favoritePokemons = screen.getByRole('link',
        { name: /favorite pokémons/i });
      fireEvent.click(favoritePokemons);
      expect(history.location.pathname).toEqual('/favorites');
      const pikachu = screen.getByTestId('pokemon-name');
      expect(pikachu).toBeInTheDocument();
    });
});
