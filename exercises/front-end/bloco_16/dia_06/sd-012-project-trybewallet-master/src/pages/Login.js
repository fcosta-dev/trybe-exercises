import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// Importa as actions
import { actionAutenticacao, actionLogin } from '../actions';

// Importa a imagem da carteira/wallet
import wallet from '../images/wallet.jpg';

class Login extends Component {
  constructor(props) {
    super(props);

    // State inicial
    this.state = {
      email: '',
      password: '',
    };

    // Libera as funções abaixo com o this para serem usadas em toda a classe
    this.handleChange = this.handleChange.bind(this);
    // Essas funções são para renderizar a page
    this.emailRender = this.emailRender.bind(this);
    this.passwordRender = this.passwordRender.bind(this);
  }

  // Cada movimento ele guarda na state o elemento e o valor e executa o autenticador
  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    }, () => this.autenticador());
  }

  autenticador() {
    // Pega do state
    const { email, password } = this.state;
    // Chave criada pelo mapDispatchToProps que recebe uma função
    // dispatchAutenticacao: (okAutenticado) => dispatch(actionAutenticacao(okAutenticado))
    const { dispatchAutenticacao } = this.props;
    const emailReg = /^[a-z0-9_.]+@[a-z0-9]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;
    const tamanhoMinimo = 6;
    // Use test() sempre que você quiser saber se um padrão está dentro de uma string
    dispatchAutenticacao(emailReg.test(email) && password.length >= tamanhoMinimo);
  }

  // Renderiza o campo email e o configura
  emailRender() {
    // Pega na state o email
    const { email } = this.state;

    return (
      <label htmlFor="email-input">
        <h3 style={ { display: 'flex', justifyContent: 'center' } }>
          Login
        </h3>
        <input
          data-testid="email-input"
          type="email"
          name="email"
          id="email-input"
          placeholder="email"
          style={ { height: '25px' } }
          onChange={ this.handleChange }
          value={ email }
        />
      </label>
    );
  }

  passwordRender() {
    // Pega na state o password
    const { password } = this.state;

    return (
      <label htmlFor="password-input">
        <input
          data-testid="password-input"
          type="password"
          name="password"
          id="password-input"
          placeholder="senha"
          style={ { height: '25px' } }
          onChange={ this.handleChange }
          value={ password }
        />
      </label>
    );
  }

  render() {
    const { email } = this.state;
    // A desconstrução abaixo da props foi criada pelos Maps
    // o stateAutenticado foi criado pelo MapStateToProps
    // o dispatchLogin foi criado pelo MapDispatchToProps
    const { stateAutenticado, dispatchLogin } = this.props;

    return (
      <div className="login">
        <form className="forms-div">
          <div
            className="div_inputs"
            // Style abaixo é para deixar a tela de login visualmente mais bonita
            // Era possível colocar em um CSS, mas achei mais prático colocar aqui
            style={ {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '40vh',
              flexDirection: 'column',
            } }
          >
            {/* Div criada para mostrar imagem de carteira/wallet */}
            <div className="logo-div">
              <img src={ wallet } alt="wallet" />
            </div>
            {/* Funções criadas com HTML fora do render devido eslist */}
            { this.emailRender() }
            { this.passwordRender() }
            <br />
            { /* Quando ok, redireciona o link para /carteira */}
            <Link to="/carteira">
              <button
                type="button"
                onClick={ () => dispatchLogin(email) }
                // Faz a leitura na state se o usuário está ou não autenticado
                disabled={ !stateAutenticado }
              >
                Entrar
              </button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

// Faz a props validation
Login.propTypes = {
  stateAutenticado: PropTypes.bool.isRequired,
  dispatchAutenticacao: PropTypes.func.isRequired,
  dispatchLogin: PropTypes.func.isRequired,
};

// Faz a leitura
const mapStateToProps = ({ user }) => ({
  stateAutenticado: user.stateAutenticado,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchAutenticacao: (okAutenticado) => dispatch(actionAutenticacao(okAutenticado)),
  dispatchLogin: (email) => dispatch(actionLogin(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
