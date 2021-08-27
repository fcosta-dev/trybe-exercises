import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

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

    this.emailRender = this.emailRender.bind(this);
    this.passwordRender = this.passwordRender.bind(this);
  }

  // Renderiza o campo email e o configura
  emailRender() {
    const { email } = this.state;

    return (
      <label htmlFor="email-input">
        <h3>Login</h3>
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
        {/* Abre imagem de wallet */}
        <div className="logo-div">
          <img src={ wallet } alt="wallet" />
        </div>
        <form className="forms-div">
          <div
            className="div_inputs"
            style={ {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '30vh',
              flexDirection: 'column',
            } }
          >
            { this.emailRender() }
            { this.passwordRender() }
            <br />
            <Link
              to="/clients"
              // Chamo o login que está na props e disparo os panametros email e password
              onClick={ () => console.log('Clicou') }
            >
              Entre
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   login: event => dispatch(login(event))});

// Por não ter necessidade de leitura da Store, temos apenas o Disparo para gravar algo na Store
// export default connect(null, null)(Login);
export default Login;
