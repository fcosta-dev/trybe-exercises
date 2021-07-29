import React from 'react';
import 'mutationobserver-shim';
import { Router } from 'react-router-dom';
import { render, waitFor } from '@testing-library/react';
import { createBrowserHistory } from 'history';
import App from '../App';
import { movieAPI } from './helpers';

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

describe('2 - Faça uma requisição para buscar e mostrar a lista de filmes quando `MovieList` for montado', () => {
  test('Será validado se a página `MovieList` exibe o texto `Carregando...` enquanto estiver fazendo a requisição', async () => {
    const { unmount, getByText } = renderPath('/');
    expect(getByText('Carregando...'));
    await waitFor(() => movieAPI.getMovies());
    unmount();
  });

  test('Será validado se a página `MovieList` exibe um `MovieCard` para cada filme retornado pela API', async () => {
    const movieListLength = 5;
    const { unmount, getAllByTestId } = renderPath('/');
    await waitFor(() => movieAPI.getMovies());
    expect(getAllByTestId('movie-card').length).toBe(movieListLength);
    unmount();
  });
});
