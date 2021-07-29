import React, { Component } from 'react';
import { Redirect } from 'react-router';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie) // Executa a função createMovie da movieAPI
      .then(() => { // quando a requisição retornar, então...
        this.setState({ // ... eu altero o State abaixo permitindo que pode ser redirecionado a página
          redirect: true, // Altera o state redirect para true
        });
      });
  }

  render() {
    const { redirect } = this.state; // Desestruturo o redirect do State

    if (redirect) return <Redirect to="/" />; // Eu coloco esse if antes do return abaixo porque se caso eu fizer a inclusão, meu próximo passo é redirecionar a página.
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
