import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

// Busca a lista de pokemons
import pokemons from '../data';

// Para corrigir erros de lint foi criado as constantes abaixo apenas com nomes que campos do App para serem chamados no teste
const nameTestId = 'pokemon-name';
const typeTestId = 'pokemon-type';
const weightTestId = 'pokemon-weight';
const firstPokemon = pokemons[0]; // Pega o primeiro pokemon

describe('Requisito 06 - Testa o componente <Pokemon.js />', () => {
  describe('Teste se é renderizado um card com as informações de determinado pokémon',
    () => {
      test('O nome correto do Pokémon deve ser mostrado na tela', () => {
        // Renderizo na tela as rotas do componente App.
        renderWithRouter(<App />);
        // Guarda na variável pokemonName o elemento datatestId com 'pokemon-name'
        const pokemonName = screen.getByTestId(nameTestId);
        // Testo se o elemento que está na variável pokemonName possui o texto do primeiro pokemon
        expect(pokemonName).toHaveTextContent(firstPokemon.name);
      });

      test('O tipo correto do pokémon deve ser mostrado na tela', () => {
        // Renderizo na tela as rotas do componente App.
        renderWithRouter(<App />);
        // Guarda na variável pokemonType o elemento datatestId com 'pokemon-type'
        const pokemonType = screen.getByTestId(typeTestId);
        // Testo se o elemento que está na variável pokemonType possui o texto do primeiro pokemon
        expect(pokemonType).toHaveTextContent(firstPokemon.type);
      });

      test('O peso médio do pokémon deve ser exibido com um texto no formato correto',
        () => {
          // Renderizo na tela as rotas do componente App.
          renderWithRouter(<App />);
          // Guarda na variável abaixo o elemento que possui o datatestId 'pokemon-weight'
          const pokemonWeight = screen.getByTestId(weightTestId);
          // Testa se o elemento pego acima possui o conteúdo de "Average weight". O "/" é como se fosse uma procura com "%" e o "i" é case sensitive
          expect(pokemonWeight).toHaveTextContent(/Average weight:/i);
          // Desconstroi os dois itens do objeto averageWeight do data.js
          const { value, measurementUnit } = firstPokemon.averageWeight;
          // Testa se o elemento encontrado acima tem o conteúdo do "value" desconstruído acima
          expect(pokemonWeight).toHaveTextContent(value);
          // Testa se o elemento encontrado acima tem o conteúdo do "measurementUnit" desconstruído acima
          expect(pokemonWeight).toHaveTextContent(measurementUnit);
        });

      test('A imagem do Pokémon deve ser exibida', () => {
        // Renderizo na tela as rotas do componente App.
        renderWithRouter(<App />);
        // Guarda na variável abaixo o name da função primeiropokemon com o texto sprite
        const imageName = `${firstPokemon.name} sprite`;
        // Guarda na variável pokemonImage um elemento image com o name/texto da variável imageName
        const pokemonImage = screen.getByRole('img', { name: imageName });
        // Testa se o elemento da variável pokemonImage está no documento
        expect(pokemonImage).toBeInTheDocument();
        // Testa se o elemento da variável pokemonImage.name tem o atributo alt de "$name sprite" da função firstPokemon que está declarada no início do .js
        expect(pokemonImage).toHaveAttribute('alt', `${firstPokemon.name} sprite`);
        // Testa se o elemento da variável pokemonImage tem no seu src o $image da função firstPokemon que está declarada no início do .js
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
        // Testo se o elemento na variável moreDetails tem o atributo href com "/pokemons/$firstPokemon.id"
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
          userEvent.click(moreDetails);
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
      // Simula um clock no elemento que está na variável moreDetails
      userEvent.click(moreDetails);
      // Busca um elemento label com o text "Pokémon favoritado?"
      const favorite = screen.getByLabelText(/Pokémon favoritado?/i);
      // Simula um clock no elemento que está na variável favorite
      userEvent.click(favorite);
      const starIcon = screen.getByAltText(`${firstPokemon.name} is marked as favorite`);
      // Verifica se o elemento que está na variável starIcon está no documento
      expect(starIcon).toBeInTheDocument();
    });

    test('A img tem src = "/star-icon.svg"', () => {
      renderWithRouter(<App />);
      // Busca um elemento link com o endereço "/more details" e o coloca na variável moreDetails
      const moreDetails = screen.getByRole('link', { name: /more details/i });
      // Simula um click no elemento que está na variável moreDetails
      userEvent.click(moreDetails);
      // Busca um elemento label com o text "Pokémon favoritado?"
      const favorite = screen.getByLabelText(/Pokémon favoritado?/i);
      // Simula um click no elemento da variável favorite
      userEvent.click(favorite);
      // Simula mais um click no elemento da variável favorite
      userEvent.click(favorite);
      // Pega todos os elementos img e guarda na variável fireEvent
      const images = screen.getAllByRole('img');
      // testo se o segundo elemento do array criado acima com as img possuem o atributo scr = "/star-icon.svg"
      expect(images[1]).toHaveAttribute('src', '/star-icon.svg');
    });
  });
});
