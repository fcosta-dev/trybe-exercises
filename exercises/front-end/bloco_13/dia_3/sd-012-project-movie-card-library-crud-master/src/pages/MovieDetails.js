import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      movie: {},
    };
  }

  // Para renderizar os dados dos filmes eu tenho que acionar a função que pega os filmes, como não é uma API, é uma função que está na movieAPI. E ela tem que ser executada quando toda a pagina por renderizada.
  componentDidMount() {
    const { match: { params: { id } } } = this.props; // Há uma props padrão com nome de "match", dentro dela tem o params, e nesse params fica informações do id. Que foram passadas pelo <Link to={ `/movies/${id}` }>VER DETALHES</Link>
    movieAPI.getMovie(id) // busca o filme conforme id;
      .then((movie) => this // O elemento será o movie
        .setState({ movie, loading: false })); // E com o setState eu subo o movie para State e altero o Loading para false
  }

  render() {
    const { movie: { id, title, storyline, imagePath,
      genre, rating, subtitle }, loading } = this.state; // Desestrutura o state

    // Se o state do Loading estiver true, ou seja que não carregou, então será renderizado o componente Loading, conforme abaixo.
    if (loading) return <Loading />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ title }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        {/* Link apontando para a rota raiz (/) com o texto "VOLTAR" */}
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
