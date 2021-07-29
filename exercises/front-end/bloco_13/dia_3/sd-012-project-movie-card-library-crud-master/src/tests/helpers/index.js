import * as movieAPI from '../../services/movieAPI';
import data from '../../services/movieData';

const resetStorage = () => { localStorage.setItem('movies', JSON.stringify(data)); };
resetStorage();

const readMovies = () => JSON.parse(localStorage.getItem('movies'));

const saveMovies = (movies) => localStorage.setItem('movies', JSON.stringify(movies));

movieAPI.getMovies = jest.fn(() => (
  new Promise((resolve) => {
    const movies = readMovies();
    resolve(movies);
  })
));

movieAPI.getMovie = jest.fn((movieId) => {
  const movie = readMovies().find((mov) => mov.id === parseInt(movieId, 10));

  return new Promise((resolve) => {
    resolve(movie);
  });
});

movieAPI.updateMovie = jest.fn((updatedMovie) => {
  const movies = readMovies().map((movie) => {
    if (movie.id === parseInt(updatedMovie.id, 10)) {
      return { ...movie, ...updatedMovie };
    }
    return movie;
  });
  saveMovies(movies);

  return new Promise((resolve) => {
    resolve('OK');
  });
});

movieAPI.createMovie = jest.fn((movieData) => {
  let movies = readMovies();
  const nextId = movies[movies.length - 1].id + 1;
  const newMovie = { ...movieData, id: nextId };
  movies = [...movies, newMovie];
  saveMovies(movies);

  return new Promise((resolve) => {
    resolve('OK');
  });
});

movieAPI.deleteMovie = jest.fn((movieId) => {
  let movies = readMovies();
  movies = movies.filter((movie) => movie.id !== parseInt(movieId, 10));
  saveMovies(movies);

  return new Promise((resolve) => {
    resolve({ status: 'OK' });
  });
});

export {
  movieAPI,
  resetStorage,
  readMovies,
  saveMovies,
};
