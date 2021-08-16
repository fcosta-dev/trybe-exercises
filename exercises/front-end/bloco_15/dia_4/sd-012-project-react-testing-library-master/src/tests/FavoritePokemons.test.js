import React from 'react';
import { fireEvent, screen } from '@testing-library/react';

import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Requisito 03 - Teste o componente <FavoritePokemons.js />', () => {
  test('Testa se é exibido "No favorite pokemon found", se não tiver pokémons favoritos',
    () => {
      // Desconstroi o history do renderWithRouter do componente App
      const { history } = renderWithRouter(<App />);
      // Busca um elemento link com o endereço "/favorite pokémons" e guarda na variável favoritePokemons
      const favoritePokemons = screen.getByRole('link',
        { name: /favorite pokémons/i });
        // Simula o click no elemento que está na variável favoritePokemons
      fireEvent.click(favoritePokemons);
      // history.location.pathname pega o endereço da página.
      // Verificamos se o texto que aparece quando clicamos nesse link no navegador é o "/favorites".
      expect(history.location.pathname).toEqual('/favorites');
      // Guarda na variável notFound o elemento com o texto "No favorite pokemon found".
      const notFound = screen.getByText(/No favorite pokemon found/i);
      // Testa se o retorno da variável notFound está no documento
      expect(notFound).toBeInTheDocument();
    });

  test('Teste se é exibido todos os cards de pokémons favoritados',
    () => {
      // Desconstroi o history do renderWithRouter do componente App
      const { history } = renderWithRouter(<App />);
      // Busca um elemento link com o endereço "/more details" e guarda na variável moreDetails
      const moreDetails = screen.getByRole('link', { name: /more details/i });
      // Simula o click no elemento que está na variável moreDetails
      fireEvent.click(moreDetails);
      // history.location.pathname pega o endereço da página.
      // Verificamos se o texto que aparece quando clicamos nesse link no navegador é o "/pokemons/25".
      expect(history.location.pathname).toEqual('/pokemons/25');
      // Consulta na árvore de acessibilidade se há um elemento checkbox e guarda esse elemento na variável checkbox
      const checkbox = screen.getByRole('checkbox');
      // Simula o click no elemento que está na variável checkbox
      fireEvent.click(checkbox);
      // getByAltText: Se o seu elemento é aquele que suporta alttexto ( img, areae input), então você pode usar isso para encontrar esse elemento.
      // Verificando através do getByAltText se o texto "Pikachu is marked as favorite" e guarda o elemento na variável pikachuStar
      const pikachuStar = screen.getByAltText(/Pikachu is marked as favorite/i);
      // Verifica se o elemento que está dentro da varipável pikachuStar está no documento.
      expect(pikachuStar).toBeInTheDocument();
      // Busca um elemento link com o endereço "/favorite pokémons" e guarda na variável moreDetails.
      const favoritePokemons = screen.getByRole('link',
        { name: /favorite pokémons/i });
        // Simula o click no elemento que está na variável favoritePokemons
      fireEvent.click(favoritePokemons);
      // history.location.pathname pega o endereço da página.
      // Verificamos se o texto que aparece quando clicamos nesse link no navegador é o "/favorites".
      expect(history.location.pathname).toEqual('/favorites');
      // Guarda na variável pikachu o elemento com o id 'pokemon-name', isso é possível pois foi criado o data-test-id com esse name abaixo
      const pikachu = screen.getByTestId('pokemon-name');
      // Verifica se o elemento guardado na variável pikachu está no documento.
      expect(pikachu).toBeInTheDocument();
    });
});
