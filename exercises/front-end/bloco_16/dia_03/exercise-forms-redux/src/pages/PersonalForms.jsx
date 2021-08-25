import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setPersonalValue } from '../redux/action/action';
import Input from '../components/Input';
import Button from '../components/Button';
import Select from '../components/Select';

class PersonalForm extends Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  // Função genérica para salvar o que é digitado no input dentro do estado
  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  // Função executada ao clicar no botão
  // Por enquanto vai exibir um console.log com as informações
  // do estado e vai redirecionar para a página seguinte
  onSubmitForm() {
    const { history, dispatchSetValue } = this.props;
    // Disparamos a nossa action através da função importada
    // de actions.js, que apelidamos de dispatchSetValue
    dispatchSetValue(this.state);
    history.push('/professionalform');
  }

  render() {
    const { nome, email, cpf, endereco, cidade, estado } = this.state;
    // Constante com alguns estados do Brasil, que será passada
    // através das props para o componente Select
    // que irá receber esse array e fazer o map das opções
    const states = [
      'Rio de Janeiro',
      'Minas Gerais',
      'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];
    return (
      <fieldset>
        <Input
          label="nome: "
          type="text"
          onChange={ this.handleChange }
          value={ nome }
          name="nome"
          required
        />
        <Input
          label="email: "
          type="text"
          onChange={ this.handleChange }
          value={ email }
          name="email"
          required
        />
        <Input
          label="cpf: "
          type="text"
          onChange={ this.handleChange }
          value={ cpf }
          name="cpf"
          required
        />
        <Input
          label="endereco: "
          type="text"
          onChange={ this.handleChange }
          value={ endereco }
          name="endereco"
          required
        />
        <Input
          label="cidade: "
          type="text"
          onChange={ this.handleChange }
          name="cidade"
          value={ cidade }
        />
        <Select
          defaultOption="Selecione"
          onChange={ this.handleChange }
          value={ estado }
          label="Estado: "
          id="estado"
          name="estado"
          options={ states }
        />
        <Button type="button" label="Enviar" onClick={ this.onSubmitForm } />
      </fieldset>
    );
  }
}

PersonalForm.propTypes = {
  dispatchSetValue: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  // dispatchSetValue é um "apelido" para executarmos a nossa action creator
  // Nossa action creator é a função importada do arquivo actions
  // ou seja, setPersonalValue,
  // que vai receber um parâmetro
  // esse parâmetro é o estado do nosso componente
  // aqui estamos apenas avisando que vai existir um parâmetro
  // mas o estado do componente é passado no momento da execução
  // nesse caso, dentro da função onSubmitForm
  dispatchSetValue: (valueAndName) => dispatch(setPersonalValue(valueAndName)),
}
);

const mapStateToProps = (state) => ({ personalInputs: state.reducer.personalInputs });

// a função connect conversa com o Provider, um avisa o outro quando há alterações.
export default connect(mapStateToProps, mapDispatchToProps)(PersonalForm);
