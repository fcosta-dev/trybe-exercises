import React from 'react';
import { screen } from '@testing-library/react';

import About from '../components/About';
import renderWithRouter from './renderWithRouter';

import React from 'react';
import { screen } from '@testing-library/react';

import About from '../components/About';
import renderWithRouter from '../helper/renderWithRouter';

describe('Requisito 02 - Testa o componente About.js', () => {
  test('Testando se a página contém as informações sobre a Pokédex', () => {
    // Renderizo na tela as rotas do componente About
    renderWithRouter(<About />);
    // Adiciona à variável pokedexInfo01 se foi encontrado o texto "digital encyclopedia" no documento /about
    const pokedexInfo01 = screen.getByText(/digital encyclopedia/i);
    // Adiciona à variável pokedexInfo02 se foi encontrado o texto "filter pokémons by type" no documento /about
    const pokedexInfo02 = screen.getByText(/filter pokémons by type/i);
    // Testa se a informação da variável pokedexInfo01 está no documento 
    expect(pokedexInfo01).toBeInTheDocument();
    // Testa se a informação da variável pokedexInfo02 está no documento
    expect(pokedexInfo02).toBeInTheDocument();
  });

  test('Testando se a página contém um heading h2 com o texto About Pokédex', () => {
    // Renderizo na tela as rotas do componente About
    renderWithRouter(<About />);
    // getByRole: usado para consultar todos os elementos expostos na árvore de acessibilidade. Com a name opção, você pode filtrar os elementos retornados por seus nomes acessíveis 
    const h2 = screen.getByRole('heading', { name: /about pokédex/i });
    // Testa se a variável h2, que contem o elemento procurado acima está no documento
    expect(h2).toBeInTheDocument();
  });
  
  test('Testando se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    // Renderizo na tela as rotas do componente About
    renderWithRouter(<About />);
    const regExp = /digital encyclopedia|filter pokémons by type/i;
    const paragraphs = screen.getAllByText(regExp);
    expect(paragraphs).toHaveLength(2);
  });
  
  test('Testando se a página contém uma imagem específica de uma Pokédex', () => {
    // Renderizo na tela as rotas do componente About
    renderWithRouter(<About />);
    const expectedURL = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    const img = screen.getByRole('img', { src: expectedURL });
    expect(img.src).toBe(expectedURL);
  });
});