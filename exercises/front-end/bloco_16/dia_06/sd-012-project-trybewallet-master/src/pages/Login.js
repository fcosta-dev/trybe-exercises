import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


import { actionAutenticacao, actionLogin } from '../actions'

// Importa a imagem da carteira/wallet
import wallet from '../images/wallet.jpg';

class Login extends React.Component {
  constructor(props) {
    super(props);

    // State inicial
    this.state = {
      email: '',
      password: '',
    };

    // Libera as funções abaixo com o this para serem usadas em toda a classe
    // Essas funções são para renderizar a page
    this.emailRender = this.emailRender.bind(this);
    this.passwordRender = this.passwordRender.bind(this);
  }

  // Renderiza o campo email e o configura
  emailRender() {
    const { email } = this.state;

    return (
      <label htmlFor="email-input">
        <h3 style={ { display: 'flex', justifyContent: 'center' } } >
          Login
        </h3>
        <input
          data-testid="email-input"
          type="email"
          name="email"
          id="email-input"
          value={ email }
          onChange={ (event) => this.setState({ email: event.target.value }) }
          placeholder="email"
          style={ { height: '25px' } }
        />
      </label>
    );
  }

  passwordRender() {
    const { password } = this.state;

    return (
      <label htmlFor="password-input">
        <input
          data-testid="password-input"
          type="password"
          name="password"
          id="password-input"
          value={ password }
          onChange={ (event) => this.setState({ password: event.target.value }) }
          placeholder="senha"
          style={ { height: '25px' } }
        />
      </label>
    );
  }

  render() {
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
                onClick={ () => console.log('Clicou') }
                {/* Ao entrar na página o botão vai constar como desabilitado */}
                disabled="true"
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


const mapStateToProps = ({ user }) => ({
  .
})
// const mapDispatchToProps = (dispatch) => ({
//   login: event => dispatch(login(event))});

// Por não ter necessidade de leitura da Store, temos apenas o Disparo para gravar algo na Store
// export default connect(null, null)(Login);
export default Login;
