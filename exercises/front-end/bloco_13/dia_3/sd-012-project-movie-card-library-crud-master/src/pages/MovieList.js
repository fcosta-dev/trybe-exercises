import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: true, // Aponto o state loading como true para ser usado para controle de texto de Loading na tela quando a lista de Filmes estiver sendo carregada.
      movies: [],
    };
  }

  // Requisito 2 - Faça uma requisição para buscar e mostrar a lista de filmes quando MovieList for montado
  componentDidMount() { // Quando o MovieList for montado no DOM, é executado essa função.
    movieAPI.getMovies() // Busca a lista de filmes
      .then((data) => { // Retorna a lista dentro de data
        this.setState({
          loading: false, // Como a lista foi montada, então o loading pode desaparecer, alterando o state para false
          movies: data, // Joga as informações de data dentro do State movies.
        });
      });
  }

  render() {
    const { movies, loading } = this.state;

    // Se o state do Loading estiver true, ou seja que não carregou, então será renderizado o componente Loading conforme abaixo.
    if (loading) return <Loading />;

    return (
      <div data-testid="movie-list">
        {/* Abaixo eu vou percorrer os filmes com MAP, adicionar o title como key e passar
         os filmes como props para o MovieCard */}
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
