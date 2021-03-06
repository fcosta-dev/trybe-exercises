// npx stryker run ./stryker/PokemonDetails.conf.json para confirmar que os testes foram realizados em 100%

import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';
import userEvent from '@testing-library/user-event';

describe('Requisito 01 - Teste do componente .js', () => {
  describe('Testando se a aplicação possui determinados links de navegação.', () => {
    test('O primeiro link deve possuir o texto Home', () => {
      // Como a função render normal da RTL não dá suporte ao router precisamos usar a função renderWithRouter. Ela pode ser muito útil e usa o createMemoryHistory para embutir no seu componente renderizado a lógica de histórico de navegação , para uso nos teste.
      renderWithRouter(<App />);
      // getByRole: Isso pode ser usado para consultar todos os elementos expostos na árvore de acessibilidade
      // Com a name opção, você pode filtrar os elementos retornados por seus nomes acessíveis
      // Ou seja, usando o screen verificamos se na tela, possui um "link" com o name "home", se tiver guarda ele na variável home.
      const home = screen.getByRole('link', { name: /home/i });
      // Testo se o conteúdo da variável home está no documento
      expect(home).toBeInTheDocument();
    });

    test('O segundo link deve possuir o texto About', () => {
      // Renderizo na tela as rotas do componente App
      renderWithRouter(<App />);
      // Verifico na tela, se há um elemento do tipo link com o name "about", e se tiver coloca o elemento na variável about.
      const about = screen.getByRole('link', { name: /about/i });
      // Testo que espero que a variável about esteja no documento
      expect(about).toBeInTheDocument();
    });

    test('O terceiro link deve possuir o texto Favorite Pokémons', () => {
      // Renderizo na tela as rotas do componente App
      renderWithRouter(<App />);
      // Verifico na tela, se há um elemento do tipo link com o name "favorite pokémons", e se tiver coloca o elemento na variável about.
      const favPokemons = screen.getByRole('link', { name: /favorite pokémons/i });
      // Testo que espero que a variável favPokemons esteja no documento
      expect(favPokemons).toBeInTheDocument();
    });
  });

  describe('Testando se a aplicação é redirecionada para:', () => {
    test('a URL "/" ao clicar no link Home.', () => {
      // Desconstroi o history do renderWithRouter do componente App
      const { history } = renderWithRouter(<App />);
      // Será verificado se há um elemento do tipo link com o nome de "/home", e joga na variável home.
      const home = screen.getByRole('link', { name: /home/i });
      // Simula um click na variável home que contém o elemento link
      userEvent.click(home);
      // history.location.pathname pega o endereço da página.
      // Verificamos se o texto que aparece quando clicamos nesse link no navegador é o "/".
      expect(history.location.pathname).toEqual('/');
    });

    test('a URL "/about", ao clicar no link About.', () => {
      // Desconstroi o history do renderWithRouter do componente App
      const { history } = renderWithRouter(<App />);
      // Será verificado se há um elemento do tipo link com o nome de "/about", e joga na variável about.
      const about = screen.getByRole('link', { name: /about/i });
      // Simula um click na variável about que contém o elemento link
      userEvent.click(about);
      // history.location.pathname pega o endereço da página.
      // Verificamos se o texto que aparece quando clicamos nesse link no navegador é o "/about".
      expect(history.location.pathname).toEqual('/about');
    });

    test('a URL /favorites, ao clicar no link Favorite Pokémons.', () => {
      // Desconstroi o history do renderWithRouter do componente App
      const { history } = renderWithRouter(<App />);
      // Será verificado se há um elemento do tipo link com o nome de "/favorite pokémons", e joga na variável favoritePokemons.
      const favoritePokemons = screen.getByRole('link',
        { name: /favorite pokémons/i });
      // Simula um click na variável favoritePokemons que contém o elemento link
      userEvent.click(favoritePokemons);
      // history.location.pathname pega o endereço da página.
      // Verificamos se o texto que aparece quando clicamos nesse link no navegador é o "/favorites".
      expect(history.location.pathname).toEqual('/favorites');
    });

    test('a página Not Found ao entrar em uma URL desconhecida.', () => {
      // Desconstroi o history do renderWithRouter do componente App
      const { history } = renderWithRouter(<App />);
      // Passo como argumento um link que não existe dentro de nossa aplicação
      history.push('/pagina/que-nao-existe');
      // getByText: pode ser usado para localizar elementos não interativos (como divs, spans e parágrafos).
      // Cria a variável notFound para localizar texto na tela
      const notFound = screen.getByText(/Page requested not found/i);
      // Testa se a variável notFound está no documento
      expect(notFound).toBeInTheDocument();
    });
  });
});
