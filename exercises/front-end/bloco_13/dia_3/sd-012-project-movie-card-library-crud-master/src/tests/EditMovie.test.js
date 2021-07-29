import React from 'react';
import 'mutationobserver-shim';
import { Router } from 'react-router-dom';
import { screen, render, waitFor, cleanup, fireEvent } from '@testing-library/react';
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

const genres = {
  action: 'Ação',
  comedy: 'Comédia',
  thriller: 'Suspense',
  fantasy: 'Fantasia',
};

describe('5 - Realize uma requisição para buscar o filme que será editado em `EditMovie`', () => {

  it('Será validado se `EditMovie` exibe o texto "Carregando..." enquanto estiver fazendo a requisição', async () => {
    for (const movie of readMovies()) {
     cleanup();
      const { getByText } = renderPath(`/movies/${movie.id}/edit`);
      expect(getByText('Carregando...'));
    }
  });

  it('Será validado se `EditMovie` contém um formulário preenchido com o título, subtítulo, sinopse, caminho da imagem e gênero do filme selecionado', async () => {
    for (const movie of readMovies()) {
      const { getByDisplayValue, getAllByDisplayValue } = renderPath(`/movies/${movie.id}/edit`);
      await waitFor(() => movieAPI.getMovie(movie.id - 1));
      expect(getAllByDisplayValue(readMovies()[movie.id - 1].title, { exact: false }).length).toBeGreaterThanOrEqual(1);
      expect(getAllByDisplayValue(readMovies()[movie.id - 1].subtitle, { exact: false }).length).toBeGreaterThanOrEqual(1);
      expect(getByDisplayValue(readMovies()[movie.id - 1].storyline, { exact: false })).toBeTruthy;
      const image = readMovies()[movie.id - 1].imagePath;
      expect(getAllByDisplayValue(image, { exact: false })).toBeTruthy;
      expect(getAllByDisplayValue(genres[readMovies()[movie.id - 1].genre], { exact: false }));
    }
  });

  it('Será validado se, ao clicar no botão de submit, uma requisição para API é feita e o filme selecionado é atualizado. Após a conclusão da atualização a pessoa usuária deve ser redirecionada para a página inicial', async () => {
    for (const movie of readMovies()) {
      cleanup();
      const { container, getByLabelText, getByRole } = renderPath(`/movies/${movie.id}/edit`);
      await waitFor(() => movieAPI.getMovie(movie.id));
      const titleInput = getByLabelText('Título');
      const subTitleInput = getByLabelText('Subtítulo');
      const imageInput = getByLabelText('Imagem');
      const synopsisInput = getByLabelText('Sinopse');
      const genreInput = getByLabelText('Gênero');
      const evaluationInput = getByLabelText('Avaliação');
      const formButton = getByRole('button');

      fireEvent.change(titleInput, { target: { value: `test title ${movie.id}` } });
      fireEvent.change(subTitleInput, { target: { value: `test subtitle ${movie.id}` } });
      fireEvent.change(imageInput, { target: { value: 'testimage' + movie.id } });
      fireEvent.change(synopsisInput, { target: { value: `test synopsis ${movie.id}` } });
      fireEvent.change(genreInput, { target: { value: 'comedy' } });
      fireEvent.change(evaluationInput, { target: { value: movie.id.toString() } });

      await waitFor(() => fireEvent.click(formButton));

      await waitFor(() => movieAPI.getMovies());
      expect(window.location.pathname).toBe('/');
      expect(screen.getByText(`test title ${movie.id}`));
      expect(screen.getByText(`test synopsis ${movie.id}`));

      fireEvent.click(screen.getAllByText('VER DETALHES')[movie.id - 1]);
      await waitFor(() => movieAPI.getMovie(movie.id));
      expect(screen.getAllByText(readMovies()[movie.id - 1].title, { exact: false }).length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText(readMovies()[movie.id - 1].subtitle, { exact: false }).length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText(readMovies()[movie.id - 1].storyline, { exact: false })).toBeTruthy;
      const image = screen.getByAltText('Movie Cover', { exact: false });
      expect(image.src).toBe('http://localhost/' + readMovies()[movie.id - 1].imagePath);
      expect(screen.getAllByText(readMovies()[movie.id - 1].genre, { exact: false }));
    }
  });
});
