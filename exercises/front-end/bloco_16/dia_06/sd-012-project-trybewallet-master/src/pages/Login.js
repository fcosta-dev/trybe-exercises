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
  stateAutenticado: user.stateAutenticado,
})

const mapDispatchToProps = (dispatch) => ({
  dispatchAutenticacao: (okAutenticado) => dispatch(actionAutenticacao(okAutenticado)),
  dispatchLogin: (email) => dispatch(actionLogin(email))
})

// Por não ter necessidade de leitura da Store, temos apenas o Disparo para gravar algo na Store
// export default connect(null, null)(Login);
export default Login;
