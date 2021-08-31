import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputCard from '../components/InputCard';
import fetchToken from '../redux/fetchs/fetchToken';
import { actionSaveDataUser } from '../redux/actions/index';
import '../styles/Login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    // State inicial vai ser as chaves abaixo:
    this.state = {
      email: '',
      playerName: '',
      validation: true,
      redirect: false,
    };

    // As funções abaixo serão habilitadas para serem usadas em todo o componente/page
    this.onHandlerChange = this.onHandlerChange.bind(this);
    this.onValidation = this.onValidation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // Assim que a tela de Login for renderizado, esta função será disparada
  componentDidMount() {
    // Desconstrói a getToken que está na mapDipatchToProps
    const { getToken } = this.props;
    // Dispara abaixo uma função '../redux/fetchs/fetchToken', que foi importada
    // Finalidade de pegar o token de sessão da pessoa que está jogando
    getToken();
  }

  // Função que faz a validação do email e password digitado, conforme requisitos. Com isso libera o botão "Entrar" para ser acessado.
  onValidation() {
    const min = 3;
    const { email, playerName } = this.state;

    // Para validação:
    // -> Valida se é email
    // -> Valida se o nome do jogador tem no mínimo 3 caracteres
    // -> Valida nome jogador tem caracteres de A-z
    const validation = !(/\w+@\w+.com/.test(email)
      && playerName.length > min
      && (/[A-z\s]+/).test(playerName));

    this.setState({ validation });
  }

  // Tudo que for digitado nos campos, é alterado automaticamente na state
  // Conforme for digitando e guardando na state, o loginValidation é executado assíncrono, para ter uma validação instantânea conforme digitação
  onHandlerChange({ target: { name, value } }) {
    this.setState({ [name]: value }, () => {
      this.onValidation();
    });
  }

  // Essa função vai ser executada quando clicar no botão "Jogar"
  onSubmit(event) {
    // Basicamente evita o reaload de página quando der submit
    event.preventDefault();
    // Desconstrói direto do state o email e o playerName gravado
    const { email, playerName } = this.state;
    // Desconstrói o saveUser da props, criado pela mapDipatchToProps disparando a action actionSaveDataUser que vai basicamente salvar na state o email e o playerName
    const { saveUser } = this.props;
    saveUser({ email, playerName });
    // Aponta que o redirect da state é true, ou seja, login realizado com sucesso e pagina redirecionada
    this.setState({ redirect: true });

    // Busca no localStorage todas as informações que tem no state.
    // Para não dar undefined eu coloquei || {} para retornar objeto vazio
    const state = JSON.parse(localStorage.getItem('state')) || {};
    // Renova/Grava no localStorage as informações do state conforme abaixo, com zeramento de score/pontuação e assertions/acertos
    localStorage.setItem(
      'state',
      JSON.stringify({
        player: {
          ...state.player,
          name: playerName,
          gravatarEmail: email,
          score: 0,
          assertions: 0,
        },
      }),
    );
  }

  render() {
    const { token } = this.props;
    const { email, playerName, validation, redirect } = this.state;

    if (redirect && token) { return <Redirect to="/game" />; }

    // O componente InputCard foi criado para resolver problemas de lint na questão de tamanho de uma função
    return (
      <main className="login-main">
        {/* <h1 className="trybe-trivia">Trybe Trivia</h1> */}
        <img className="logo-trivia1" src="trybe.png" alt="" />
        <img className="logo-trivia2" src="trivia.png" alt="" />
        <br />
        <form onSubmit={ this.onSubmit }>
          <InputCard
            labelText="Jogador"
            id="input-player-name"
            name="playerName"
            type="text"
            value={ playerName }
            onChange={ this.onHandlerChange }
          />
          <InputCard
            labelText="Email"
            id="input-gravatar-email"
            name="email"
            type="texto"
            value={ email }
            onChange={ this.onHandlerChange }
          />
          <br />
          <br />
          <button
            data-testid="btn-play"
            type="submit"
            disabled={ validation }
          >
            Jogar
          </button>
          <Link to="/settings">
            <button data-testid="btn-settings" type="button">
              Settings
            </button>
          </Link>
        </form>
      </main>
    );
  }
}

// A função do mapDispatchToProps é despachar action para a store, com a finalidade de alterar o state da aplicação
// A função dispatch() serve para despachar uma action para o reducer
// Recebe como parametro uma dispatch, e retorna um objeto com chave e valor
const mapDipatchToProps = (dispatch) => ({
// A chave getToken e saveUser são as props do componente que vão ser invocadas
// E eu passo uma callback que vai ser o dispatch que vou realizar na action, no caso será a fetchToken
// O data/payload vai conter o NOVO valor que vai ser passado e alterado na state da store
  getToken: (data) => dispatch(fetchToken(data)),
  saveUser: (data) => dispatch(actionSaveDataUser(data)),
});

// A função mapStateToProps mapeia as states armazenadas na store para uma props
// Ou seja, caso eu quiser acessar os dados providos pelo reducer user, como o caso abaixo, eu devo acessar o caminho do state com o reducer desejado e nomear a prop que o receberá, que no caso abaixo é a token.
const mapStateToProps = (state) => ({
  token: state.user.token,
});

// O connect é responsável por fazer a conexão do meu componente Login com o mapStateToProps e o mapDispatchToProps.
export default connect(mapStateToProps, mapDipatchToProps)(Login);

// Faço a validação se os dados que recebi são válidos
Login.propTypes = {
  getToken: PropTypes.func.isRequired,
  saveUser: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
};
