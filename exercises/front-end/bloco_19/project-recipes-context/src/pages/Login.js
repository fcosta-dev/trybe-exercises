import React, { useState } from 'react';
import { shape, func } from 'prop-types';

import '../styles/Login.css';

function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const checkValidity = () => {
    const MIN_PASSWORD_LENGTH = 6;
    if (password.length <= MIN_PASSWORD_LENGTH) return false;
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) return false;
    return true;
  };

  const saveToken = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/comidas');
  };

  return (
    <form>
      <div className="login-body">
        <div className="login-content">
          <div className="title">
            <h1>  React Gourmet   </h1>
          </div>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              data-testid="email-input"
              name="email"
              value={ email }
              onChange={ (e) => setEmail(e.target.value) }
              placeholder="Email"
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              type="password"
              data-testid="password-input"
              name="password"
              value={ password }
              onChange={ (e) => setPassword(e.target.value) }
              placeholder="Senha"
            />
          </label>
          <button
            type="button"
            data-testid="login-submit-btn"
            disabled={ !checkValidity() }
            onClick={ saveToken }
          >
            Entrar
          </button>
        </div>
      </div>
    </form>
  );
}

Login.propTypes = {
  history: shape({
    push: func,
  }).isRequired,
};

export default Login;
