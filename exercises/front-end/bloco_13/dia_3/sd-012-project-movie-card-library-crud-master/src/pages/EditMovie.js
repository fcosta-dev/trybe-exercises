import React, { Component } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Para renderizar os dados dos filmes eu tenho que acionar a função que pega os filmes, como não é uma API, é uma função que está na movieAPI. E ela tem que ser executada quando toda a pagina por renderizada.
  // Será montado um formulário preenchido com o título, subtítulo, sinopse, caminho da imagem e gênero do filme selecionado
  componentDidMount() {
    const { match: { params: { id } } } = this.props; // Há uma props padrão com nome de "match", dentro dela tem o params, e nesse params fica informações do id. Que foram passadas pelo <Link to={ `/movies/${id}` }>VER DETALHES</Link>
    movieAPI.getMovie(id) // Com o getMovie, passo como parametro o id, para encontrar o filme
      .then((movie) => { // Quando achar o movie
        this.setState({ movie, status: 'loaded' }); // seta o State status como loaded
      });
  }

  // Ao clicar no botão de submit, uma requisição para API é feita e o filme selecionado é atualizado. Após a conclusão da atualização a pessoa usuária deve ser redirecionada para a página inicial
  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie) // Através da função updateMovie dentro de MovieAPI fazemos a alteração
      .then(() => { // Quando for ok essa requisição de alteração...
        this.setState({ shouldRedirect: true }); // Apontamos para a variável no state que pode ser redirecionado a tela.
      });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) { // Após a conclusão da atualização a pessoa usuária deve ser redirecionada para a página
      return <Redirect to="/" />; // O Redirect tem a mesma função do Link, porém é de redirecionamento
    }

    if (status === 'loading') {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default EditMovie;
