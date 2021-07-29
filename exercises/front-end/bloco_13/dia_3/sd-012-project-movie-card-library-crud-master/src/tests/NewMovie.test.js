import React from 'react';
import 'mutationobserver-shim';
import { Router } from 'react-router-dom';
import { screen, render, waitFor, cleanup, fireEvent } from '@testing-library/react';
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

describe('6 - Insira um link na página inicial para `NewMovie` para criar novos cartões', () => {

  it('Será validado se a página inicial contém um link "ADICIONAR CARTÃO". Esse link deve redirecionar para a página de criação de filmes', async () => {
    const { unmount } = renderPath('/');
    await waitFor(() => movieAPI.getMovies());
    const addMovie = screen.getByText('ADICIONAR CARTÃO');
    expect(addMovie);
    expect(addMovie.href).toBe('http://localhost/movies/new');
    unmount();
  });

  it('Será validado se `NewMovie` contém um formulário que faz uma requisição para API para criar um novo filme. Após a criação, a pessoa usuária deverá ser redirecionada para a página inicial', async () => {
    cleanup();
    renderPath('/movies/new');

    const titleInput = screen.getByLabelText('Título');
    const subTitleInput = screen.getByLabelText('Subtítulo');
    const imageInput = screen.getByLabelText('Imagem');
    const synopsisInput = screen.getByLabelText('Sinopse');
    const genreInput = screen.getByLabelText('Gênero');
    const evaluationInput = screen.getByLabelText('Avaliação');
    const formButton = screen.getByRole('button');
    const movieCardLength = 6;

    fireEvent.change(titleInput, { target: { value: 'newTitle' } });
    fireEvent.change(subTitleInput, { target: { value: 'newSubtitle' } });
    fireEvent.change(imageInput, { target: { value: 'newImage' } });
    fireEvent.change(synopsisInput, { target: { value: 'newSynopsis' } });
    fireEvent.change(genreInput, { target: { value: 'thriller' } });
    fireEvent.change(evaluationInput, { target: { value: 5 } });
    fireEvent.click(formButton);

    await waitFor(() => movieAPI.getMovies());
    expect(window.location.pathname).toBe('/');
    cleanup();
    renderPath('/');
    await waitFor(() => movieAPI.getMovies());
    expect(screen.getByText('newTitle'));
    expect(screen.getByText('newSynopsis'));
    expect(screen.getAllByTestId('movie-card').length).toBe(movieCardLength);
  });
});
