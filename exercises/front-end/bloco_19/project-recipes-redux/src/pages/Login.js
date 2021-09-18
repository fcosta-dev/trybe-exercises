import React from 'react';
import { shape, func } from 'prop-types';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      isNotValid: true,
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.validButton = this.validButton.bind(this);
    this.renderLogin = this.renderLogin.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    }, () => this.validButton());
  }

  handleLogin() {
    const { email } = this.state;
    const userEmail = { email };
    const { history } = this.props;
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify(userEmail));
    history.push('/comidas');
  }

  validButton() {
    const { email, password } = this.state;
    const LENGTH_SIX = 6;
    const regex = /^[\w]+@([\w]+\.)+[\w]{2,4}$/gi.test(email);
    if (regex
    && password.length > LENGTH_SIX) {
      this.setState({ isNotValid: false });
    } else {
      this.setState({ isNotValid: true });
    }
  }

  renderLogin() {
    const { email, password, isNotValid } = this.state;
    return (
      <div>
        <form>
          <div className="login-input">
            <label htmlFor="email">
              Enter you email:
              <input
                type="email"
                name="email"
                onChange={ this.handleChange }
                data-testid="email-input"
                value={ email }
                placeholder="exemplo@exemplo.com"
                required
              />
            </label>
          </div>
          <div className="login-input">
            <label htmlFor="name">
              Enter you password:
              <input
                type="password"
                name="password"
                onChange={ this.handleChange }
                data-testid="password-input"
                value={ password }
                required
              />
            </label>
          </div>
          <button
            type="button"
            onClick={ this.handleLogin }
            disabled={ isNotValid }
            className="button-jogar"
            data-testid="login-submit-btn"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderLogin()}
      </div>

    );
  }
}

Login.propTypes = {
  history: shape({
    push: func.isRequired,
  }).isRequired,
};

export default Login;
