import React from 'react';
import 'mutationobserver-shim';
import { Router } from 'react-router-dom';
import { screen, render, waitFor, cleanup, fireEvent } from '@testing-library/react';
import { createBrowserHistory } from 'history';
import App from '../App';
import { movieAPI, readMovies, resetStorage } from './helpers';

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

describe('4 - Faça uma requisição para buscar o filme que deverá ser renderizado dentro de `Movie Details`', () => {

  it('Será validado se `MovieDetails` exibe o texto "Carregando..." enquanto estiver fazendo a requisição', async () => {
    for (const movie of readMovies()) {
      cleanup();
      const { getByText } = renderPath(`/movies/${movie.id}`);
      expect(getByText('Carregando...'));
    }
  });

  it('Será validado se `MovieDetails` exibe o título, o subtítulo, a sinopse, a imagem e o gênero do filme', async () => {
    for (const movie of readMovies()) {
      const { unmount } = renderPath(`/movies/${movie.id}`);
      await waitFor(() => movieAPI.getMovie(movie.id));
      expect(screen.getAllByText(readMovies()[movie.id - 1].title, { exact: false }).length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText(readMovies()[movie.id - 1].subtitle, { exact: false }).length)
        .toBeGreaterThanOrEqual(1);
      expect(screen.getByText(readMovies()[movie.id - 1].storyline, { exact: false })).toBeTruthy;

      let image = screen.getByAltText('Movie Cover').src.split('/').slice(-2).join('/');
      expect(image).toEqual(readMovies()[movie.id - 1].imagePath);
      expect(screen.getAllByText(readMovies()[movie.id - 1].genre, { exact: false })).toBeTruthy;
      unmount();
    }
  });

  it('Será validado se `MovieDetails` contém um botão com o texto "VOLTAR" que redireciona para a página inicial', async () => {
    for (const movie of readMovies()) {
      const { unmount, findByText } = renderPath(`/movies/${movie.id}`);
      await waitFor(() => movieAPI.getMovie(movie.id));
      const backButton = await findByText('VOLTAR');
      expect(backButton.href).toBe('http://localhost/');
      unmount();
    }
  });

  it('Será validado se `MovieDetails` contém um botão com o texto "EDITAR" que redireciona para a página de edição de filme', async () => {
    for (const movie of readMovies()) {
      const { unmount, findByText } = renderPath('/movies/' + movie.id);
      await waitFor(() => movieAPI.getMovie(movie.id));
      const backButton = await findByText('EDITAR');
      expect(backButton.href).toBe(`http://localhost/movies/${movie.id}/edit`);
      unmount();
    }
  });
});

describe('7 - Adicione um link para deletar um cartão em `MovieDetails`', () => {

  it('Será validado se `MovieDetails` contém um link com o texto "DELETAR"', async () => {
    for (const movie of readMovies()) {
      const { unmount, findByText } = renderPath(`/movies/${movie.id}`);
      await waitFor(() => movieAPI.getMovie(movie.id));
      const deleteButton = await findByText('DELETAR');
      expect(deleteButton.href).toBe('http://localhost/');
      unmount();
    }
  });

  it('Será validado se o link "DELETAR" faz uma requisição para a API para excluir o filme em questão', async () => {
    const movieCardLength = 4;
    resetStorage();
    const deletedMovie = readMovies()[2];
    renderPath('/movies/3');
    const deleteButton = await screen.findByText('DELETAR');
    fireEvent.click(deleteButton);
    await waitFor(() => movieAPI.getMovies());
    expect(window.location.pathname).toBe('/');
    cleanup();
    renderPath('/');
    await waitFor(() => movieAPI.getMovies());
    expect(screen.getAllByTestId('movie-card').length).toBe(movieCardLength);
    expect(screen.queryByText(deletedMovie.title)).toBeNull();
  });
});
