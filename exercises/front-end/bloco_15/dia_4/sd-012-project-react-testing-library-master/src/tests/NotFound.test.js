import React from 'react';
import { screen } from '@testing-library/react';
import NotFound from '../components/NotFound';
import renderWithRouter from './renderWithRouter';

describe('Requisito 04 - Teste o componente NotFound.js', () => {
  test('Testa se página contém um h2 com o texto Page requested not found 😭', () => {
    // Renderizo na tela as rotas do componente NotFound
    renderWithRouter(<NotFound />);
    // getByRole um elemento 'heading'(h1/h2/h3/h4...) busca um título, ou qualquer nível de título, com o name de "Page requested not found".
    const message = screen.getByRole('heading', { name: /Page requested not found/i });
    // Busca um elemento img com o name "Crying emoji"
    const cryingEmoji = screen.getByRole('img', { name: /Crying emoji/i });
    // Testa se o conteúdo da variável message está no documento
    expect(message).toBeInTheDocument();
    // Testa se o conteúdo da variável cryingEmoji está no documento
    expect(cryingEmoji).toBeInTheDocument();
  });
  test('Testa se página mostra uma imagem específica', () => {
    // Renderizo na tela as rotas do componente NotFound
    renderWithRouter(<NotFound />);
    // Guarda texto na variável "message"
    const message = 'Pikachu crying because the page requested was not found';
    // getByAltText: Se o seu elemento é aquele que suporta alttexto ( img, areae input), então você pode usar isso para encontrar esse elemento.
    // Busca um elemento img através do getByAltText com o conteúdo da variável message
    const img = screen.getByAltText(message);
    // Guarda no imgURL o link da imagem definida no README
    const imgURL = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    // Verifica se na variável img, se o src dela é igual ao link que está guardado na variável imgURL
    expect(img.src).toEqual(imgURL);
  });
});
