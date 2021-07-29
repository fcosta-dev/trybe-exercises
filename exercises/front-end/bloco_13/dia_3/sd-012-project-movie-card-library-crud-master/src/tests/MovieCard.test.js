import React from 'react';
import 'mutationobserver-shim';
import { Router } from 'react-router-dom';
import { screen, render, waitFor } from '@testing-library/react';
import { createBrowserHistory } from 'history';
import App from '../App';
import { movieAPI, readMovies } from './helpers';

jest.mock('../services/movieAPI');

const renderPath = (path) => {
  const history = createBrowserHistory();
  history.push(path);
  const { ...resources } = render(
    <Router history={ history }>
      <App />
    </Router>,
  );
  return { ...resources };
};

describe('3 - Insira um link para a página de detalhes de um filme dentro de `MovieCard`', () => {

  test('Será validado se cada `MovieCard` exibe pelo menos o título e a sinopse de seu respectivo filme', async () => {
    const movieCardLength = 5;
    const { unmount, getAllByText } = renderPath('/');
    await waitFor(() => movieAPI.getMovies());
    expect(screen.getAllByTestId('movie-card').length).toBe(movieCardLength);
    readMovies().forEach((movie) => {
      expect(getAllByText(movie.title).length).toBeGreaterThanOrEqual(1);
      expect(getAllByText(movie.storyline).length).toBeGreaterThanOrEqual(1);
    });
    unmount();
  });

  test('Será validado se cada `MovieCard` contém um link com o texto `VER DETALHES` que redireciona para a página de detalhes do filme', async () => {
    const { unmount, getAllByText } = renderPath('/');
    await waitFor(() => movieAPI.getMovies());
    getAllByText('VER DETALHES').forEach((link, index) => {
      expect(link.href).toBe(`http://localhost/movies/${(index + 1)}`);
    });
    unmount();
  });
});
