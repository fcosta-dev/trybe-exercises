import React from 'react';
import 'mutationobserver-shim';
import { Router } from 'react-router-dom';
import { render, waitFor } from '@testing-library/react';
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

describe('1 - Renderize `BrowserRouter` no componente `App` usando rotas', () => {

  test('Será validado se a rota `/` renderiza a página MovieList', async () => {
    const { unmount, getByTestId } = renderPath('/');
    await waitFor(() => movieAPI.getMovies());
    expect.anything(getByTestId('movie-list'));
    unmount();
  });

  test('Será validado se a rota `/movies/:id` renderiza a página MovieDetails', async () => {
    for (const movie of readMovies()) {
      const { unmount, getByTestId } = renderPath(`/movies/${movie.id}`);
      await waitFor(() => movieAPI.getMovies());
      expect.anything(getByTestId('movie-details'));
      unmount();
    }
  });

  test('Será validado se a rota `/movies/new` renderiza a página NewMovie', () => {
    const { unmount, getByTestId } = renderPath('/movies/new');
    expect.anything(getByTestId('new-movie'));
    unmount();
  });

  test('Será validado se a rota `/movies/:id/edit` renderiza a página EditMovie', async () => {
    for (const movie of readMovies()) {
      const { unmount, getByTestId } = renderPath(`/movies/${movie.id}/edit`);
      await waitFor(() => movieAPI.getMovies());
      expect.anything(getByTestId('edit-movie'));
      unmount();
    }
  });
  test('Será validado se qualquer rota não declarada renderiza a página NotFound', () => {
    const { unmount, getByTestId } = renderPath(`/${Math.random()}`);
    expect.anything(getByTestId('404-error'));
    unmount();
  });
});
